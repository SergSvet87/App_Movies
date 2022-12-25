import React from 'react';

import styles from './About.module.scss';

export const AboutPage = () => {
  return (
    <div className="container">
      <div class={styles.about}>
        <h1 className="title-h1">About Us</h1>

        <p>
          Наша команда для створення даного додатку використала ресурс YTS.MX —
          єдиний новий офіційний домен для фільмів YIFY. Цей ресурс надав чудові
          методи для повноцінного та якісного відображення потріного контенту, а
          також яскраву взаємодію нашого додатку з API сервісу. Щоб перейти на
          API документацію натисни{' '}
          <a href="https://yts.mx/api" title="https://yts.mx/api">
            API Documentation
          </a>
        </p>

        <p>
          This is a lightweight web service, (REST interface), which provides an
          easy way to access the YTS website. An API (Application programming
          interface) is a protocol intended to be used as an interface by
          software components to communicate with each other. Our API supports
          many methods, so there should not be a problem coding some nice
          applications.
        </p>
        <h2 className="title-h2">Download YTS YIFY movies: HD smallest size</h2>
        <p>
          Welcome to the official <b>YTS.MX</b> (.LT) website. Here you can
          browse and download YIFY movies in excellent 720p, 1080p, 2160p 4K and
          3D quality, all at the smallest file size. YTS Movies Torrents.
          <a
            className={styles.link}
            href="https://yts.mx/blog/yts-mx-is-the-only-new-official-domain-for-yify-movies"
            title="IMPORTANT - YTS.MX is the only new official domain for YIFY Movies">
            <b>
              IMPORTANT - YTS.MX is the only new official domain for YIFY Movies
            </b>
          </a>
        </p>
      </div>
    </div>
  );
};
