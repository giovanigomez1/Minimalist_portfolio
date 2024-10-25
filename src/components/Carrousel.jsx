import arrowLeft from '../images/icons/arrow-left.svg'
import arrowRight from '../images/icons/arrow-right.svg'
import { useNavigate } from 'react-router-dom'


function Carrousel({info, project}) {
  const navigate = useNavigate()

  console.log(info)

  const projectName = project.slice(0,1).toUpperCase().split('') + project.slice(1).split('').join('')
  
  const projectIdx = info.findIndex(e => e.title === projectName)
  let nextProject 
  let prevProject
  projectIdx + 1 >= info.length ? (nextProject = 0) : (nextProject = projectIdx + 1)
  projectIdx - 1 < 0 ? (prevProject = info.length - 1) : (prevProject = projectIdx - 1)
  
  
  console.log(info[prevProject].title)

  function fixName(name) {
    return name.slice(0,1).toLowerCase().split('') + name.slice(1).split('').join('')  
  }


  function goUp() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }


  function goNext() {
    console.log(fixName(info[nextProject].title))
    navigate(`/portfolio/${fixName(info[nextProject].title)}`)
    goUp()
  }
  function goPrev() {
    navigate(`/portfolio/${fixName(info[prevProject].title)}`)
    goUp()
  }
  


  return (
    <div className="carrousel container">
      <div className="carrousel__left" onClick={goPrev}>
        <div className="carrousel__left--icon">
          <img src={arrowLeft} alt="" />
        </div>
        <div className="carrousel__left--previous">
          <div className="carrousel__left--previous--name">
            <h3>{info[prevProject].title}</h3>
            <p>Previous Project</p>
          </div>
        </div>
        
      </div>
      <div className="carrousel__right" onClick={goNext}>
        <div className="carrousel__right--next">
          <div className="carrousel__right--next--name">
            <h3>{info[nextProject].title}</h3>
            <p>Next Project</p>
          </div>
        </div>
        <div className="carrousel__right--icon">
          <img src={arrowRight} alt="" />
        </div>
        
      </div>
    </div>
  )
}

export default Carrousel