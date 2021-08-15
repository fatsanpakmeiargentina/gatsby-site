import styled from 'styled-components'

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 2.5em;
  right: 2em;
  z-index: 20;
  display: none;
  @media (max-width: 1023px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  @media (max-width: 400px) {
    top: 3.5em;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${(props) => props.open ? '#000' : '#FFF'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    cursor: pointer;
    &:nth-child(1) {
      transform: ${(props) => props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${(props) => props.open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${(props) => props.open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${(props) => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

export const Nav = styled.nav`
  background-color: black;
  padding-left: 1em;
  font-size: 1.25em;

  @media (max-width: 1023px) {
    width: 100vw;
    padding: 0.2em;
  }

`

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  position: absolute;
  width: 90%;
  top: 0;
  justify-content: flex-end;
  margin-top: 0px;
  align-items: center;
  font-size: 1.25em;
  height: 110px;

  a {
    color: white;
    cursor: pointer;
  }

  li {
    padding-right: 1em;
  }

  @media (max-width: 1023px) {
    flex-flow: column nowrap;
    background-color: #fdfdfdfa;
    position: fixed;
    transform: ${(props) => props.open ? 'translateX(0)' : 'translateX(100%)'};
    top: -16px;
    right: 0;
    height: 100%;
    width: 80%;
    align-items: baseline;
    padding-top: 8.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 9;
    justify-content: normal;

    a {
      color: black;
    }

    li {
      color: #000;
      margin-right: 34px;

      &:hover {
        color: #0DADEA;
      }
    }
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: white;
  a {
    z-index: 1;
  }
  p {
    padding-left: 1em;
    width: 100%;
  }
  @media (max-width: 400px) {
    p {
      width: 90%;
    }
  }

  padding: 1em;
`

