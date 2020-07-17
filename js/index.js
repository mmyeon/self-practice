const gnb_button = document.getElementById("gnb_button");
const bars = document.querySelectorAll(".bar");
const gnb = document.querySelector(".gnb");
const scroll_bar = document.querySelector(".scroll_bar");

gnb_button.addEventListener("click", changeMenuButton);

function changeMenuButton() {
  for (let i = 0; i < bars.length; i++) {
    bars[i].classList.toggle("change");
  }
  gnb.style.display =
    gnb.style.display === "none" || gnb.style.display === "" ? "flex" : "none";
}

let maxScrollValue = document.body.clientHeight - window.innerHeight;

let scroll = window.pageYOffset / document.body.clientHeight;
// let scroll = window.pageYoffset / document.body.clientHeight;
// console.log(scroll);

document.addEventListener("scroll", function () {
  // TODO:1. 스크롤 위치인 pageYOffset을 top으로 잡으면 되지 않을까?
  // scroll_bar.style.top = `${window.pageYOffset}` + "%";
  // 문제가 윈도우 밖으로 scroll bar가 사라짐. 말 그래도 스크롤 위치만큼 변하기 때문에 스크롤 범위가 문서 전체로 되어있음.
  // 스크롤 범위를 계산하는 게 필요함. 그래야 윈도우 창내에서 scroll bar존재하니까
  scroll_bar.style.top = `${(window.pageYOffset / maxScrollValue) * 51}` + "%";

  // 윈도우 창 밖으로 나감. 맥스스크롤 값이 0 ~ 100프로가 되어야 하는데 지금은 1.6이 최대값으로 잡힘.

  // 윈도우 창의 높이
  console.log("window.innerHeight", window.innerHeight);
  // 문서의 높이
  console.log("document.body.clientHeight", document.body.clientHeight);

  console.log(
    "maxScrollValue",
    window.pageYOffset / maxScrollValue - 100 * 100
  );
  console.log("maxScrollValue", maxScrollValue);

  // console.log(window.pageYOffset);
  // console.log("document.body.clientHeight", document.body.clientHeight);
  console.log("scroll", scroll);
});

// 스크롤 시작하면 계속 감, 스크롤 한 번에 문서 끝에 가는 놀라운 사실!
window.scrollBy(0, 10);
