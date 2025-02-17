import downarrows from '../images/icons/down-arrows.svg'
import { useNavigate } from 'react-router-dom'
import Cta from './Cta'


function HomePage() {

  const navigate = useNavigate()
  function goPorfolio() {
    navigate('/portfolio')
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <main className="homepage container">
        <div className="homepage__hero"></div>
        <div className="homepage__hero--about">
          <h1>
            Hey, I’m Alex 
            Gio and I
            love building
            beautiful websites
          </h1>
          <div className="homepage__hero--btn">
            <img src={downarrows} alt="" />
            <button>About me</button>
          </div>
        </div>
        
      </main>
      <section className="homepage__profile container">
        <div className="homepage__profile--box">
          <div className="homepage__profile--box_picture"></div>
          <div className="homepage__profile--box_bio">
            <div className="bio__info">
              <h2>About Me</h2>
              <p>I’m a junior front-end developer looking for a new role in an exciting company. 
                I focus on writing accessible HTML, using modern CSS practices and writing clean 
                JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to 
                whatever tools are required. I’m based in London, UK, but I’m happy working remotely 
                and have experience in remote teams. When I’m not coding, you’ll find me outdoors. 
                I love being out in nature whether that’s going for a walk, run or cycling. I’d love 
                you to check out my work.
              </p>
              <button onClick={goPorfolio} className='btn'>Go to Portfolio</button>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </>
  )
}


export default HomePage