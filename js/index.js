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

const firstSlide = document.querySelector(".testimonials_detail:first-child");
const SHOWING_CLASS = "showing";

function slide() {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);

  // currentSlide가 없으면 처음요소를 보여주는 코드
  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
      nextSlide.classList.add(SHOWING_CLASS);
    } else {
      firstSlide.classList.add(SHOWING_CLASS);
    }
  } else {
    firstSlide.classList.add(SHOWING_CLASS);
  }
}

const circles = document.querySelectorAll(".circle");
const slide_items = document.querySelectorAll(".testimonials_detail");

console.log(slide_items);
circles[0].addEventListener("click", function slideFirst() {
  circles[0].classList.add("clicked");
  slide_items[0].classList.add("showing");
  slide_items[1].classList.remove("showing");
  circles[1].classList.remove("clicked");
});

circles[1].addEventListener("click", function slideFirst() {
  circles[1].classList.add("clicked");
  slide_items[1].classList.add("showing");
  slide_items[0].classList.remove("showing");
  circles[0].classList.remove("clicked");
});

this.classList.toggle("class");

// TODO:왜 리로딩 하면 클릭하지 않아도 wow가 두번 찍힐까
circles.forEach((circle) =>
  circle.addEventListener("click", console.log("wow"))
);

// 개선
