const marqueeEls = document.querySelectorAll('.marquee__content');

foreach.marqueeEls((marqueeEl) => {
  marqueeEl
});


//1. 첫번째 마퀴가 흐를때 뒤에 마퀴를 데리고 나온다
//2. 첫번째 마퀴가 끝나면 두번째 뒤로 보낸다?


// position relative left ,right 속성을 이용해 setinterval 로 좌표를 -1씩 움직인다
// translate3d 를 이용해 x좌표를 움직이는데 역시 setinterval로 좌표를 움직인다.