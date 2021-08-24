import React, { useEffect, useState } from 'react';
import Dots from './Dots';
import PrevNext from './PrevNext';
import Auto from './Auto';
import { settings } from './_settings';
import './style.css';

export default function Carousel({children}) {
    const length = children.length;
    const [slideNum, setSlideNum] = useState(0);
    const [swipe, setSwipe] = useState(null);
    let { height, slidesToShow, showDots, spaceBetweenSlides, showAuto, autoInterval } = settings;

    function setCarousel() {
        slidesToShow = document.querySelector('.App').clientWidth > 720 ? 2 : 1;

        const carousel = document.querySelector('.carousel');
        const width = carousel.clientWidth;
        const content = document.querySelector('.content');
        const slides = document.querySelectorAll('.item');
        const slideWidth =  (width - spaceBetweenSlides * (slidesToShow - 1)) / slidesToShow + 'px';

        slides.forEach(el => el.style.width = slideWidth);

        carousel.style.height = height;
        content.style.gridGap = spaceBetweenSlides + 'px';
    }

    function handleTouchStart(ev) {
        setSwipe({ x0: ev.touches[0].pageX });
    }
    
    function handleTouchMove(ev) {
        setSwipe({ ...swipe, x: ev.touches[0].pageX })
    }
    
    function handleTouchEnd() {
        let diff = swipe.x0 - swipe.x;
        let reverse = diff > 0 ? 1 : -1;

        let x = window.innerWidth / 2 + spaceBetweenSlides * length * reverse;
        let y = window.innerHeight / 2;
        let elem = document.elementFromPoint(x, y).closest('.item');
        const items = document.querySelectorAll('.item');
        for (let i = 0; i < items.length; i++) {
            if (items[i] === elem) {
                setTimeout(() => setSlideNum(i), 333);
                break;
            }
        }
    }

    useEffect(() => {
        setCarousel();
        window.addEventListener('resize', () => setCarousel())
    }, []);

    useEffect(() => {
        const slides = document.querySelectorAll('.item');
        if (slides && slides.length) {
            slides[slideNum].scrollIntoView();
        };
    }, [slideNum]);

    return (
        <div className='wrapper'>
            <div    className='carousel'
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
            >
                <div className='content'>
                    {children}
                </div>
            </div>
            { slidesToShow !== length && length &&
                <PrevNext data={{length, slidesToShow, spaceBetweenSlides, slideNum, setSlideNum, }}/>
            }
            { slidesToShow !== length && length && showAuto &&
                <Auto data={{autoInterval, spaceBetweenSlides, setSlideNum}} /> }
            { slidesToShow !== length && length && showDots &&
                <Dots data={{length, slideNum, setSlideNum}} /> 
            }
        </div>
    )
}