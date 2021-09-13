import React from "react";
import "../App.css";
import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";

const MainContainer = styled.div`
  justify-content: center;
  display: flex;
`;
const Container = styled.div`
  width: 70%;
`;

const Title = styled.div`
  font-size: 15px;
  padding-top: 10px;
`;

const Content = styled.div`
  margin: 5px;
  padding: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  font-size: 15px;
`;

const Button = styled.button`
  width: 47%;
  padding: 10px;
  margin: 10px;
  color: ${(props) => (props.white ? "black" : "white")};
  background-color: ${(props) => (props.white ? "white" : "#981B45")};
  border: 2px solid #981b45;
  font-size: 20x;
  border-radius: 15px;
`;

const Hr = styled.hr`
  background-color: #981b45;
  height: 5px;
  border-radius: 100px;
  border: none;
`;

const Row = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

const Myinfo = () => {
  return (
    <MainContainer>
      <Container>
        <h1>회원정보</h1>
        <Hr />
        <div>
          <Title>이름</Title>
          <Input type="text" placeholder="홍길동" />
        </div>
        <div>
          <Title>닉네임</Title>
          <Input type="text" placeholder="덕새" />
        </div>
        <div>
          <Title>휴대폰번호</Title>
          <Input type="text" placeholder="010-2222-1111" />
        </div>
        <div>
          <Title>이메일</Title>
          <Input type="text" placeholder="example@naver.com" />
        </div>
        <div>
          <Title>주소</Title>
          <Input type="text" placeholder="서울시 도봉구 쌍문동" />
        </div>
        <Button>회원정보수정</Button> <Button white>취소</Button>
      </Container>
    </MainContainer>
  );
};
export default Myinfo;
