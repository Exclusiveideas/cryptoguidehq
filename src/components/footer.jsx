import React from 'react';
import '@styles/footer.css';
import copyright from '@assets/copyright_icon.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <img src={copyright} alt="copyright icon" className="copyright_icon" />
        <p><a href="https://muftau.dev">Muftaudeen Jimoh</a></p>
    </div>
  )
}

export default Footer