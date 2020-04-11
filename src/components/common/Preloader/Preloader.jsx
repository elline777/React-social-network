import React from 'react';
import preloader from '../../../assets/images/preloader.svg';

const Preloader = () => {
  return (
    <div>
      <img src={preloader} style={{ width: '100px' }} alt='preloader' />
    </div>
  );
};

export default Preloader;
