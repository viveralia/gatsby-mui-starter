import React from 'react'
import { Link } from '@material-ui/core'
import socialNetworks from '../../../../constants/social-networks'

const SocialNetworks = () => {
  return (
    <>
      {socialNetworks.map(network => (
        <Link
          key={network.path}
          href={network.path}
          target="_blank"
          rel="noopener noreferrer"
        >
          {network.icon}
        </Link>
      ))}
    </>
  )
}

export default SocialNetworks
