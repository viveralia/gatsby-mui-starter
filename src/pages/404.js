import React from 'react'
import { Typography } from '@material-ui/core'
import SEO from '../components/global/SEO'

const NotFound = () => {
  return (
    <>
      <SEO
        pageMeta={{
          pageTitle: 'Not Found',
        }}
      />
      <Typography>Not Found</Typography>
    </>
  )
}

export default NotFound
