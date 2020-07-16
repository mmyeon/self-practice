const gnb_button = document.getElementById("gnb_button");
const bars = document.querySelectorAll(".bar");
const gnb = document.querySelector(".gnb");

gnb_button.addEventListener("click", changeBar);

function changeBar() {
  for (let i = 0; i < bars.length; i++) {
    bars[i].classList.toggle("change");
  }
  gnb.style.display = gnb.style.display === "flex" ? "none" : "flex";

  // TODO:bar의 클래스명에 change가 추가됐을때  display="flex"
  // if (bars.classList.contains("change")) {
  //   gnb.style.display = gnb.style.display === "none" ? "flex" : "none";
  // }
}

// TODO:바에 이벤트를 추가하고 싶은데 데이터타입이 배열이라 element가 아니라 실패함.
// bar에 추가하려면 배열에서 개별 요소를 가져와서 addEventListerner을 각각 먹여야되는가.
