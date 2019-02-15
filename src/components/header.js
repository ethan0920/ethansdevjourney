import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import PictureOfMe from '../images/me.jpg'
import './header.css'

const Header = () => (
  <>
    <div class="header">
      <img className="me" src={PictureOfMe} />
      <div class="text-content">
        <h1>Hey, I'm Ethan</h1>
        <p>
          Hello World! I am Ethan and I have a serious passion for programming ever since I wrote that first bracket. I decided to create this website to document my learning journey into programming and showcase some work I have done and also some other stuff I like to have on here. <span>{`<3`}</span>
        </p>
      </div>
      <div className="quote">
        <blockquote>
          <p>
            Trying to define yourself is like trying to bite your own teeth.
          </p>
          <cite>- Alan Watts</cite>
        </blockquote>
      </div>
    </div>
    <footer>
      © Ethan M {new Date().getFullYear()}, Built with HTML, CSS, and JavaScript.
    </footer>
  </> 
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
