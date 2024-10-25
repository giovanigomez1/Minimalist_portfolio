import { useNavigate } from "react-router-dom"

function Cta() {

  const navigate = useNavigate()

  function goPorfolio() {
    navigate('/contact')
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className="footer__cta container">
      <p>Interested in doing <span>a project together?</span></p>
      <div className="line"></div>
      <button className="btn" onClick={goPorfolio}>Contact Me</button>
    </div>
  )
}

export default Cta