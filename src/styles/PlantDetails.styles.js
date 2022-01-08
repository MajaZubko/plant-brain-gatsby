import styled from "styled-components";

export const Container =  styled.div`
  display: flex;
  justify-content: center;
  background-color: #D1E2C4;
  min-height: 100vh;
`;

export const PlantCard = styled.div`
  min-width: 90vw;
  margin: 40px 0;
  background-color: #EBEBE8;
  border-radius: 20px;
  padding: 20px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled.div`
  margin-bottom: 8px;
`

export const DetailsContainer = styled.div`
  height: 100%;
  margin-left: 20px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`

export const PlantName = styled.p`
  font-weight: bold;
`

export const PlantLatinName = styled.p`
  font-style: italic;
`

export const DetailsRow = styled.div`
  margin: 4px 0;
`

export const DetailLabel = styled.span`
  font-weight: bold;
  margin-right: 4px;
`

export const DetailValue = styled.span``
