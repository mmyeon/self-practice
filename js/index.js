const gnb_button = document.getElementById("gnb_button");
gnb_button.addEventListener("click", changeMenuButton);

function changeMenuButton() {
  const bars = document.querySelectorAll(".bar");
  for (let i = 0; i < bars.length; i++) {
    bars[i].classList.toggle("change");
  }

  const gnb = document.querySelector(".gnb");
  gnb.style.display =
    gnb.style.display === "none" || gnb.style.display === "" ? "flex" : "none";
}

document.addEventListener("scroll", function () {
  let maxScrollValue = document.body.clientHeight;
  let scrollPer = window.pageYOffset / maxScrollValue;
  scrollPer = scrollPer > 1 ? 1 : scrollPer;
  // TODO: 화면이 커졌을 때(모바일 -> 데스크탑) 대응하는 방법 찾기
  const scroll_bar = document.querySelector(".scroll_bar");
  scroll_bar.style.top = `${scrollPer * 97}` + "%";

  // console.log("window.pageYOffset", window.pageYOffset);
  // console.log("maxScrollValue", maxScrollValue);
  // console.log("scrollPer", scrollPer);
});
