import React, { useState } from 'react';
import Icons from './swiper/IconsSection';

import '../stylesheet/swiper.scss';

const SwiperContainer = () => {
  const [data, setData] = useState();
  const [page, setPage] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => response.json())
    .then((responseData) => setData(responseData.slice(0, 6)));

  const handleNextPage = () => {
    if (page === 5) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page === 0) {
      setPage(5);
    } else {
      setPage(page - 1);
    }
  };

  const onIconClick = (nr) => {
    setPage(nr);
  };

  if (data === undefined) {
    return (<p>loading...</p>);
  }

  // const isMobile = window.innerWidth <= 768;

  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > 150) {
      handleNextPage()
    }

    if (touchStart - touchEnd < -150) {
      handlePrevPage();
    }
  }
  return (
    <>
      <div className="swiper">
        <h2>MASTER WIZR Modules</h2>
        <div className="icons-navigation">
          {/* eslint-disable-next-line max-len */}
          {data.map((data, index) => <Icons key={data.id} title={data.title} thumbnailUrl={data.thumbnailUrl} onIconClick={() => { onIconClick(index); }} />)}
        </div>
        <div className="sliderContainer">
          <div className="buttonContainerPrev">
            <button className="prev" type="button" onClick={handlePrevPage}>
              <img src="https://i.ibb.co/DYkq3pQ/previous.png" alt="left-arrow" />
            </button>
          </div>

          <div className="imageContainer">
            <img
              className="sliderImage"
              src={data[page].url}
              alt={data[page].title}
              onTouchStart={(touchStartEvent) => handleTouchStart(touchStartEvent)}
              onTouchMove={(touchMoveEvent) => handleTouchMove(touchMoveEvent)}
              onTouchEnd={() => handleTouchEnd()}
            />
          </div>
          <div className="buttonContainerNext">
            <button className="next" type="button" onClick={handleNextPage}>
              <img src="https://i.ibb.co/gj6mv6d/next.png" alt="next-arrow" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwiperContainer;
