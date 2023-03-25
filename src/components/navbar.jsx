import React, { useEffect, useRef } from 'react';
import '@styles/navbar.css';
import logo from '@assets/site_logo.svg';
import hamburger from '@assets/open_menu.svg';
import browse from '@assets/browse_icon.svg';
import gsap from 'gsap';
import { useDispatch } from 'react-redux';
import { updatMobileNav } from '../redux/MobileNav';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  let location = useLocation();


  const browseTxtRef = useRef(null)
  const browseIconRef = useRef(null)

  let browseTxt, browseIcon;

  useEffect(() => {
    browseTxt = browseTxtRef.current
    browseIcon = browseIconRef.current
  }, [location])
 

  function onHoverCTA(e) {
    const tl = gsap.timeline();

    tl.to(browseTxt, {
      opacity: 0,
      top: '-100%',
      duration: .3
    })
      .to(browseIcon, {
        opacity: 1,
        top: '8%',
        duration: .3
      }, "<");
  }

  function onLeaveCTA(e) {
    const tl = gsap.timeline();

    tl.to(browseTxt, {
      opacity: 1,
      top: '20%',
      duration: .3
    })
      .to(browseIcon, {
        opacity: 0,
        top: '100%',
        duration: .3
      }, "<");
  }

  function openNavbar() {
    dispatch(updatMobileNav())
  }

  const navigateToCoins = () => {
    navigate("/coins");
  }



  return (
    <div className='navbar'>
      <div className="logo_section">
        <Link to={`/`}>
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      <div className="menu_section">
        <div className="open_menu" onClick={() => openNavbar()}>
          <img src={hamburger} alt="hamburger icon" className="hamburger" />
        </div>
        <div className="menu_text">
          <NavLink to={`/coins`}>
            <p>Coins</p>
            <hr className='underline' />
          </NavLink>
        </div>
        <div className="menu_text">
          <NavLink to={`/news`}>
            <p>News</p>
            <hr className='underline' />
          </NavLink>
        </div>
        <div onClick={navigateToCoins} onMouseEnter={onHoverCTA} onMouseLeave={onLeaveCTA} className="navbar_cta">
            <p className='browse_txt' ref={browseTxtRef}>Browse</p>
            <img ref={browseIconRef} src={browse} alt="search" className='browse_icon' />
        </div>
      </div>
    </div>
  )
}

export default Navbar;