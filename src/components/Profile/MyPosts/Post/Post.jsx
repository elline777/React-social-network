import React from 'react';
import s from './Post.module.css';

const Post = props => {
  return (
    <div className={s.item}>
      <div>
        <img
          src="https://cs7.pikabu.ru/images/community/1671/1543574021253761287.png"
          alt="avatar"
        />
        {props.message}
      </div>
      <span>likes: {props.likesCount}</span>
    </div>
  );
};

export default Post;
