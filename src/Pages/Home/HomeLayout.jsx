import React from 'react';
import NavbarComponents from '../../CommonComponents/Navbar/NavbarComponent';
import HomeComponents from './HomeComponents/HomeComponents';

export default function HomeLayout() {
  return (
    <div>
        <NavbarComponents/>
        <HomeComponents/>
    </div>
  )
}
