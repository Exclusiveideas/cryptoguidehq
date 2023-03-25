import React, { useEffect, useRef } from 'react';
import '@styles/mobileNavbar.css';
import close from '@assets/closecircle.svg'
import { useDispatch, useSelector } from 'react-redux';
import gsap, { Power1 } from 'gsap';
import { updatMobileNav } from '../redux/MobileNav';
import { NavLink, useNavigate } from 'react-router-dom';

const MobileNavbar = () => {
  const openNav = useSelector((state) => state.MobileNav.openNav)

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const mobileNavRef = useRef()
  let mobileNav;

  useEffect(() => {
  }, [])

  useEffect(() => {
    mobileNav = mobileNavRef.current

    if (openNav) {
      gsap.to(mobileNav, {
        left: 0,
        duration: .5,
        ease: Power1.easeIn
      })
    }
    else {
      gsap.to(mobileNav, {
        left: '100%',
        duration: .5,
        ease: Power1.easeIn
      })
    }
  }, [openNav])


  function closeNavbar() {
    dispatch(updatMobileNav())
  }

  const navigateToCoins = () => {
    navigate("/coins");
    closeNavbar()
  }




  return (
    <div ref={mobileNavRef} className='mobileNavbar'>
      <div className="mobile_navbar_wrapper">
        <div className="mobileNav_item" onClick={() => closeNavbar()}>
          <NavLink to={`/coins`} className="mbnav_navlink">
            <p>COINS</p>
          </NavLink>
        </div>
        <div className="mobileNav_item" onClick={() => closeNavbar()}>
          <NavLink to={`/news`} className="mbnav_navlink">
            <p>NEWS</p>
          </NavLink>
        </div>
        <div onClick={navigateToCoins} className="mobileNav_cta">
          Browse
        </div>
      </div>
      <div className="closeNav_wrapper">
        <div className="close_innerWrapper" onClick={() => closeNavbar()}>
          <img src={close} alt="close icon" className="close_icon" />
        </div>
      </div>
    </div>
  )
}

export default MobileNavbar;