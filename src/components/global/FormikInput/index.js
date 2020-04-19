/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'

// -------------------
// Main Component 🧱
// -------------------
const FormikInput = props => {
  const { name, formik } = props

  return (
    <TextField
      {...props}
      name={name}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched[name] && formik.errors[name] && true}
      helperText={
        formik.touched[name] && formik.errors[name] ? formik.errors[name] : null
      }
    />
  )
}

// -------------------
// PropTypes 📔
// -------------------
FormikInput.propTypes = {
  name: PropTypes.string.isRequired,
  formik: PropTypes.object.isRequired,
}

export default FormikInput
