const wrapper = document.querySelector(".slider__wrapper")
const innerWrapper = document.querySelector(".slider__inner-wrapper")
const buttonPrev = document.querySelector(".slider__button--prev")
const buttonNext = document.querySelector(".slider__button--next")

const slides = document.querySelectorAll(".slider__slide")

let activeSlide = 0
const numberOfSlides =  slides.length
const slideWidth = 465

innerWrapper.style.marginLeft = "0px"
innerWrapper.style.transition = "margin-left 0.5s"

const changeActiveSlide = (direction) => {
	const initialMarginLeft = Number(innerWrapper.style.marginLeft.split("px")[0])

	switch(direction) {
		case "prev":
			if (activeSlide !== 0 ) {
				innerWrapper.style.marginLeft = `${initialMarginLeft + slideWidth}px`
				activeSlide -= 1
				buttonNext.removeAttribute("disabled")
			} else if (activeSlide === 0) {
				buttonPrev.setAttribute("disabled", "disabled")
			}
			break

			case "next":
				if (activeSlide === numberOfSlides -1) {
					innerWrapper.style.marginLeft = `${initialMarginLeft - slideWidth}px`
					activeSlide += 1
					buttonPrev.removeAttribute("disabled")
				} else if (activeSlide === numberOfSlides -1) {
				buttonNext.setAttribute("disabled", "disabled")
				}
				break

			default:
	}
}

buttonPrev.addEventListener('click', changeActiveSlide("prev"))
buttonNext.addEventListener('click', changeActiveSlide("next"))