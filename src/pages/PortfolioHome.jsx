import { useNavigate } from "react-router-dom"
import Cta from "../components/Cta"


function PorfolioHome() {

  const navigate = useNavigate()
  function goUp() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  
  return (
    <>
      <div className="portfolio container">
        <div className="portfolio__project">
          <div className="portfolio__project--info">
            <div className="portfolio__project--info-img manage"></div>
            <div className="portfolio__project--info-des">
              <h2>Manage</h2>
              <p>This project required me to build a fully responsive landing page to the designs 
              provided. I used HTML5, along with CSS Grid and JavaScript for the areas that 
              required interactivity, such as the testimonial slider.</p>
              <button onClick={() => {
                navigate('/portfolio/manage')
              }} className="btn">
                View Project
              </button>
            </div>
          </div>
        </div>
        <div className="portfolio__project">
          <div className="portfolio__project--info">
            <div className="portfolio__project--info-img bookmark"></div>
            <div className="portfolio__project--info-des">
              <h2>Bookmark</h2>
              <p>  This project required me to build a fully responsive landing page to the designs 
              provided. I used HTML5, along with CSS Grid and JavaScript for the areas that 
              required interactivity, such as the features section.</p>
              <button onClick={() => {
                navigate('/portfolio/bookmark')
                goUp()
              }} className="btn">
                View Project
              </button>
            </div>
          </div>
        </div>
        <div className="portfolio__project">
          <div className="portfolio__project--info">
            <div className="portfolio__project--info-img insure"></div>
            <div className="portfolio__project--info-des">
              <h2>Insure</h2>
              <p>This was a small project which mostly consisted of HTML and CSS. I built a 
              fully-responsive landing page. The only JavaScript this project required was 
              to enable the toggling of the mobile navigation.</p>
              <button onClick={() => {
                navigate('/portfolio/insure')
                goUp()
              }} className="btn">
                View Project
              </button>
            </div>
          </div>
        </div>
        <div className="portfolio__project">
          <div className="portfolio__project--info">
            <div className="portfolio__project--info-img fylo"></div>
            <div className="portfolio__project--info-des">
              <h2>Fylo</h2>
              <p>  This project was built in pure HTML and CSS. I had mobile and desktop designs to 
              work to and built it so that it was fully-responsive. I took a mobile-first approach 
              and used modern CSS like Flexbox and Grid for layout purposes.</p>
              <button onClick={() => {
                navigate('/portfolio/fylo')
                goUp()
              }} className="btn">
                View Project
              </button>
            </div>
          </div>
        </div>
      </div>
      <Cta />
    </>
  )
}


export default PorfolioHome