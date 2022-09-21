document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const sliderItem = document.querySelectorAll('.slider-item');
    const sliderControl = document.querySelector('.slider-control');
    const sliderControlNext = document.querySelector('.slider-control-next');
    const sliderControlPrev = document.querySelector('.slider-control-prev');
    const pagination = document.querySelector('.pagination');

    const sliderWidth = slider.clientWidth;
    sliderControl.style.width = `${sliderWidth - 50}px`;

    let sliderActiveItem = 0;

    const deleteActivationOfSlider = () => {
        const itemArray = Array.from(slider.children);
        itemArray.forEach((element) => {
            element.classList.remove('slider-item-active');
        });
    }

    const setActivationOfSlider = () => {
        sliderItem[sliderActiveItem].classList.add('slider-item-active');
    }

    sliderControlPrev.addEventListener('click', () => {
        deleteActivationOfSlider();
        if (sliderActiveItem > 0) {
            sliderActiveItem--
        } else {
            sliderActiveItem = (sliderItem.length - 1)
        }
        setActivationOfSlider();
        paginationProgress();
    })

    sliderControlNext.addEventListener('click', () => {
        deleteActivationOfSlider();
        if (sliderActiveItem < (sliderItem.length - 1)) {
            sliderActiveItem++
        } else {
            sliderActiveItem = 0
        }
        setActivationOfSlider();
        paginationProgress();
    })


    const setSliderControlItem = () => {
        const sliderItems = Array.from(sliderControl.children);
        sliderItems.forEach((element) => {
            element.classList.add('slider-control__arrow');
        });
    }

    const progressBar = `<div class="pagination-bar" background="" width=""></div>`
    pagination.insertAdjacentHTML('beforeend', progressBar);

    const paginationProgress = () => {
        let progressItemPercent = 100 / sliderItem.length;
        const totalProgressPercent = progressItemPercent * (sliderActiveItem + 1);

        const getProgressBar = document.querySelector('.pagination-bar');
        getProgressBar.style.width = `${totalProgressPercent}%`;
    }

    setSliderControlItem();
    paginationProgress();
    setActivationOfSlider();

}, false);