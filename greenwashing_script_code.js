// JavaScript to handle interactive flowchart and card animations

document.addEventListener("DOMContentLoaded", function() {
    // Flowchart interaction
    const flowchartImage = document.querySelector("#interactive-flowchart img");
    flowchartImage.addEventListener("click", function() {
      alert("這是漂綠手法的詳細說明。您可以通過點擊不同部分查看更多信息。");
    });
  
    // Card interaction for additional information
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      card.addEventListener("click", function() {
        alert(`更多關於 ${card.querySelector("h4").innerText} 的信息`);
      });
    });
  });
  function openModal(title, description, example) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-description").innerText = `解釋：${description}`;
    document.getElementById("modal-example").innerText = `案例：${example}`;
    document.getElementById("modal").style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  