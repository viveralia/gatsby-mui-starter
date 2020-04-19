import React from 'react'
import PropTypes from 'prop-types'
import Theme from './Theme'
import Navbar from './Navbar'
import Footer from './Footer'

// -------------------
// Main Component 🧱
// -------------------
const Layout = ({ children }) => {
  return (
    <Theme>
      <Navbar />
      {children}
      <Footer />
    </Theme>
  )
}

// -------------------
// PropTypes 📔
// -------------------
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
