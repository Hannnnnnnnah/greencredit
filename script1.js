// 动态更新图表的代码
const industries = {
  all: { companies: ["台泥 (1101)", "福懋 (1434)", "黑松 (1234)", "八方雲集 (2753)"], scores: [78.94, 21.80, 82.32, 46.78] },
  manufacturing: { companies: ["台泥 (1101)", "福懋 (1434)", "永光 (1711)"], scores: [78.94, 21.80, 42.62] },
  services: { companies: ["台塑 (1301)", "黑松 (1234)", "光寶科 (2301)"], scores: [20.96, 82.32, 90.47] },
  semiconductors: { companies: ["國賓 (2704)", "八方雲集 (2753)", "聯邦銀 (2838)"], scores: [74.53, 46.78, 84.81] },
};

function updateChart(industry) {
  const data = industries[industry] || industries["all"];
  const ctx = document.getElementById("rankingChart").getContext("2d");

  if (window.rankingChart instanceof Chart) {
    window.rankingChart.destroy();
  }

  window.rankingChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: data.companies,
      datasets: [
        {
          label: "企業環保分數",
          data: data.scores,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        //annotation: {
          annotations: {
            referenceLine: {
              type: "line",
              yMin: 70,
              yMax: 70,
              borderColor: "red",
              borderWidth: 2,
              label: {
                enabled: true,
                content: "70分參考線",
                position: "end",
              },
            },
          },
        //},
      },
    },
  });
}

document.getElementById("industryFilter").addEventListener("change", (event) => {
  const selectedIndustry = event.target.value;
  updateChart(selectedIndustry);
});

// 初始加载默认图表
document.addEventListener("DOMContentLoaded", () => {
  updateChart("all");
});
