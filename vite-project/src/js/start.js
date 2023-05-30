function start(){
        $(".icon1").draggable({
            containment: ".icon__box", scroll: false,

            start: function () {
                $(".cursor img").attr("src", "images/game_mouse01.png");
                $("#header").css("background-color", "#ff33007e");
            },
            drag: function () {
                $(".info").html("지금은 빨간색 폴더를 드래그중입니다.")
            },
            stop: function () {
                $(".info").html("드래그가 멈췄습니다.");
                settime(); 
            }
        });
        $(".icon2").draggable({
            containment: ".icon__box", scroll: false,

            start: function () {
                $(".cursor img").attr("src", "images/game_mouse02.png");
                $("#header").css("background-color", "#5100ff7e");
            },
            drag: function () {
                $(".info").html("지금은 파란색 폴더를 드래그중입니다.")
            },
            stop: function () {
                $(".info").html("드래그가 멈췄습니다.");
            }
        });
        $(".icon3").draggable({
            containment: ".icon__box", scroll: false,

            start: function () {
                $(".cursor img").attr("src", "images/game_mouse03.png");
                $("#header").css("background-color", "#04ff007e");
            },
            drag: function () {
                $(".info").html("지금은 녹색 폴더를 드래그중입니다.")
            },
            stop: function () {
                $(".info").html("드래그가 멈췄습니다.");
            }
        });
        $(".icon4").draggable({
            containment: ".icon__box", scroll: false,

            start: function () {
                $(".cursor img").attr("src", "images/game_mouse04.png");
                $("#header").css("background-color", "#eeff007e");
            },
            drag: function () {
                $(".info").html("지금은 노란색 폴더를 드래그중입니다.")
            },
            stop: function () {
                $(".info").html("드래그가 멈췄습니다.");
            }
        });
        $(".music__wrap").draggable({
            scroll: false,

        });


        window.onload = function () {
            window.addEventListener("mousemove", e => {
                gsap.to(".cursor", {
                    trantion: 0,
                    left: e.pageX - 7,
                    top: e.pageY - 10
                });
            });    

        }

        // $("#draggable3").draggable({ containment: "#containment-wrapper", scroll: false });

        function updateTime() {
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth() + 1;
            const day = now.getDate();
            const hour = now.getHours();
            const minute = now.getMinutes();
            const second = now.getSeconds();

            const timeElem = document.querySelector(".time");
            timeElem.textContent = `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분 ${second}초`;
        };
        setInterval(updateTime, 1000);

        //운영 체제 정보 가져오기
        let osName = window.navigator.platform.toLowerCase();

        //현재 화면 크기 가져오기
        let screenWidth = window.innerWidth || documentElement.body.clientWidth;
        let screenHeight = window.innerHeight || documentElement.body.clientHeight;

        //운영체제에 따라 메세지 출력
        function os() {
            if (osName.includes('mac')) {
                document.getElementById('osName').innerText = 'masOS (맥)';
            } else if (osName.includes('win')) {
                document.getElementById('osName').innerText = 'Windows';
            } else if (osName.includes('iphone')) {
                document.getElementById('osName').innerText = 'iPhone';
            } else if (osName.includes('galaxy')) {
                document.getElementById('osName').innerText = 'Galaxy';
            } else {
                document.getElementById('osName').innerText = '다른 운영체제';
            }
        }
        document.getElementById('screenSize').innerText = screenWidth + 'X' + screenHeight;

}

export default start;