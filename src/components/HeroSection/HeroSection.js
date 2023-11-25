import React from 'react'
import './HeroSection.css'


function HeroSection() {
  return (
    <>
      <div className="hero-section">
          <img src="./images/pattern-circle.svg" alt="" className="hero-circle" />
          <img src="./images/pattern-rings.svg" alt="" className="hero-rings" />
        <div className="container">
          <div className="hero-content">

          <nav className="nav">
            <h2 className='logo'>adamkeyes</h2>
            <ul className='socials'>
                <li><img src="./images/icon-github.svg" alt="" /></li>    
                <li><img src="./images/icon-frontend-mentor.svg" alt="" /></li>
                <li><img src="./images/icon-linkedin.svg" alt="" /></li>
                <li><img src="./images/icon-twitter.svg" alt="" /></li>  
            </ul>
        </nav>

                  <img src="./images/hero-img-mobile.webp" alt="" className="hero-img-mobile" />
                  <img src="./images/hero-img-desktop.webp" alt="" className="hero-img-tablet" />
                  <img src="./images/hero-img-desktop.webp" alt="" className="hero-img-desktop" />

                <div className='main-text'>
                    <div className='headline'>
                      <h1>Nice to meet you! I'm <span className='name'>AdamKeyes.</span></h1>
                    </div>
                    <p className='sub-text'>Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love.</p>
                    <button className="btn">CONTACT ME</button>

              </div>

          </div>
        </div>
        
      </div>
    </>
  )
}

export default HeroSection
