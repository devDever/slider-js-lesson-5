const sliderList = document.querySelector('.slider-list');
const slide = sliderList.querySelector('div');
const leftButton = document.querySelector('.left-btn');
const rightButton = document.querySelector('.right-btn');

let incrementSlidePostion = 0;

function toLeft() {

    if (incrementSlidePostion >= 415) {
        return;
    }

    if (incrementSlidePostion >= 0) {
        incrementSlidePostion += slide.clientWidth + 5;
        sliderList.style.transform = 'translateX(-' + incrementSlidePostion + 'px)';
    }
}

function toRight() {

    if (incrementSlidePostion === 0) {
        return;
    }


    if (incrementSlidePostion > 0) {
        incrementSlidePostion -= slide.clientWidth + 5;
        sliderList.style.transform = 'translateX(-' + incrementSlidePostion + 'px)';
        return;
    }

    incrementSlidePostion += slide.clientWidth + 5;
    sliderList.style.transform = 'translateX(' + incrementSlidePostion + 'px)';
}


leftButton.addEventListener('click', () => toLeft());
rightButton.addEventListener('click', () => toRight());