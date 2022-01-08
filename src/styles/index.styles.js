import styled, { createGlobalStyle } from "styled-components";
import {Link} from 'gatsby'

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: Arial,sans-serif;
  }
  
  body {
    margin: 0;
  }
`

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #D1E2C4;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TitleContainer = styled.div`
  border-radius: 20px;
  max-height: 77px;
  margin-top: 20px;
`

export const Title = styled.h1`
  color: #31352E;
  padding: 20px;
  margin: 0;
`

export const CardsContainer = styled.div`
  width: 100%;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
`

export const CardLink = styled(Link)`
text-decoration: none;`
