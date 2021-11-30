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
  font-size: 20px;
  background-color: lightgrey;
  width: 100%;
  padding: 10px;
  padding-left: 40px;
  margin: 10px;
  border-radius: 30px;
`;

const Content = styled.div`
  margin-left: 30px;
  padding: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  font-size: 15px;
  BORDER-BOTTOM: 1px solid;
  BORDER-LEFT: medium none;
  BORDER-RIGHT: medium none;
  BORDER-TOP: medium none;

`;

const Button = styled.button`
  width: 47%;
  padding: 10px;
  margin: 10px;
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

const Preform = () => {
  return (
    <MainContainer>
      <Container>
        <h1>가수요조사 폼</h1>
        <Hr />
        <h2>덕성여대 버건디 수건 가수요 조사</h2>
            *조사기간: ~~~~~
            <br/>
            *필수항목

            <div> (이미지)</div>
        <div>
          <Title>설명</Title>
          <Content>
            수건 재질과 수량을 선택해 주세요.
            <br />
            <br />
            #수건 재질
            <br />
            1. 국내 공장 제작 뱀부얀 200g
            <br />
            2. 송월타올 뱀부얀혼방사 190g
            <br />
            3. 코마사 40수 170~200g
            <br />
            4. 코마사 40수 170g~200g
          </Content>
        </div>
        <div>
          <Title font-color="red">*구매수량</Title>
          <Content>
            <select class="form-select" id="exampleSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </Content>
        </div>
        <div>
          <Title>*의견 또는 질문</Title>
          <Content>
            <Input type="text" placeholder="ex) 국내 공차 제장 병부안 200g" />
          </Content>
        </div>
        <Button>제출</Button>
      </Container>
    </MainContainer>
  );
};
export default Preform;
