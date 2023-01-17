// let offset = 0, dotIndex = 0;
// const sliderBlocks = document.querySelector(".slider__item");
// const dots = document.querySelectorAll(".dot");

const sliderBlocks = document.querySelector(".slider__item"),
    prevButton = document.querySelector(".slick-prev"),
    nextButton = document.querySelector(".slick-next"),
    dots = document.querySelectorAll(".dot"),
    nameSlide = document.querySelectorAll(".slider__name");

let position = 0,
    dotIndex = 0,
    slider__nameIndex = 0;


const nextSlide = () => {
    if (position < (dots.length - 1) * 1171) {
        position += 1171
        dotIndex++
        slider__nameIndex++
    } else {
        position = 0
        dotIndex = 0
        slider__nameIndex = 0
    }
    sliderBlocks.style.left = -position + 'px'
    thisSlide(dotIndex);
    thisSlideName(slider__nameIndex);
}

const prevtSlide = () => {
    if (position > 0) {
        position -= 1171
        dotIndex--
        slider__nameIndex--
    } else {
        position = (dots.length - 1) * 1171
        dotIndex = (dots.length - 1)
        slider__nameIndex = (dots.length - 1)
    }
    sliderBlocks.style.left = -position + 'px'
    thisSlide(dotIndex);
    thisSlideName(slider__nameIndex);
}

const thisSlide = (index) => {
    for (let dot of dots) {
        dot.classList.remove('slick-dots__active')
    }
    dots[index].classList.add('slick-dots__active')
}

const thisSlideName = (index) => {
    for (let slider__name of nameSlide) {
        slider__name.classList.remove('slider__item-link-active')
    }
    nameSlide[index].classList.add('slider__item-link-active')
}


nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevtSlide);


dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        position = 1171 * index
        sliderBlocks.style.left = -position + 'px'
        dotIndex = index
        thisSlide(dotIndex)
    })
})

nameSlide.forEach((slider__name, index) => {
    slider__name.addEventListener('click', () => {
        position = 1171 * index
        sliderBlocks.style.left = -position + 'px'
        slider__nameIndex = index
        thisSlideName(slider__nameIndex)
    })
})





// document.querySelector(".slick-next").addEventListener('click', function () {
//     offset = offset + 1171;
//     if (offset > 2342) {
//         offset = 0;
//     }
//     sliderBlocks.style.left = -offset + 'px';
// });

// document.querySelector(".slick-prev").addEventListener('click', function () {
//     offset = offset - 1171;
//     if (offset < 0) {
//         offset = 2342;
//     }
//     sliderBlocks.style.left = -offset + 'px';
// });


// document.querySelector(".slick-next").addEventListener('click', function () {
//     offset = offset + 1171;
//     if (offset > 2342) {
//         offset = 0;
//         dotIndex++
//     }
//     sliderBlocks.style.left = -offset + 'px';
//     thisSlide(dotIndex);
// });

// document.querySelector(".slick-prev").addEventListener('click', function () {
//     offset = offset - 1171;
//     if (offset < 0) {
//         offset = 2342;
//         dotIndex--
//     }
//     sliderBlocks.style.left = -offset + 'px';
//     thisSlide(dotIndex);
// });

// const thisSlide = (index) => {
//     for (let dot of dots) {
//         dot.classList.remuve('.slick-dots__active')
//     }
//     dots[index].classList.add('.slick-dots__active')
// }

// dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         offset = 1171 * index
//         sliderBlocks.style.left = -offset + 'px';
//         dotIndex = index
//         thisSlide(dotIndex);
//     })
// })


// const nextButton = document.querySelector(".slick-next")
// nextButton.addEventListener('click', nextSlide)
// const nextSlide = () => {
//     if (offset < (dots.length - 1) * 1171) {
//         offset += 1171;
//         dotIndex++
//     } else {
//         offset = 0
//         dotIndex = 0
//     }
//     sliderBlocks.style.left = -offset + 'px';
//     thisSlide(dotIndex);
// }

// const prevButton = document.querySelector(".slick-prev")
// prevButton.addEventListener('click', prevSlide)
// const prevSlide = () => {
//     if (offset > 0) {
//         offset -= 1171;
//         dotIndex--
//     } else {
//         offset = (dots.length - 1) * 1171
//         dotIndex = (dots.length - 1)
//     }
//     sliderBlocks.style.left = -offset + 'px';
//     thisSlide(dotIndex);
// }

// const thisSlide = (index) => {
//     for (let dot of dots) {
//         dot.classList.remuve('.slick-dots__active')
//     }
//     dots[index].classList.add('.slick-dots__active')
// }

// dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         offset = 1171 * index
//         sliderBlocks.style.left = -offset + 'px';
//         dotIndex = index
//         thisSlide(dotIndex);
//     })
// })

console.log(nameSlide)