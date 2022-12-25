import React from 'react';

import btnPlay from '../../assets/img/film-info/btn-play.png';

import styles from './MovieInfo.module.scss';

export const FilmDetails = ({ movie }) => {
  const screenshots = [
    movie.medium_screenshot_image1,
    movie.medium_screenshot_image2,
    movie.medium_screenshot_image3,
  ];

  return (
    <div
      className={styles.info}
      style={{ background: `${movie.background_image_original}` }}>
      <h3 className={styles.titleLong}>{movie.title_long}</h3>
      <h4 className={styles.titleEng}>{movie.title_english}</h4>
      <div className={styles.description}>
        <div className={styles.image}>
          <img
            src={movie.large_cover_image}
            alt={movie.title}
            title={movie.title}
            height={480}
          />
          <div className={styles.play}>
            <a
              href={movie.torrents[0].url}
              download={`${movie.title_long}.torrent`}>
              <img
                src={btnPlay}
                alt="Play"
                height={100}
                title={`Download ${movie.title_long}`}
              />
            </a>
          </div>
        </div>
        <div className={styles.definition}>
          <div className={styles.rating}>
            <h5>Rating:</h5>
            <span>{movie.rating}</span> / 10
          </div>
          <div className={styles.year}>
            <h5>Year:</h5>
            <span>{movie.year}</span>
          </div>
          <div className={styles.genres}>
            <h5>Genre:</h5>
            <ul>
              {movie.genres.map((genre, index) => (
                <li className={styles.genre} key={index}>
                  {genre}
                </li>
              ))}
            </ul>
          </div>

          {movie.cast ? (
            <div className={styles.actors}>
              <h5>Top Cast:</h5>
              <ul>
                {movie.cast.map((actor, index) => (
                  <li className={styles.actor} key={index}>
                    {actor.name}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>

      {screenshots ? (
        <div className={styles.screen}>
          <h5>Screenshots:</h5>
          <ul className={styles.screenshots}>
            {screenshots.map((screen, index) => (
              <li className={styles.screenshot} key={index}>
                <img src={screen} alt={index} width={280} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ''
      )}

      <div className={styles.text}>
        <h5>Description:</h5>
        {movie.description_full ? (
          <div className={styles.summary}>{movie.description_full}</div>
        ) : (
          <div className={styles.summary}>{movie.description_intro}</div>
        )}
      </div>
    </div>
  );
};
