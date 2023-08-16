import React from 'react'
import { images } from '../../assets'
import './nav.css'


export default function Nav() {
  return (
    <nav className='nav'>
      <div className='nav__body container'>
        <img alt='logo' src={images.logo} className='nav__logo-img' />
        <ul className='nav__links'>
          <li><a href="/" className='active'>home</a></li>
          <li><a href="#exercises">exercises</a></li>
        </ul>
      </div>
    </nav>
  )
}
