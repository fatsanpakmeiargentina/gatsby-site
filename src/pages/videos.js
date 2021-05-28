import React, { Fragment, useState } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import * as styles from './videos.module.css'
import { useIntl } from 'gatsby-plugin-react-intl'
import { useFetch } from '../hooks/fetch.js'
import YouTube from 'react-youtube'
import Loader from "react-loader-spinner"

const VideosIndex = ({
  location,
  data: {
    contentfulSiteMetadata: {
      name,
      icon,
      youtubePlaylistId,
    },
  },
}) => {
  const intl = useIntl()
  const [page, setPage] = useState("")
  const apiKey = process.env.GATSBY_YOUTUBE_API_KEY
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${youtubePlaylistId}&part=snippet&maxResults=5&key=${apiKey}`
  const { data, isLoading } = useFetch(url, { page })

  return (
    <Layout location={location} title={name} icon={icon}>
      <div style={{ background: '#fff' }}>
        <Helmet title={`${intl.formatMessage({id: "videos.title"})} | ${name}`} />
        <div className={styles.videos + " wrapper"}>
        {
          isLoading && <Loader
            type="Puff"
            color="#000000"
            height={100}
            width={100}
            timeout={3000}
          />
        }
        {
          data && (
            <>
              {
                data.items.map((video) => (
                  <Fragment
                    key={video.snippet.resourceId.videoId}
                  >
                    <h3>{video.snippet.title}</h3>
                    <YouTube
                      containerClassName={styles.youtubeContainer}
                      videoId={video.snippet.resourceId.videoId}
                    />
                    <p className={styles.videoDescription}>{video.snippet.description}</p>
                  </Fragment>
                ))
              }
              <div className={styles.pagination}>
                <button
                  className={data.prevPageToken ? styles.paginationButton : styles.paginationButton + " " + styles.disabled}
                  onClick={() => data.prevPageToken && setPage(data.prevPageToken)}>
                  {intl.formatMessage({id: "misc.previous"})}
                </button>
                <button
                  className={data.nextPageToken ? styles.paginationButton : styles.paginationButton + " " + styles.disabled}
                  onClick={() => data.nextPageToken && setPage(data.nextPageToken)}>
                  {intl.formatMessage({id: "misc.next"})}
                </button>
              </div>
            </>
          )
        }
        </div>
      </div>
    </Layout>
  )
}

export default VideosIndex

export const pageQuery = graphql`
  query VideosQuery {
    contentfulSiteMetadata {
      name
      youtubePlaylistId
      icon {
        gatsbyImageData(layout: FIXED, width: 50)
      }
    }
  }
`
