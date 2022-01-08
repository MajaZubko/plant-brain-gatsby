import React from 'react'
import {Container, PlantLatinName, PlantName, ImageContainer, NamesContainer} from "../styles/Card.styles";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

export const Card = ({name, latinName, image}) =>  (
    <Container>
        <ImageContainer><GatsbyImage alt={name} image={getImage(image)} /></ImageContainer>
        <NamesContainer>
            <PlantName>{name}</PlantName>
            <PlantLatinName>{latinName}</PlantLatinName>
        </NamesContainer>
    </Container>
)

