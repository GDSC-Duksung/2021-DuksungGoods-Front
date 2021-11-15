import React, { useEffect } from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
`;
const Intro = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
`;
const IntroDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 10px 20px;
`;
const InformDiv = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  margin-top: 20px;
`;
const ChoiceDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;
const ActText = styled.text`
  font-weight: ${(props) => (props.weight ? props.weight : "normal")};
  font-size: ${(props) => props.size}px;
  line-height: ${(props) => props.height}px;
  color: ${(props) => (props.color ? props.color : "#22343D")};
`;
const NumButton = styled.button`
  border: 1px solid #dbdbdb;
  border-radius: 30px;
  width: 30px;
  height: 30px;
  font-weight: bold;
  margin-right: 10px;
`;
const ActDetailPage = () => {
  const price = 12000;
  const [totalPrice, setTotalPrice] = React.useState();
  const [num, setNum] = React.useState(1);
  const [isClicked, setIsClicked] = React.useState(false);

  useEffect(() => {
    setTotalPrice(num * price);
  }, [num]);

  return (
    <Container>
      <ActText height={200} size={35} weight={600}>
        이번 겨울은 뭐다? 덕담 공구(덕성 담요)
        <span role="img" aria-label="writing hand">
          🔥
        </span>
      </ActText>
      <Intro>
        <img
          height="400px"
          src="https://t1.daumcdn.net/cfile/tistory/99737A495BBD582C29"
        />
        <IntroDetail>
          <ActText height={20} size={17} weight={100}>
            모인 개수
          </ActText>
          <ActText size={35} weight={600}>
            99개
          </ActText>
          <ActText height={20} size={17} weight={100}>
            남은 시간
          </ActText>
          <ActText size={35} weight={600}>
            21일
          </ActText>
          <InformDiv>
            <ActText height={40} size={17} weight={600}>
              수요조사 진행중
              <span role="img" aria-label="writing hand">
                {" "}
                ❗
              </span>
            </ActText>
            <ActText>
              목표 개수는 30개가 모여야만 결제됩니다. 결제는 2021년 12월 24일에
              다 함께 진행됩니다.
            </ActText>
          </InformDiv>
          <ChoiceDiv style={{ justifyContent: "flex-end" }}>
            <NumButton
              onClick={() => {
                setNum(num - 1);
              }}
            >
              -
            </NumButton>
            <text style={{ marginRight: "10px", paddingTop: "3px" }}>
              {num}
            </text>
            <NumButton
              onClick={() => {
                setNum(num + 1);
              }}
            >
              +
            </NumButton>
            {totalPrice && (
              <ActText size={20} weight={700}>
                {totalPrice.toLocaleString()}
              </ActText>
            )}
            <ActText style={{ marginLeft: "5px", paddingTop: "3px" }}>
              원
            </ActText>
          </ChoiceDiv>
          <ChoiceDiv style={{ justifyContent: "space-between" }}>
            <img
              src={
                require(`../assets/${isClicked ? "i" : "no"}wish.png`).default
              }
              alt={"wish"}
              onClick={() =>
                isClicked ? setIsClicked(false) : setIsClicked(true)
              }
              style={{ width: "40px", height: "40px", margin: "-5px 13px 0 0" }}
            />
            <button
              style={{
                width: "90%",
                backgroundColor: "#981B45",
                borderRadius: "5px",
                color: "#FFFFFF",
                fontSize: "18px",
                height: "45px",
                marginTop: "-5px",
                borderWidth: "0",
              }}
            >
              폼 작성
            </button>
          </ChoiceDiv>
        </IntroDetail>
      </Intro>
      <div style={{ marginTop: "100px", height: "1000px" }}>
        제품 상세 나열...
      </div>
    </Container>
  );
};
export default ActDetailPage;
