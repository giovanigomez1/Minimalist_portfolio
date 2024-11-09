import logo from '../images/logo_footer.svg'
import github from '../images/icons/github.svg'
import twitter from '../images/icons/twitter.svg'
import linkedin from '../images/icons/linkedin.svg'
import { NavLink, Link } from 'react-router-dom'



function Footer() {
  function goUp() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="footer">
      <div className="footer__nav">
        <div className="footer__nav--cont container">
          <div className="footer__nav--cont-logo">
            <Link to="/" onClick={goUp}><img src={logo} alt="" /></Link>
            <ul>
              <li><NavLink to="/" onClick={goUp}>Home</NavLink></li>
              <li><NavLink to="/portfolio" onClick={goUp}>Portafolio</NavLink></li>
              <li><NavLink to="/contact" onClick={goUp}>Contact Me</NavLink></li>
            </ul>
          </div>
          <div className="footer__nav--cont-social">
            <img src={github} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer