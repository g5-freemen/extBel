import React, { useRef } from 'react';

export default function Auto(props) {
    const autoCheckbox = useRef(null);
    let { autoInterval, spaceBetweenSlides, reverse = 1, setSlideNum } = props.data;

    function AutoScroll() {
        const btns = document.querySelectorAll('.slider-dots, .prev-btn, .next-btn');

        if (!autoCheckbox.current.checked) {
            btns.forEach(el => el.style.visibility = 'visible');

            const items = document.querySelectorAll('.item')
            let x = document.documentElement.clientWidth / 2 + spaceBetweenSlides * 2 * reverse;
            let y = document.documentElement.clientHeight / 2;
            let elem = document.elementFromPoint(x, y).closest('.item');
            for (let i = 0; i < items.length; i++) {
                if (items[i] === elem) {
                    setSlideNum(i);
                    break;
                }
            }
            return false;
        } else {
            btns.forEach(el => el.style.visibility = 'hidden')
        }

        const carousel = document.querySelector('.carousel');
        const width = carousel.clientWidth;

        carousel.scrollBy((width + spaceBetweenSlides) * reverse, 0);

        if  ((carousel.scrollWidth - width <= carousel.scrollLeft + width && reverse > 0) 
            || (carousel.scrollLeft - width <= 0 && reverse < 0)) {
                reverse = -reverse;
        }

        setTimeout(AutoScroll, autoInterval);
    }

    return (
        <label className='auto-btn'>
            <input ref={autoCheckbox} className='auto-checkbox' type='checkbox' onClick={AutoScroll} />⇄
        </label>
    )
}