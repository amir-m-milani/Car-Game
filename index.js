document.addEventListener('DOMContentLoaded', function () {
    const car = document.getElementById('car');
    // const gameContainer = document.querySelector('.game-container');
    const road = document.querySelector(".road");

    // let carPosition = 50; // Initial car position (percentage from the left)
    // let speed = 2; // Adjust speed as needed
    // let roadPosition = 0;
    const roadHeight = road.clientHeight;
    const roadWidth = road.clientWidth;
    let carPositionBottom = 10;
    let carPositionLeft = 10;
    const carMovePosition = 10;
    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft' && carPositionLeft > 0) {
            carPositionLeft -= carMovePosition;
        } else if (event.key === 'ArrowRight' && carPositionLeft < 100) {
            carPositionLeft += carMovePosition;
        } else if (event.key === 'ArrowUp' && carPositionBottom < 100) {
            carPositionBottom += carMovePosition;
        } else if (event.key === 'ArrowDown' && carPositionBottom > 0) {
            carPositionBottom -= carMovePosition;
        }

        updateCarPosition();
    });

    // make random cars 
    let makeRandomCarsContinuely = setInterval(() => {
        let randomCar = makeRandomCars();
        let topPosition = -10;
        topPosition += 10;
        randomCar.style.top = topPosition + '%';
    }, 1000);


    function updateCarPosition() {
        car.style.left = carPositionLeft + '%';
        car.style.bottom = carPositionBottom + '%';
    }

    function makeRandomCars() {
        let randomCarPostion = [4, 24, 44, 64, 84];
        let randomCar = document.createElement('div');
        randomCar.classList.add('car', 'randomCar');
        randomCar.style.left = randomCarPostion[Math.floor(Math.random() * randomCarPostion.length)]
        randomCar.style.top = '-10%';
        road.appendChild(randomCar);
        return randomCar;
    }

    /*
    function createRoad() {
        const road1 = document.createElement('div');
        road1.className = 'road';
        gameContainer.appendChild(road1);

        const road2 = document.createElement('div');
        road2.className = 'road';
        gameContainer.appendChild(road2);

        return [road1, road2];
    }

    const roads = createRoad();
    */
    /*
        function updateRoadPosition() {
            roadPosition += speed;
            roads.forEach(road => {
                road.style.backgroundPositionY = roadPosition + 'px';
            });
    
            if (roadPosition >= 100) {
                roadPosition = 0;
            }
    
            requestAnimationFrame(updateRoadPosition);
        }
    
        updateRoadPosition();
    */
});
