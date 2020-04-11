import React from 'react';
import s from './Friends.module.css';

const Friends = props => {
  return (
    <div className={s.friends}>
      <h2 className={s.title}>Друзья</h2>
      <div className={s.wrapper}>
        {props.friends.map((friend, i) => (
          <div className={s.item} key={i}>
            <div className={s.avatar}></div>
            <div className={s.name}> {friend.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;
