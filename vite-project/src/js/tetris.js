function tetris() {

        const tetrisView = document.querySelector(".tetris__play .view ul");
        const line_rows = 20; //가로
        const line_cols = 12; //세로
        const blocks = {
                // Tmino: [
                //         [
                //                 [2, 1],
                //                 [0, 1],
                //                 [1, 0],
                //                 [1, 1],
                //         ],
                //         [
                //                 [1, 2],
                //                 [0, 1],
                //                 [1, 0],
                //                 [1, 1],
                //         ],
                //         [
                //                 [1, 2],
                //                 [0, 1],
                //                 [2, 1],
                //                 [1, 1],
                //         ],
                //         [
                //                 [2, 1],
                //                 [1, 2],
                //                 [1, 0],
                //                 [1, 1],
                //         ],
                // ],
                Imino: [
                        [
                                [0, 0],
                                [0, 1],
                                [0, 2],
                                [0, 3],
                        ],
                        [
                                [0, 0],
                                [1, 0],
                                [2, 0],
                                [3, 0],
                        ],
                        [
                                [0, 0],
                                [0, 1],
                                [0, 2],
                                [0, 3],
                        ],
                        [
                                [0, 0],
                                [1, 0],
                                [2, 0],
                                [3, 0],
                        ],
                ],
                // Omino: [
                //         [
                //                 [0, 0],
                //                 [0, 1],
                //                 [1, 0],
                //                 [1, 1],
                //         ],
                //         [
                //                 [0, 0],
                //                 [0, 1],
                //                 [1, 0],
                //                 [1, 1],
                //         ],
                //         [
                //                 [0, 0],
                //                 [0, 1],
                //                 [1, 0],
                //                 [1, 1],
                //         ],
                //         [
                //                 [0, 0],
                //                 [0, 1],
                //                 [1, 0],
                //                 [1, 1],
                //         ],
                // ],
                // Zmino: [
                //         [
                //                 [0, 0],
                //                 [1, 0],
                //                 [1, 1],
                //                 [2, 1],
                //         ],
                //         [
                //                 [1, 0],
                //                 [0, 1],
                //                 [1, 1],
                //                 [0, 2],
                //         ],
                //         [
                //                 [0, 0],
                //                 [1, 0],
                //                 [1, 1],
                //                 [2, 1],
                //         ],
                //         [
                //                 [1, 0],
                //                 [0, 1],
                //                 [1, 1],
                //                 [0, 2],
                //         ],
                // ],
                // Smino: [
                //         [
                //                 [1, 0],
                //                 [2, 0],
                //                 [0, 1],
                //                 [1, 1],
                //         ],
                //         [
                //                 [0, 0],
                //                 [0, 1],
                //                 [1, 1],
                //                 [1, 2],
                //         ],
                //         [
                //                 [1, 0],
                //                 [2, 0],
                //                 [0, 1],
                //                 [1, 1],
                //         ],
                //         [
                //                 [0, 0],
                //                 [0, 1],
                //                 [1, 1],
                //                 [1, 2],
                //         ],
                // ],
                // Jmino: [
                //         [
                //                 [0, 2],
                //                 [1, 0],
                //                 [1, 1],
                //                 [1, 2],
                //         ],
                //         [
                //                 [0, 0],
                //                 [0, 1],
                //                 [1, 1],
                //                 [2, 1],
                //         ],
                //         [
                //                 [0, 0],
                //                 [1, 0],
                //                 [0, 1],
                //                 [0, 2],
                //         ],
                //         [
                //                 [0, 0],
                //                 [1, 0],
                //                 [2, 0],
                //                 [2, 1],
                //         ],
                // ],
                // Lmino: [
                //         [
                //                 [0, 0],
                //                 [0, 1],
                //                 [0, 2],
                //                 [1, 2],
                //         ],
                //         [
                //                 [0, 0],
                //                 [1, 0],
                //                 [2, 0],
                //                 [0, 1],
                //         ],
                //         [
                //                 [0, 0],
                //                 [1, 0],
                //                 [1, 1],
                //                 [1, 2],
                //         ],
                //         [
                //                 [0, 1],
                //                 [1, 1],
                //                 [2, 0],
                //                 [2, 1],
                //         ],
                // ],
        };

        let score = 0;
        let totalScore = 0;
        const tetrisOpen = document.querySelector(".icon2");
        const tetrisClose = document.querySelector(".tetris__close");
        const tetrisWrap = document.querySelector(".tetris__wrap");
        const scoreDisplay = document.getElementById("scoreDisplay");
        const totalScoreDisplay = document.getElementById("totalScoreDisplay");
        const totalScore2Display = document.getElementById("totalScore2Display");
        const restart = document.getElementById(".modal-content");
        const tetrisMplay = document.getElementById(".tetris__music .play");
        const tetrisMstop = document.getElementById(".tetris__music .stop");


        tetrisOpen.addEventListener("click", () => {
                tetrisWrap.style.display = "block";
        });

        tetrisClose.addEventListener("click", () => {
                tetrisWrap.style.display = "none";
                // tetrisMusic.pause();
        });
        document.querySelector(".tetris__start").addEventListener("click", () => {
                document.querySelector(".tetris__card").style.display = "block";
                document.querySelector(".tetris__intro").style.display = "none";
                // tetrisMstop.style.display = "block";
                init();
        });

        let duration = 500;
        let downInterval;
        let tempMovingItem;
        const movingItem = {
                //블록의 정보 변수
                type: "",
                direction: 0,
                top: 0,
                left: 4,
        };

        // 시작하기
        function init() {
                score = 0; // Reset the score to 0
                scoreDisplay.innerText = "현재 점수는 " + score + " 점 입니다."; // Update the score display

                tempMovingItem = { ...movingItem };
                newLine();
                generateNewBlock();
                renderBlocks();
        }
        // 라인 만들기
        function newLine() {
                const currentLines = tetrisView.querySelectorAll('ul');
                const currentLineCount = currentLines.length;
                const deletedLineCount = line_rows - currentLineCount;

                if (deletedLineCount > 0) {
                        for (let i = 0; i < deletedLineCount; i++) {
                                const li = document.createElement('li');
                                const ul = document.createElement('ul');
                                for (let j = 0; j < line_cols; j++) {
                                        const subLi = document.createElement('li');
                                        ul.prepend(subLi);
                                }
                                li.prepend(ul);
                                tetrisView.prepend(li);
                        }
                }
        }


        // 블록 만들기
        function renderBlocks(moveType = "") {
                // console.log(movingItem.type);
                // console.log(movingItem.direction);
                // console.log(movingItem.top);
                // console.log(movingItem.left);
                // const type = movingItem.type;
                // const direction = movingItem.direction;
                // const top = movingItem.top;
                // const left = movingItem.left;
                const { type, direction, top, left } = tempMovingItem;
                // console.log(type, direction, top, left);
                const movingBlocks = document.querySelectorAll(".moving");
                movingBlocks.forEach((moving) => {
                        moving.classList.remove(type, "moving");
                });
                blocks[type][direction].some((block) => {
                        const x = block[0] + left;
                        const y = block[1] + top;
                        // console.log({ tetrisView });
                        const target = tetrisView.childNodes[y]
                                ? tetrisView.childNodes[y].childNodes[0]
                                        .childNodes[x]
                                : null;
                        const isAvailable = checkEmpty(target);
                        if (isAvailable) {
                                target.classList.add(type, "moving");
                        } else {
                                tempMovingItem = { ...movingItem };
                                setTimeout(() => {
                                        renderBlocks();
                                        if (moveType === "top") {
                                                seizeBlock();
                                        }
                                });
                                return true;
                        }
                });
                movingItem.left = left;
                movingItem.top = top;
                movingItem.direction = direction;
        }
        function seizeBlock() {
                const movingBlocks = document.querySelectorAll(".moving");
                movingBlocks.forEach((moving) => {
                        moving.classList.remove("moving");
                        moving.classList.add("seized");
                });
                checkMatch();
        }
        let level = 1; // 초기 레벨 설정
        const levelDisplay = document.getElementById("levelDisplay");

        function increaseLevel() {
                level++; // 레벨 증가
                duration -= 100; // 게임 속도를 빠르게 하기 위해 duration 값을 감소시킵니다. (이 값은 setTimeout 및 setInterval에 사용됩니다.)
                clearInterval(downInterval); // 현재 동작 중인 인터벌을 정지합니다.
                downInterval = setInterval(() => {
                        moveBlock("top", 1);
                }, duration); // 새로운 인터벌을 시작합니다.
                levelDisplay.innerText = "LEVEL. " + level; // 레벨을 화면에 표시합니다.
        }

        function checkMatch() {
                const childNodes = tetrisView.childNodes;
                let completedLineCount = 0;

                childNodes.forEach((child, index) => {
                        let matched = true;
                        child.children[0].childNodes.forEach((li) => {
                                if (!li.classList.contains("seized")) {
                                        matched = false;
                                }
                        });
                        if (matched) {
                                child.remove();
                                completedLineCount++;
                        }
                });

                if (completedLineCount > 0) {
                        for (let i = 0; i < completedLineCount; i++) {
                                newLine();
                        }
                        score += completedLineCount;
                        scoreDisplay.innerText = "현재 점수는 " + score + " 점 입니다.";
                        totalScore += completedLineCount;
                        totalScoreDisplay.innerText = "총 점수는 " + totalScore + " 점 입니다.";
                        totalScore2Display.innerText = "총 점수는 " + totalScore + " 점 입니다.";

                        if (score >= 5) {
                                clearInterval(downInterval); // 게임 멈추기
                                increaseLevel(); // 레벨 증가 함수 호출
                                alert("레벨 업! 속도가 빨라집니다");
                                init(); // 새로운 게임 시작을 위해 초기화 함수 호출
                        }
                }


                generateNewBlock();
        }
        function checkGameOver() {
                const { type, direction, top, left } = tempMovingItem;
                const movingBlocks = blocks[type][direction];

                for (let i = 0; i < movingBlocks.length; i++) {
                        const x = movingBlocks[i][0] + left;
                        const y = movingBlocks[i][1] + top;
                        const target = tetrisView.childNodes[y]
                                ? tetrisView.childNodes[y].childNodes[0].childNodes[x]
                                : null;
                        if (target && target.classList.contains("seized")) {
                                clearInterval(downInterval);
                                showModal();
                                break;
                        }
                }
        }

        function showModal() {
                const modal = document.getElementById("gameOverModal");
                modal.style.display = "block";
        }

        function closeModal() {
                const modal = document.getElementById("gameOverModal");
                modal.style.display = "none";
        }


        document.addEventListener("keydown", (e) => {
                if (e.keyCode === 27) {
                        // ESC key
                        closeModal();
                }
        });
        const closeBtn = document.querySelector(".close");
        closeBtn.addEventListener("click", () => {
                closeModal();
        });



        function generateNewBlock() {
                clearInterval(downInterval);
                downInterval = setInterval(() => {
                        moveBlock("top", 1);
                }, duration);

                const blockArray = Object.entries(blocks);
                const randomIndex = Math.floor(
                        Math.random() * blockArray.length
                );

                movingItem.type = blockArray[randomIndex][0];
                movingItem.top = 0;
                movingItem.left = 4;
                movingItem.direction = 0;
                tempMovingItem = { ...movingItem };
                renderBlocks();
                checkGameOver();
        }

        function checkEmpty(target) {
                if (!target || target.classList.contains("seized")) {
                        return false;
                }
                return true;
        }
        // 블록 움직이기
        function moveBlock(moveType, amount) {
                tempMovingItem[moveType] += amount;
                renderBlocks(moveType);
        }
        // 모양 변경하기
        function changeDirection() {
                const direction = tempMovingItem.direction;
                direction === 3
                        ? (tempMovingItem.direction = 0)
                        : (tempMovingItem.direction += 1);
                renderBlocks();
        }
        // 스페이스바 누르기
        function dropBlock() {
                clearInterval(downInterval);
                downInterval = setInterval(() => {
                        moveBlock("top", 1);
                }, 10);
        }
        document.addEventListener("keydown", (e) => {
                switch (e.keyCode) {
                        case 39:
                                moveBlock("left", 1);
                                break;
                        case 37:
                                moveBlock("left", -1);
                                break;
                        case 40:
                                moveBlock("top", 1);
                                break;
                        case 32:
                                dropBlock();
                                break;
                        case 38:
                                changeDirection();
                                break;
                        default:
                                break;
                }
        });
}
export default tetris;
