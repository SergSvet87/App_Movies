import { useEffect, useState } from 'react';

import { DEFAULT_SLIDES } from '../../const';
import { Weather } from '../weather/Weather';

import styles from './Slider.module.scss';

export const Slider = () => {
  const [slides] = useState(DEFAULT_SLIDES);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const id = setTimeout(next, 4000);
    return () => {
      clearTimeout(id);
    };
  });

  const next = () => {
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prev = () => {
    if (currentSlide === 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className={styles.sliderContainer}>
      <Weather />
      <img src={slides[currentSlide]} alt="slide" />
      <button onClick={prev}>{'<'}</button>
      <button onClick={next}>{'>'}</button>
    </div>
  );
};
