import React, { useState } from 'react';

const SwiperContainer = () => {
  const [data, setData] = useState();

  fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => response.json())
    .then((responseData) => setData(responseData));

  return (
    <>
      <div className="swiper">
        <h2>MASTER WIZR Modules</h2>
        <div className="icons-navigation">
          <img src="#" alt="test" />
        </div>
      </div>
    </>
  );
};

export default SwiperContainer;
