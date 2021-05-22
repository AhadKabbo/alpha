// import React from 'react'
// import { Container } from "react-bootstrap"
import styled from 'styled-components'


// export const CenteredContainer2= styled.div`
//   display: grid;
//   /* flex-direction: column; */
//   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//   grid-gap: 0 10px;
//   /* grid-auto-rows: 10px;  justify-content: center;
//   align-items: center; */
//   /* background: #040404; */


// `
//     <Container style={{
//       display: "flex",flex-direction: "column",
      

//       justify-content: "center",
//       align-items: "center",
//       background: "#040404", }}
    
      
//       style={{ minHeight: "100vh" }}
//     >
      
//         {children}
    
//     </Container>
//   )
// }
export const InfoContainer = styled.div`
  color: #040404;
  background: ${({lightBg}) => (lightBg ? '#f4f4fc' : '#040404')};

`
export const InfoWrapper = styled.div`
  display: grid;
  height: 200px;
  width: auto;
  margin-right: auto;
  margin-left: auto;
  
`
export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: 1;
  align-items: center;
  grid-template-areas:  'col1 col2';

  
`
export const Column1 = styled.div`

  margin-bottom: 15px;
  /* padding: 0 15px; */
  grid-area: col2;
`
export const Column2 = styled.div`

`
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`



export const Subtitle  = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#040404' : '#f4f4fc')};
`



export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const InfoRow2 = styled.div`
  display:flex;
  `
