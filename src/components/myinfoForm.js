import React, { Component } from "react";
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

class Myinfo extends Component {
  state = {
    name: "",
    nickname: "",
    phone: "",
    email: "",
    password: "",
    address: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
  };
  render() {
    return (
      <MainContainer>
        <Container>
          <form onSubmit={this.handleSubmit}>
            <h1>회원정보</h1>
            <Hr />
            <div>
              <Title>이름</Title>
              <Input
                type="text"
                name="name"
                placeholder="홍길동"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <Title>닉네임</Title>
              <Input
                type="text"
                name="nickname"
                placeholder="덕새"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <Title>휴대폰번호</Title>
              <Input
                type="text"
                name="phone"
                placeholder="010-2222-1111"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <Title>이메일</Title>
              <Input
                type="text"
                name="email"
                placeholder="example@naver.com"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <Title>비밀번호</Title>
              <Input
                type="password"
                name="password"
                placeholder="*****"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <Title>주소</Title>
              <Input
                type="text"
                name="address"
                placeholder="서울시 도봉구 쌍문동"
                onChange={this.handleChange}
              />
            </div>
            <Button type="submit">저장하기</Button>
            <Button white>탈퇴하기</Button>
          </form>
        </Container>
      </MainContainer>
    );
  }
}
export default Myinfo;
