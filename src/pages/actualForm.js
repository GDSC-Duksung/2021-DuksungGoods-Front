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
  width: 100%;
  padding: 10px;
  margin: 10px;
  background-color: #981b45;
  border: 2px solid #981b45;
  font-size: 20x;
  color: white;
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

const Realform = () => {
  return (
    <MainContainer>
      <Container>
        <h1>주문서작성/결제 (실수요조사 폼)</h1>
        <Hr />
        <p>택배배송 1개</p>
        <Content>
          <Row>
            {" "}
            <div>(이미지)</div>
            <div>
              <h2>덕성여대 버건디 수건</h2>
              <h4>1개</h4>
              <h4>12,000원</h4>
            </div>
          </Row>
        </Content>
        <h4>*주문 고객 정보</h4>
        <Hr />
        <Content>
          <div>
            <Title>이름</Title>
            <Input type="text" placeholder="홍길동" />
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
          <div>
            <Title>우편번호</Title>
            <Input type="text" placeholder="00000" />
          </div>
          <div>
            <Title>배송시 요청사항</Title>
            <Input type="text" placeholder="부재시 경비실에 맡겨주세요" />
          </div>
          <div>
            <Title>환불받을 계좌번호</Title>
            <Input type="text" placeholder="계좌번호" />
          </div>
          <div>
            <p>
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              ></input>
              목표 개수에 도달하지 못하면 일주일 이내에 전액 환불됩니다.
            </p>
            <p>
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              ></input>
              단순 변심으로 인한 환불은 불가함을 확인했습니다.
            </p>
          </div>
        </Content>
        <Button onclick="window.alert('alert 메시지~!!!')">폼 제출하기</Button>
      </Container>
    </MainContainer>
    
  );
};
export default Realform;

