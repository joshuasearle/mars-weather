import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

import classes from '../css/classes';

const Navbar: React.SFC = () => {
  const path = useLocation().pathname;
  console.log(path);

  const pages = [
    { name: 'Home', link: '/' },
    { name: 'Current Weather', link: '/current' },
    { name: 'Week Forecast', link: '/week' },
    { name: 'Learn More', link: '/more' },
  ];

  return (
    <nav className={classes.Navbar}>
      <div className={classes.Logo}>
        <Link to='/'>
          <h1>Mars Weather</h1>
        </Link>
      </div>
      <div className={classes.Links}>
        {pages.map(({ name, link }) => {
          let className = '';
          if (link === path) className = classes.Active;
          return (
            <Link className={className} key={name} to={link}>
              {name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
