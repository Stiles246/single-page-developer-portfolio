import React from 'react'
import { projectData } from '../Data'

function ProjectCard() {
  return (
    <>

    {projectData.map((item) => {
        return (
            <div className="project-card" key={item.id}>
                <img src={item.img} alt="" className='project-img'/>
                <h2 className='project-headline'>{item.headline}</h2>
                    <div className="tags">
                        <h3>{item.tag}</h3>
                        <h3>{item.tag2}</h3>
                        <h3>{item.tag3}</h3>
                    </div>
                    <div className="button-link">
                        <button className="btn">{item.buttonLabel}</button>
                        <button className="btn">{item.buttonLabel2}</button>
                    </div>
            </div>

            )
        })}
    </>
  )
}

export default ProjectCard
