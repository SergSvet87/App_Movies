import { useEffect, useState } from 'react';
import axios from 'axios';

import './Weather.scss';

export const Weather = () => {
  const [temperature, setTemperature] = useState(15);

  useEffect(() => {
    axios(
      'https://api.open-meteo.com/v1/forecast?latitude=50.45&longitude=30.52&hourly=temperature_2m&daily=temperature_2m_max&timezone=Europe%2FBerlin&start_date=2022-12-28&end_date=2022-12-28'
    ).then((res) => setTemperature(res.data.daily.temperature_2m_max[0]));
  }, []);

  return (
    <div className="container">
      <div className="weatherContainer">
        <span>
          Сьогодні в Україні до {temperature} {'\u2103'}. Приємного проведення часу за
          пошуком потрібного фільму!!!
        </span>
      </div>
    </div>
  );
};
