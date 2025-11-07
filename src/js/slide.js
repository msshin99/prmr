const mainBanner = new Swiper(".main-visual", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  speed: 800,
  autoplay: {
    // 💡 참고: autoplay 설정을 추가하여 페이지네이션 애니메이션과 동기화할 수 있습니다.
    delay: 5000, // CSS의 animation-duration과 일치하도록 3초 설정
    disableOnInteraction: false,
  },
  pagination: {
    el: ".main-pagination",
    clickable: true,
  },

  navigation: {
    prevEl: ".prev",
    nextEl: ".next",
  },
});

// ✅ 활성 bullet의 fill 애니메이션 종료 시 다음 슬라이드
function attachProgressEvent() {
  const activeBullet = document.querySelector(
    ".swiper-pagination-bullet-active"
  );

  if (!activeBullet) return; // 기존 이벤트 제거 (중복 방지)

  activeBullet.removeEventListener("animationend", moveNextAfterFill); // 새로 이벤트 등록

  activeBullet.addEventListener("animationend", moveNextAfterFill);
}

function moveNextAfterFill() {
  // ➡️ 수정: 'device' 대신 정의된 'mainBanner' 변수 사용
  mainBanner.slideNext();
  // 애니메이션 종료 후 다음 슬라이드로 넘어갈 때,
  // Swiper가 자동으로 다음 슬라이드로 넘어갔으므로 이 시점에서
  // 'autoplay: { delay: 3000 }' 설정이 있다면 'attachProgressEvent()'는
  // 제거하는 것이 더 깔끔할 수 있습니다.
  // Swiper의 기본 autoplay 기능을 사용하면, 페이지네이션 애니메이션을
  // 별도로 수동으로 제어할 필요 없이 CSS와 동기화됩니다.
  // 하지만 수동으로 애니메이션을 제어하는 현재 코드를 유지하려면 아래를 남겨둡니다.
  attachProgressEvent();
}

// 초기 1회 실행
attachProgressEvent();
// ------------------ 제품 리스트 ----------------

const productList = new Swiper(".product-list", {
  slidesPerView: 2,
  spaceBetween: 12,
  loop: true,

  // 마우스 휠 스크롤 활성화
  mousewheel: {
    // 마우스 휠 스크롤 시 한 번에 하나의 슬라이드만 이동하도록 설정
    // 기본적으로 freeMode: false 이면 한 슬라이드씩 이동하지만,
    // 더욱 확실하게 하기 위해 다음 설정을 사용해볼 수 있습니다.
    forceToAxis: true, // 축(가로/세로)에 맞게 강제
    sensitivity: 1, // 스크롤 민감도 조정 (필요에 따라 더 낮은 값으로 설정해볼 수 있음)
  },

  // freeMode: false가 기본값이지만, 명시적으로 설정하여 자유로운 스크롤 모드를 방지
  freeMode: false,

  breakpoints: {
    767: {
      slidesPerView: 3.2,
      spaceBetween: 16,
      // 767px 이상에서도 마우스 휠로 한 슬라이드씩 움직이게 하려면
      // mousewheel 설정을 이 안에도 추가하거나, 상위 설정(기본값)을 사용합니다.
      // freeMode: false,
    },

    1280: {
      slidesPerView: "auto",
      spaceBetween: 24,
      // 1280px 이상에서 freeMode를 비활성화해야 한 슬라이드씩 이동
      freeMode: false,
      // 이 브레이크포인트에서만 마우스 휠 설정을 다르게 하려면 여기에 추가합니다.
    },
  },
});

// ------------------ 프로모션 리스트 ----------------

const promotionList = new Swiper(".promo-visual", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
});

// ------------------ md pick ----------------

const bgPick = new Swiper(".md-list", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true, // Fade 효과에서는 사용 불가

  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  // ✨ 속도를 1초 (1000ms)로 설정하여 부드럽게 전환
  speed: 1000,

  navigation: {
    prevEl: ".md-prev",
    nextEl: ".md-next",
  },
});

// ------------------ md pick ----------------

// JavaScript 코드 예시
document.addEventListener("DOMContentLoaded", function () {
  const eventSwiper = new Swiper(".event-swiper-container", {
    // 슬라이드가 여러 개일 때 유용합니다.
    slidesPerView: 1,
    spaceBetween: 0, // 슬라이드 사이의 간격
    loop: true, // 무한 루프 활성화

    // 페이지네이션 (점들)
    pagination: {
      el: ".event-pagenation",
      clickable: true,
    },

    // 반응형 설정 (필요에 따라 추가)
    breakpoints: {
      767: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
});

// ------------------ 인스타 ----------------

// ------------------ 디테일 페이지 ----------------
const detailPage = new Swiper(".detail-page", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    prevEl: ".detail-prev",
    nextEl: ".detail-next",
  },
  // 👈 이 부분을 추가했습니다.
  pagination: {
    el: ".pagenation", // 페이지네이션 HTML 요소를 지정
    clickable: true, // 점을 클릭하여 슬라이드 이동 가능하게 설정
  },
});

// -----------------------

const photoList = new Swiper(".photo-list", {
  slidesPerView: 3,
  spaceBetween: 4,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    767: {
      slidesPerView: 5,
      spaceBetween: 4,
    },
    1280: {
      slidesPerView: 7,
      spaceBetween: 4,
    },
  },
});
