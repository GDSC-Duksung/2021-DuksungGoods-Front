import React, { useState } from "react";
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

const Title = styled.text`
  font-size: 20px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  font-size: 15px;
  margin-top: 10px;
  height: ${(props) => (props.contents ? "300px" : "default")};
  resize: none;
`;

const Input = styled.input``;

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
const DIV = styled.div`
  padding: 10px;
`;
function ActualPostingPage(props) {
  const [preposting, setPreposting] = useState({
    category: "",
    title: "",
    contents: "",
    image: "",
    quantity: "",
    period: "",
    price: "",
  });
  const handleChange = (e) => setPreposting(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onCreate(preposting); //오류, 클래스형->함수형 변환과정
  };
  return (
    <MainContainer>
      <Container>
        <h1>실수요조사 포스팅</h1>
        <Hr />
        <form onSubmit={handleSubmit}>
          <DIV>
            <Title>카테고리 :</Title>
            <select class="form-select" id="exampleSelect1">
              <option>기타</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </DIV>
          <DIV>
            <Title>제목 </Title>
            <Input
              type="text"
              placeholder="제목을 입력하세요"
              value={preposting.title}
              onChange={handleChange}
            />
          </DIV>
          <DIV>
            <Title>내용 </Title>
            <Textarea
              contents
              placeholder="내용을 입력하세요"
              value={preposting.contents}
              onChange={handleChange}
            />
          </DIV>
          <DIV>
            <Title>이미지 첨부 </Title>
            <form>
              <p>
                <input
                  class="form-control"
                  type="file"
                  id="formFile"
                  value={preposting.image}
                  onChange={handleChange}
                ></input>
              </p>
            </form>
          </DIV>
          <DIV>
            <Title>목표수량 </Title>
            <Input
              type="text"
              placeholder="100개 (최소수량)"
              value={preposting.quantity}
              onChange={handleChange}
            />
          </DIV>
          <DIV>
            <Title>기간 </Title>
            <Input
              type="text"
              placeholder="yyyy.mm.dd ~ yyyy.mm.dd"
              value={preposting.period}
              onChange={handleChange}
            />
          </DIV>
          <DIV>
            <Title>가격 </Title>
            <Input
              type="text"
              placeholder="최소금액 ~ 최대금액"
              value={preposting.price}
              onChange={handleChange}
            />
          </DIV>
          <DIV>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            ></input>
            실수요조사 포스팅인 것을 확인했습니다.
          </DIV>
          <Button type="submit">등록하기</Button>
          <Button white>취소하기</Button>
        </form>
      </Container>
    </MainContainer>
  );
}

export default ActualPostingPage;
