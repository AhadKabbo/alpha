import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #f4f4fc;
  background: ${({lightBg}) => (lightBg ? '#f4f4fc' : '#040404')};

  @media screen and  (max-width: 768px) {
    padding: 100px 0;
  }
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