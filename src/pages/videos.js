import React, { Fragment, useState } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import { useIntl } from 'gatsby-plugin-react-intl'
import { useFetch } from '../hooks/fetch.js'
import Loader from "react-loader-spinner"
import {
  VideosContainer,
  Description,
  PaginationContainer,
  Button,
  YoutubeStyled,
} from '../components/video.styled'

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
  const { data,isLoading } = useFetch(url, { page })

  return (
    <Layout location={location} title={name} icon={icon}>
      <div style={{ background: '#fff' }}>
        <Helmet
          title={`${intl.formatMessage({id: "videos.title"})} | ${name}`}
          htmlAttributes={{
            lang: intl.locale,
          }}
        />
        <VideosContainer className="wrapper">
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
                    <YoutubeStyled
                      videoId={video.snippet.resourceId.videoId}
                    />
                    <Description>
                      {video.snippet.description}
                    </Description>
                  </Fragment>
                ))
              }
              <PaginationContainer>
                <Button
                  disabled={!data.prevPageToken}
                  onClick={() => {
                    data.prevPageToken && setPage(data.prevPageToken)
                    console.log("pepe")
                    window.scrollTo(0, 0)
                  }}>
                  {intl.formatMessage({id: "misc.previous"})}
                </Button>
                <Button
                  disabled={!data.nextPageToken}
                  onClick={() => {
                    data.nextPageToken && setPage(data.nextPageToken)
                    window.scrollTo(0, 0)
                  }}>
                  {intl.formatMessage({id: "misc.next"})}
                </Button>
              </PaginationContainer>
            </>
          )
        }
        </VideosContainer>
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
