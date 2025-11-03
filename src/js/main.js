document.addEventListener("DOMContentLoaded", () => {
  // 1. 필요한 모든 요소들을 선택합니다.
  const navigationItems = document.querySelectorAll(
    ".promotion .inner-full ul.list-box li"
  );
  const backgroundImages = document.querySelectorAll(".promotion .bg-img");

  // 2. 각 네비게이션 항목에 클릭 이벤트를 추가합니다.
  navigationItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      // 클릭된 네비게이션 항목에서 목표 ID (data-target)를 가져옵니다.
      const targetId = event.currentTarget.getAttribute("data-target");

      // 3. 모든 배경 이미지를 숨깁니다 (visible 클래스 제거).
      backgroundImages.forEach((img) => {
        img.classList.remove("visible");
      });

      // 4. 모든 네비게이션 항목의 'on' 클래스를 제거합니다.
      navigationItems.forEach((nav) => {
        nav.classList.remove("on");
      });

      // 5. 목표 ID에 해당하는 배경 이미지를 보이게 합니다 (visible 클래스 추가).
      // document.getElementById(targetId)를 사용하여 정확한 요소를 찾습니다.
      const targetImage = document.getElementById(targetId);
      if (targetImage) {
        targetImage.classList.add("visible");
      }

      // 6. 클릭된 네비게이션 항목에 'on' 클래스를 추가하여 활성화 상태를 표시합니다.
      event.currentTarget.classList.add("on");
    });
  });
});
