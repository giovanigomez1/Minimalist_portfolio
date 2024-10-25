import { useState, useEffect } from 'react'
import logo from '../images/logo.svg'
import hamburguer from '../images/icons/hamburger.svg'
import close from '../images/icons/close.svg'
import { NavLink } from 'react-router-dom'


function Header() {

  const [showMenu, setShowMenu] = useState(false)
  const [mobileView, setMobileView] = useState(false)

  function displayMenu() {
    setShowMenu(() => !showMenu)
  }

  function closeMenu() {
    setShowMenu(false)
  }
 
  useEffect(() => {
    const screenSize = window.innerWidth
    if(screenSize <= 599) setMobileView(true)
  }, [])
  




  return (
    <header className="container header">
      <div className="header__logo">
        <img src={logo} alt="" />
      </div>
      <div className="header__hamburger">
        <button onClick={displayMenu} className={`header__hamburger--open ${showMenu && 'hidden'}`}>
          <img src={hamburguer} alt="" />  
        </button> 
        <button onClick={displayMenu} className={`header__hamburger--close ${showMenu || 'hidden'}`}>
          <img src={close} alt="" />
        </button>
      </div>
      <div className={`header__menu ${mobileView ? (showMenu ? 'menuOpen' : 'menuClose') : ''}`}>
        <ul >
          <li><NavLink onClick={closeMenu} to="/">Home</NavLink></li>
          <li><NavLink onClick={closeMenu} to="/portfolio">Portafolio</NavLink></li>
          <li><NavLink onClick={closeMenu} to="/contact">Contact Me</NavLink></li>
        </ul>
      </div>
    </header>
  )
}


export default Header