import React from 'react'
import PropTypes from 'prop-types'
import {
  CssBaseline,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core'
import lightTheme from './lightTheme'

// -------------------
// Main Component 🧱
// -------------------
const Theme = ({ children }) => {
  const theme = responsiveFontSizes(lightTheme)

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  )
}

// -------------------
// PropTypes 📔
// -------------------
Theme.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Theme
