import React, { useState } from 'react';
import Icons from './swiper/IconsSection';

const SwiperContainer = () => {
  const [data, setData] = useState();
  const [page, setPage] = useState(0);

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

  return (
    <>
      <div className="swiper">
        <h2>MASTER WIZR Modules</h2>
        <div className="icons-navigation">
          {/* eslint-disable-next-line max-len */}
          {data.map((data, index) => <Icons key={data.id} title={data.title} thumbnailUrl={data.thumbnailUrl} onIconClick={() => { onIconClick(index); }} />)}
        </div>
        <div>
          <img src={data[page].url} alt={data[page].title} />
        </div>
        <div>
          <button type="button" onClick={handlePrevPage}>Prev</button>
          <button type="button" onClick={handleNextPage}>Next</button>
        </div>
      </div>
    </>
  );
};

export default SwiperContainer;
