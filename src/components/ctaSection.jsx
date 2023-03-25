import React from 'react';
import '@styles/ctaSection.css';
import browse_icon from '@assets/browse_icon.svg';
import curved_arrow from '@assets/curved_arrow.svg';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  const navigateToCoins = () => {
    navigate("/coins");
  }

  return (
    <div className='ctaSection_wrapper'>
      <div className="innerCTA_wrapper">
        <p className='smaller_text'>Access to our comprehensive resources</p>
        <p className='bigger_text'>Stay Ahead of the Game! </p>
        <img src={curved_arrow} alt="curved arrow" className="curved_arrow" />
        <div className="ctaBTN_wrapper" onClick={navigateToCoins}>
          <p>Browse</p>
          <img src={browse_icon} alt="browse icon" className="browse_ctaicon" />
        </div> 
      </div>
    </div>
  )
}

export default CTASection;