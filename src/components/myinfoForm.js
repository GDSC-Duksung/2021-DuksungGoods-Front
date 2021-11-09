import React, { Component } from "react";
import "../App.css";
import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";
import { useState } from "react/cjs/react.development";

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

function MyinfoForm(props) {
  const [info, setInfo] = useState({
    name: "홍길동",
    nickname: "덕새",
    phone: "010-0000-0000",
    email: "duksung@naver.com",
    password: "",
    address: "서울시 도봉구",
  });

  const handleChange = (e) => setInfo(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onCreate(info); //오류,,,, 클래스형->함수형 변환과정
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.onCreate(this.state);
  // };
  return (
    <MainContainer>
      <Container>
        <form onSubmit={handleSubmit}>
          <h1>회원정보</h1>
          <Hr />
          <div>
            <Title>이름</Title>
            <Input
              type="text"
              name="name"
              value={info.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <Title>닉네임</Title>
            <Input
              type="text"
              name="nickname"
              value={info.nickname}
              onChange={handleChange}
            />
          </div>
          <div>
            <Title>휴대폰번호</Title>
            <Input
              type="text"
              name="phone"
              value={info.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <Title>이메일</Title>
            <Input
              type="text"
              name="email"
              value={info.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <Title>비밀번호</Title>
            <Input
              type="password"
              name="password"
              value="*****"
              onChange={handleChange}
            />
          </div>
          <div>
            <Title>주소</Title>
            <Input
              type="text"
              name="address"
              value={info.address}
              onChange={handleChange}
            />
          </div>
          <Button type="submit">저장하기</Button>
          <Button white>탈퇴하기</Button>
        </form>
      </Container>
    </MainContainer>
  );
}
export default MyinfoForm;
