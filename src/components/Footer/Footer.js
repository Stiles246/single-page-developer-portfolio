import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
      <div className="footer-section">
        <div className="container">
            <div className="footer-content">
                <img src="./images/line.svg" alt="" />
                <div className='footer-links'>
                  <h2>adamkeyes</h2>
                  <div className="footer-socials">
                      <img src="./images/icon-github.svg" 
                      alt="" />
                      <img src="./images/icon-frontend-mentor.svg" alt="" />
                      <img src="images/icon-linkedin.svg" alt="" />
                      <img src="./images/icon-twitter.svg" alt="" />
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
