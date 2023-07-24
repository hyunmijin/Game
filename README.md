## GAME

테트리스 게임과 뮤직 플레이어를 만들었습니다.

site : https://hhh-game-ecc73.web.app/

## 사용 스택
<ul>GAME
  <li>JavaScript:
JavaScript는 웹 페이지의 동적인 기능을 구현하기 위해 사용되는 프로그래밍 언어입니다. 이 코드에서는 JavaScript를 사용하여 DOM(Document Object Model) 요소를 조작하고, 이벤트 핸들링을 처리하며, 애니메이션과 게임 루프를 구현하는 등 다양한 기능을 수행합니다.</li>
    <li>HTML & CSS:
코드 내에서는 HTML과 CSS를 사용하여 웹 페이지의 구조와 스타일을 정의합니다. 테트리스 게임 화면이 구성되는데 사용됩니다.</li>
      <li>GSAP (GreenSock Animation Platform):
GSAP는 JavaScript 기반의 애니메이션 라이브러리로, 웹 페이지에서 다양한 애니메이션 효과를 쉽게 구현하기 위해 사용됩니다. GSAP는 TweenMax, TimelineMax, ScrollTrigger 등 다양한 모듈을 제공하며, 이 코드에서는 ScrollTrigger를 사용하여 스크롤에 반응하는 애니메이션을 구현하는 데 사용됩니다.</li>
        <li>DOM (Document Object Model):
DOM은 웹 페이지의 문서 구조를 표현하는 객체 모델로, JavaScript를 사용하여 웹 페이지의 요소들에 접근하고 조작하는 데 사용됩니다. 이 코드에서는 DOM을 사용하여 테트리스 게임 화면을 동적으로 변경하고 업데이트하는 데 활용됩니다.</li>
  <li>setInterval & clearInterval:
JavaScript의 setInterval과 clearInterval 함수를 사용하여 주기적인 작업을 수행하고 애니메이션을 구현합니다. setInterval을 사용하여 블록이 아래로 이동하는 애니메이션을 구현하고, clearInterval을 사용하여 애니메이션을 멈추는 등에 사용됩니다.</li>
  <li>Event Listeners:
JavaScript의 addEventListener를 사용하여 사용자의 키보드 입력에 반응하는 이벤트 핸들러를 등록합니다. 키보드 입력에 따라 블록의 이동, 회전, 하강 등을 제어합니다.</li>
</ul>
