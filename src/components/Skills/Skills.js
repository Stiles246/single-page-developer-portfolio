import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <>
      <div className="skills-section">
        <div className="container">
            <div className="skills-content">
                <img src="./images/line.svg" alt="" className='line' />
                <div className="skills">
                    <div className="skill">
                        <h2>HTML</h2>
                        <p>4 Years Experience</p>
                    </div>
                    <div className="skill">
                        <h2>CSS</h2>
                        <p>4 Years Experience</p>
                    </div>
                    <div className="skill">
                        <h2>Javascript</h2>
                        <p>4 Years Experience</p>
                    </div>
                    <div className="skill">
                        <h2>Accessibility</h2>
                        <p>4 Years Experience</p>
                    </div>
                    <div className="skill">
                        <h2>React</h2>
                        <p>4 Years Experience</p>
                    </div>
                    <div className="skill">
                        <h2>Sass</h2>
                        <p>4 Years Experience</p>
                    </div>
                </div>
                <img src="./images/line.svg" alt="" className='line2' />

                <img src="./images/pattern-rings.svg" alt="" className="skills-rings" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Skills
