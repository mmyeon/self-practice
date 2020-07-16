const gnb_button = document.getElementById("gnb_button");
const bars = document.querySelectorAll(".bar");
const gnb = document.querySelector(".gnb");

gnb_button.addEventListener("click", changeMenuButton);

function changeMenuButton() {
  for (let i = 0; i < bars.length; i++) {
    bars[i].classList.toggle("change");
  }
  gnb.style.display === "none" || gnb.style.display === "" ? "flex" : "none";
}
