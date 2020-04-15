import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img
          src='https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg'
          alt=''
        />
      </div>
      <div className={s.descriptionBlock}>ava + desc</div>
      <img src={props.profile.photos.large} alt='' />
    </div>
  );
};

export default ProfileInfo;
