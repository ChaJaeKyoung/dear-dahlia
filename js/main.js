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