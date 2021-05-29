import React from 'react'
import Gallery from 'react-photo-gallery'
import { useFlickrAPI } from '../hooks/flickr'

const FlickrGallery = ({
  userId,
  photosetId,
}) => {
  const { data } = useFlickrAPI({
    method: "flickr.photosets.getPhotos",
    userId,
    photosetId,
    extras: "url_t,url_o"
  })

  return (
    <>
      <h1>{photosetId}</h1>
      {
        data && (
          <Gallery
            photos={
              data.photoset.photo.map(({url_o}, i) => ({
                src: url_o,
                sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"]
              }))
            }
          />
        )
      }
      <p>{userId}</p>
    </>
  )
}

export default FlickrGallery
