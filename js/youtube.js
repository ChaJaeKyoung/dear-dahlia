var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      // var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          //js에서 너비높이를 주면 미디어쿼리로 크기 조정할 수 없으므로 css에서 너비높이를 줘야함
          // height: '484',
          // width: '860',
          videoId: 'b8Si68tcpCA', // 최초 재생할 유튜브 영상 ID
          playerVars: { // 자세한 옵션은 플레이어 매개변수 메뉴 확인
            autoplay: true, // 자동 재생 유무
            loop: true, // 반복 재생 유무 (아래 플레이리스트 옵션 필수 영상이 하나일 지라도 반복재생 하고 싶으면 playlist를 꼭 채워줘야한다.)
            playlist: ['b8Si68tcpCA','l4hQ7udfEuM'], // 반복 재생할 유튜브 영상 ID 목록
          },
          modestbranding: 0,
          rel: 0,
          // align: middle,
          events: {
            // 'onReady': onPlayerReady,
            // 'onStateChange': onPlayerStateChange

            // 영상 준비되었을 때 발생하는 이벤트
            onReady: function (event) {
              event.target.mute(); // 음소거!
            }
          }
        });
      }