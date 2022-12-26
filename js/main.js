//버튼 test 
const btnPrev = document.querySelector('.side-bar .btn__prev');
btnPrev.addEventListener('click', function () {
  console.log('click');
});

//dahlia's pick 토글
const dahliaPickToggleEls = document.querySelectorAll('.dahlia-pick__titles h3');

dahliaPickToggleEls.forEach(function(dahliaPickToggleEl, index) {
  dahliaPickToggleEl.addEventListener('click', function () {
    dahliaPickToggleEls.forEach(function (pickEl) {
      pickEl.classList.remove('active');
    })
    dahliaPickToggleEl.classList.add('active');
    // if(dahliaPickToggleEl.classList.contains('active')!=true) {
    //   dahliaPickToggleEl.classList.remove('active');
    // }

    document.querySelectorAll('.pick-' + (index + 1));
  });
})