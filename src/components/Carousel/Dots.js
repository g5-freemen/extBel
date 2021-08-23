import React, { useEffect } from 'react';

export default function Dots(props) {
    const {length, slideNum, setSlideNum} = props.data;

    useEffect(() => {
        if (slideNum >= 0) {
            const dots = document.querySelectorAll('.dot');
            if (dots.length) {
                dots.forEach(el => el.classList.remove('active'));
                dots[slideNum].classList.add('active');
            }
        }
    }, [slideNum])

    return (
        <div className='slider-dots'>
            { Array(length).fill(0).map((_, idx) => 
                <button key={idx}
                        className='dot'
                        value={idx}
                        onClick={ev => setSlideNum(+ev.target.value)}
                />
            )}
        </div>
    )
}