import { FaYoutube, FaPodcast, FaSpotify } from 'react-icons/fa';
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './styles/css/main.css';

const Header = ({ siteTitle }) => (
  <header
    style={{
      color: `red`,
      marginBottom: `2.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        height: '8vh',
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `inherit`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h3>
      <div>
        <a href="https://www.youtube.com/channel/UCLhtNISpX1kQVB7vfgL9Cpw">
          <FaYoutube />
        </a>
        <a href="https://www.youtube.com/channel/UCLhtNISpX1kQVB7vfgL9Cpw">
          <FaPodcast />
        </a>
        <a href="https://www.youtube.com/channel/UCLhtNISpX1kQVB7vfgL9Cpw">
          <FaSpotify />
        </a>
      </div>
    </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
