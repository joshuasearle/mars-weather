import React, { useEffect, useState } from 'react';
import axios from 'axios';

export interface CurrentWeatherProps {}

const CurrentWeather: React.SFC<CurrentWeatherProps> = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (data) return;
    axios
      .get('https://api.mars.spacexcompanion.app/v1/weather/latest')
      .then((result: any): any => result.data)
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  });
  return (
    <>
      <h1>Current Weather</h1>
      {data !== null ? data.sol : 'loading'}
    </>
  );
};

export default CurrentWeather;
