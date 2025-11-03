document.addEventListener("DOMContentLoaded", () => {
  const tabMenu = document.querySelector(".sub-container ul.tab-menu");
  const tabs = tabMenu.querySelectorAll("li");
  const tabIndicator = tabMenu.querySelector("::before"); // 이 방법은 작동하지 않습니다.

  // 실제로는 ::before에 접근하는 대신, tab-menu 자체에 클래스나 스타일을 적용하거나,
  // 새로운 인디케이터 요소를 만들어야 합니다.

  // **가장 간단한 방법: JavaScript로 left 스타일을 직접 조작**

  // 1. 가상 요소 대신 실제 DOM 요소를 인디케이터로 사용
  //    -> HTML/CSS 구조 변경이 필요합니다.

  // 2. 가상 요소의 스타일을 JavaScript로 직접 변경 (권장되지 않음)
  //    -> `::before`는 직접 선택할 수 없으므로, **`.tab-menu`에 변수를 설정**하여 간접적으로 제어합니다.

  // 💡 CSS 변수를 이용해 left 값을 제어하는 방법

  // 현재 활성화된(클릭된) 탭의 인덱스를 저장합니다. (기본값: 0 - '상품정보')
  let activeIndex = 0;

  // 현재 활성화된 탭에 맞춰 초기 left 값을 설정합니다.
  tabMenu.style.setProperty("--indicator-left", "0%");

  // CSS에 아래 코드를 추가하여 left 속성을 변수로 제어하도록 변경
  /*
    .sub-container ul.tab-menu::before {
        ... (기존 스타일)
        left: var(--indicator-left); // left 값을 변수로 대체
    }
    */

  tabs.forEach((tab, index) => {
    // 마우스 진입 시 (Hover)
    tab.addEventListener("mouseover", () => {
      const newLeft = index * 25 + "%"; // 100% / 4 = 25%
      tabMenu.style.setProperty("--indicator-left", newLeft);
    });

    // 마우스 이탈 시 (Hover End)
    tab.addEventListener("mouseout", () => {
      // 마우스가 벗어나면 현재 활성화된 탭의 위치로 되돌아갑니다.
      const currentActiveLeft = activeIndex * 25 + "%";
      tabMenu.style.setProperty("--indicator-left", currentActiveLeft);
    });

    // 탭 클릭 시 (활성 탭 변경) - `.on` 클래스 처리 및 activeIndex 업데이트
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("on"));
      tab.classList.add("on");
      activeIndex = index; // 활성 탭 인덱스 업데이트

      // 클릭 후 위치를 확정
      const activeLeft = activeIndex * 25 + "%";
      tabMenu.style.setProperty("--indicator-left", activeLeft);
    });
  });

  // 초기 활성 탭 설정 (필요하다면)
  tabs[activeIndex].classList.add("on");
});

// -------------------------
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("toggleDetailButton");
  const imgContainer = document.querySelector(".img-container");

  if (button && imgContainer) {
    // 초기 상태: 접혀있음
    imgContainer.classList.add("collapsed");
    button.textContent = "더보기";

    button.addEventListener("click", () => {
      // 'collapsed' 클래스를 토글 (추가/제거)합니다.
      // CSS에서 이 클래스가 없을 때 'expanded'와 같은 효과가 납니다.
      const isCollapsed = imgContainer.classList.contains("collapsed");

      if (isCollapsed) {
        // '더보기' -> '접기'로 변경 및 전체 노출
        imgContainer.classList.remove("collapsed");
        imgContainer.classList.add("expanded");
        button.textContent = "간략히 보기";
      } else {
        // '간략히 보기' -> '더보기'로 변경 및 초기 노출 (600px)
        imgContainer.classList.remove("expanded");
        imgContainer.classList.add("collapsed");
        button.textContent = "더보기";
      }
    });
  }
});
