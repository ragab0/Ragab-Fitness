import React from 'react'
import { images } from '../../assets'
import './footer.css'

export default function Footer() {
  return (
    <footer>
      <div className='footer__body container'>
        <img alt="footer img" src={images.logo1} />
        <p>Made with ❤️ by JavaScript Mastery</p>
      </div>
    </footer>
  )
}
