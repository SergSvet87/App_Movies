import { useEffect, useState } from 'react';

import { Weather } from '../weather/Weather';

import styles from './Slider.module.scss';

const defaultSlides = [
  'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg',
  'https://images.thedirect.com/media/photos/posd1_1.jpg',
  'https://i.pinimg.com/originals/46/1f/17/461f1790130dd8a619c65cf8ebac949c.jpg',
  'https://www.komar.de/ru/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/v/d/vd-046-star-wars-official-poster-ep7.jpg',
  'https://www.komar.de/en/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4113_star_wars_movie_poster_rey_ma.jpg',
  'https://cdna.artstation.com/p/assets/images/images/049/362/122/large/ramon-ost-2morbius-projetct-04-original.jpg?1652308209',
  'https://akns-images.eonline.com/eol_images/Entire_Site/2018112/rs_634x939-181202195654-634.captain-marvel.12418.jpg?fit=around%7C634:939&output-quality=90&crop=634:939;center,top',
  'http://cdn.shopify.com/s/files/1/0037/8008/3782/products/IMG_6203_2_framed2-399939.jpg?v=1611687760',
  'https://i.pinimg.com/736x/30/dc/6c/30dc6cd7a41fd5e25b5ce9415adec6eb.jpg',
];

function Slider() {
  const [slides, setSlides] = useState(defaultSlides);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const id = setTimeout(next, 4000);
    return () => {
      clearTimeout(id);
    };
  });

  const next = () => {
    if (currentSlide === (defaultSlides.length-1)) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prev = () => {
    if (currentSlide === 0) {
      setCurrentSlide((defaultSlides.length-1));
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const dropping = () => {
    setCurrentSlide(0);
  };

  return (
    <div className={styles.sliderContainer}>
      <Weather />
      <img src={slides[currentSlide]} alt="slide" />
      <button onClick={prev}>{'<'}</button>
      <button onClick={next}>{'>'}</button>
      <button onClick={dropping}></button>
    </div>
  );
}

export default Slider;
