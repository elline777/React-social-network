import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import { connect } from 'react-redux';

const Navbar = ({ links, friends }) => {
  return (
    <nav className={s.nav}>
      {links.map((link, i) => (
        <div className={s.item} key={i}>
          <NavLink to={link.path} activeClassName={s.activeLink}>
            {link.title}
          </NavLink>
        </div>
      ))}

      <Friends friends={friends} />
    </nav>
  );
};

const mapStateToProps = (state) => ({
  links: state.sidebar.links,
  friends: state.sidebar.friends
});

export default connect(mapStateToProps)(Navbar);
