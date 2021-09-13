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

const Title=styled.text`
  font-size: 20px;
  
`;

const Input = styled.input`
  width:100%;
  padding: 10px;
  border-radius: 3px;
  font-size: 15px;
`;

const Button = styled.button`
  width: 47%;
  padding: 10px;
  margin: 10px;
  color:${(props) => (props.white ? "black" : "white")};
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

const Preposting = () => {
  return (
    <MainContainer>
      <Container>
          <h1>가수요조사 포스팅</h1>
          <Hr/>
          <div>
            <Title>카테고리 :</Title>
            <select class="form-select" id="exampleSelect1">
              <option>기타</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div>
            <Title>제목 :</Title>
            <Input type="text" placeholder="제목을 입력하세요" />
          </div>
          <div>
            <Title>내용 :</Title>
            <Input type="text" placeholder="내용을 입력하세요" />
          </div>

          <div>
          <Title>이미지 첨부 :</Title>
          <form>
            <p>
              <input class="form-control" type="file" id="formFile"></input>
            </p>
          </form>
          </div>

          <div>
            <Title>목표수량 :</Title>
            <Input type="text" placeholder="100개 (최소수량)" />
          </div>
          
          <div>
            <Title>기간 :</Title>
            <Input type="text" placeholder="yyyy.mm.dd ~ yyyy.mm.dd" />
          </div>
          
          <div>
            <Title>가격 :</Title>
            <Input type="text" placeholder="최소금액 ~ 최대금액" />
          </div>

          <div>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            ></input>
            가수요조사 포스팅인 것을 확인했습니다.
          </div>
          <Button>등록하기</Button> <Button white>취소하기</Button>
      </Container>
    </MainContainer>
  );
};

export default Preposting;
