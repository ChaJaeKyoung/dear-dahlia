//버튼 test 
const btnPrev = document.querySelector('.side-bar .btn__prev');
btnPrev.addEventListener('click', function () {
  console.log('click');
});

//dahlia's pick tab
const pickTabEls = document.querySelectorAll('.dahlia-pick__titles h3');

pickTabEls.forEach(function(pickTabEl, index) {
  pickTabEl.addEventListener('click', function () {
    pickTabEls.forEach(function (pickTabEl) {
      pickTabEl.classList.remove('active');
    });
    // TODO 전체 지우기 Q.22-12-27혹시 숫자 전체를 선택하는 연산자 * 같은 것이 있을까?
    for (n=1;n<=2;n++){
    document.querySelectorAll('.pick-'+ n).forEach(function(pickEl) {
      pickEl.classList.remove('active');      
    });
    }
    // 누른 요소만 active하는 방법
    // pickTabEl.classList.add('active');

    // 차차의 처음생각? --지우기--
    // if(pickTabEl.classList.contains('active')!=true) {
    //   pickTabEl.classList.remove('active');
    // }
    

    // 누른요소pick-n 선택하고 active 클래스 붙이기
    document.querySelectorAll('.pick-' + (index + 1)).forEach(function(pickEl,index) {
      pickEl.classList.add('active');    
  })
    
  });
})

//swiper
// 이벤트베너 수직 슬라이드 기능
new Swiper('.event-banner .swiper', {
  // Optional parameters
  direction: 'vertical', // 수평 슬라이드 (기본값) 빼도 적용
  loop: true, // 반복 재생 여부
  autoplay: {
    delay: 5000 // 5초마다 슬라이드 바뀜
  }, // 자동 재생 여부
  slidesPerView: 2, // 한 번에 보여줄 수 있는 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백(간격) px
  // centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  // pagination: {
  //   el: '.event-banner .swiper-pagination', //페이지 번호 요소
  //   clickable: true, // 사용자의 번호 제어 여부
  // },
  navigation: { // 이전/다음 슬라이드 버튼 사용
    prevEl: '.event-banner .swiper-button-prev',
    nextEl: '.event-banner .swiper-button-next',
  },
});