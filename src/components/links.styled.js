import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`

export const ItemsContainer = styled.div`
  text-align: center
`

export const LinkGroupContiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export const Items = styled.div`
  margin-top: 0.75em;
`

const styles = {
  Container,
  ItemsContainer,
  LinkGroupContiner,
  Items,
}

export default styles
