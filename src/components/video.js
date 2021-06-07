import React from 'react'
import YouTube from 'react-youtube'

const Video = ({ className, ...rest }) => (
  <>
    <YouTube
      containerClassName={className}
      {...rest}
    />
  </>
)

export default Video
