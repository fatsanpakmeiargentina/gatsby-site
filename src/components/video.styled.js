import styled from 'styled-components'
import Video from './video'

export const VideosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Description = styled.p`
  width: 95%;
`

export const PaginationContainer = styled.div`
  display: flex;
  p {
    padding-right: 1em;
  }
`

export const Button = styled.button`
  color: ${props => props.disabled ? 'white' : 'black'};
  background: none;
  background: ${props => props.disabled ? '#A5A5A5F0' : 'none'};
  border: ${props => props.disabled ? 'none' : '2px solid black'};
  border-radius: 10px;
  font-size: 1em;
  margin: 25px;
  padding: 15px 40px;
  transition: all 0.3s ease;
  cursor: ${props => props.disabled ? 'not-allowed !important' : 'pointer'};
  &:hover {
    background-color: ${props => props.disabled ? '#A5A5A5F0' : 'black'};
    color: #FFF;
  }
`

Button.defaultProps = {
  disabled: false,
}

export const YoutubeStyled = styled(Video)`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
  margin-bottom: 30px;
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`

const styles = {
  VideosContainer,
  Description,
  PaginationContainer,
  Button,
  YoutubeStyled,
}

export default styles

