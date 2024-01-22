document.addEventListener('DOMContentLoaded', function () {
    // main car
    const car = document.getElementById('car');
    // the road
    const road = document.querySelector(".road");
    // list of random cars
    let randomCars = [];
    const roadHeight = road.clientHeight;
    const roadWidth = road.clientWidth;
    let carPositionBottom = 10;
    let carPositionLeft = 10;
    let randomCarPostionTop = -10;
    const carMovePosition = 10;
    // moving the main car by keyboard
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
        // update the position of the car
        updateCarPosition(car);
    });

    // make random cars 
    // every 4 second
    let makeRandomCarsContinuely = setInterval(() => {
        //make random car
        let randomCar = makeRandomCars();
        // add to the list of random cars
        randomCars.push(randomCar);
        //move down
    }, 4000);

    // move random cars down
    // every 1 second
    let moveRandomCarsContinuely = setInterval(() => {
        randomCars.forEach(function (element, index) {
            let topPosition = (element.offsetTop / roadHeight) * 100;
            if (topPosition > 110) {
                element.remove();
                randomCars.splice(index, 1);
            }
            else {
                topPosition += 10;
                element.style.top = topPosition + '%';
            }
        });
    }, 1000);

    function makeRandomCars() {
        let randomCarPostion = [4, 24, 44, 64, 84];
        let randomCar = document.createElement('div');
        randomCar.classList.add('car', 'randomCar');
        randomCar.style.left = randomCarPostion[Math.floor(Math.random() * randomCarPostion.length)] + '%';
        road.appendChild(randomCar);
        return randomCar;
    }

    function updateCarPosition(element) {
        element.style.left = carPositionLeft + '%';
        element.style.bottom = carPositionBottom + '%';
    }
});
