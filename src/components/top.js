import React from "react";
import styled from "styled-components";

const Title=styled.text`
  font-size: 23px;
  font-weight: bold;
`;
const LognReg=styled.text`
  font-size: 12px;
  padding-top: 20px;
`;
const MainContainer=styled.div`
  justify-content: center;
  display:flex;
  height: 40px;
  padding: 10px;
`;
const Container=styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;

`;

const topPage = () => {
  return (

  <MainContainer>
    <Container>
        <Title>덕성 굿즈 플랫폼</Title>
        <LognReg>로그인|회원가입</LognReg>
    </Container>
  </MainContainer>
  )
};

export default topPage;
