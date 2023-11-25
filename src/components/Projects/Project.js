import React from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'

function Project() {
  return (
    <>
      <div className="project-section">
        <div className="container">
            <div className="project-content">
                <div className="project-header">
                    <h2>Projects</h2>
                    <button className="btn">CONTACT ME</button>
                </div>
           
                <div className="project-cards">
                    <ProjectCard />
                </div>
      

            </div>
        </div>
      </div>
    </>
  )
}

export default Project
