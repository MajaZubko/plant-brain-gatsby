import * as React from "react"
import {graphql} from "gatsby";
import {Card} from '../components/Card'
import {CardsContainer, Container, GlobalStyle, Title, TitleContainer, CardLink} from './index.styles'

const IndexPage = ({data}) => {
  const plants = data?.allContentfulEntry?.edges?.map(edge => edge.node)?.slice(6,12);

  return (
      <>
        <GlobalStyle />
        <Container>
          <TitleContainer>
            <Title>Plant brain</Title>
          </TitleContainer>

            <CardsContainer>
                {plants.length > 0 && plants.map(plant => (
                    <CardLink to={`/plant/${plant.slug}`}>
                        <Card key={plant.id} name={plant.name} latinName={plant.latinName} image={plant.image} />
                    </CardLink>
                ))}
            </CardsContainer>
        </Container>
      </>
  )
}

export default IndexPage

export const pageQuery = graphql`
query PlantsList{
  allContentfulEntry {
    edges {
      node {
        id
        ... on ContentfulPlant {
          id
          name
          image {
           gatsbyImageData(
              placeholder: DOMINANT_COLOR
              cornerRadius: 10
              width: 400
              aspectRatio: 0.75
            )
          }
          latinName
          slug
        }
      }
    }
  }
}`
