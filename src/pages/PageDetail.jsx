import Cta from "../components/Cta"

function PageDetail({children, info}) {

  return (
    <div className="detail__page container">
      <div className={`detail__page--hero hero-img-${info.title}`}></div>
      <div className="detail__page--content">
        <div className="detail__page--content-project_name">
          <div className="detail__page--content-project_name-container">
            <div className="detail__page--content-project_name-container-title">
              <h2>{info.title}</h2>
            </div>
            <div className="detail__page--content-project_name-container-desc">
              <p>{info.description}</p>
            </div>
            <div className="detail__page--content-project_name-container-stack">
              <p>Interaction Design / Front End Development</p>
              <p>{info.stack}</p>
            </div>
            <button className="btn">
              Visit website
            </button>
          </div>
        </div>
        <div className="detail__page--content-project_background">
          <div className="detail__page--content-project_background-title">
            <h3>Project Background</h3>
          </div>
          <div className="detail__page--content-project_background-content">
              <p>This project was a front-end  challenge from Frontend Mentor. It’s a platform that 
              enables you to practice building websites to a design and project brief. Each challenge 
              includes mobile and desktop designs to show how the website should look at different 
              screen sizes. Creating these projects has helped me refine my workflow and solve 
              real-world coding problems. I’ve learned something new with each project, helping 
              me to improve and adapt my style.</p>
          </div>
          <div className="detail__page--content-project_background-preview">
            <h3>Static Previews</h3>
            <div className="preview__imgs">
              <div className={`preview__imgs--1 preview-img1-${info.title}`}></div>
              <div className={`preview__imgs--2 preview-img2-${info.title}`}></div>
            </div>
          </div>
        </div>
      </div>
      {children}
      <Cta />
    </div>
  )
}


export default PageDetail

