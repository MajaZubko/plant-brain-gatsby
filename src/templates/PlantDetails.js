import React from 'react'
import {graphql} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {
    Container, DetailLabel,
    DetailsContainer,
    DetailsRow, DetailValue,
    ImageContainer,
    PlantCard,
    PlantLatinName,
    PlantName
} from "../styles/PlantDetails.styles";
import {GlobalStyle} from "../styles/index.styles";

const PlantDetails = ({data}) => {
    const plant = data.contentfulEntry
    return <>
        <GlobalStyle />
        <Container>
        <PlantCard>
            <ImageContainer>
                <GatsbyImage alt={plant.name} image={getImage(plant.image)} />
            </ImageContainer>
            <DetailsContainer>
                <PlantName>{plant.name}</PlantName>
                <PlantLatinName>{plant.latinName}</PlantLatinName>

                {plant.height && (<DetailsRow>
                    <DetailLabel>Height:</DetailLabel>
                    <DetailValue>{plant.height} m</DetailValue>
                </DetailsRow>)}

                {plant.width && (<DetailsRow>
                    <DetailLabel>Width:</DetailLabel>
                    <DetailValue>{plant.width} m</DetailValue>
                </DetailsRow>)}

                {plant.waterNeeds && (<DetailsRow>
                    <DetailLabel>Water needs:</DetailLabel>
                    <DetailValue>Every {plant.waterNeeds} days</DetailValue>
                </DetailsRow>)}

                {plant.sunNeeds && (<DetailsRow>
                    <DetailLabel>Sun needs:</DetailLabel>
                    <DetailValue>{plant.sunNeeds}</DetailValue>
                </DetailsRow>)}

                {plant.propagation && (<DetailsRow>
                    <DetailLabel>Propagation method:</DetailLabel>
                    <DetailValue>{plant.propagation}</DetailValue>
                </DetailsRow>)}
            </DetailsContainer>
        </PlantCard>
    </Container>
        </>
}

export default PlantDetails

export const pageQuery = graphql`
query PlantDetail($id: String) {
  contentfulEntry(id: {eq: $id}) {
    ... on ContentfulPlant {
      id
      name
      latinName
      height
      sunNeeds
      waterNeeds
      propagation
      width
      image {
        gatsbyImageData(width: 400, placeholder: DOMINANT_COLOR, cornerRadius: 10)
      }
    }
  }
}`
