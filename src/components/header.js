import { FaYoutube, FaPodcast, FaSpotify } from 'react-icons/fa';
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './styles/css/main.css';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `red`,
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
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h3>
      <div>
        <a>
          <FaYoutube />
        </a>
        <a>
          <FaPodcast />
        </a>
        <a>
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
