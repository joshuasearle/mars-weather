import * as React from 'react';
import { Link } from 'react-router-dom';

export interface NavbarProps {}

const Navbar: React.SFC<NavbarProps> = () => {
  return <Link to='Day'>Day</Link>;
};

export default Navbar;
