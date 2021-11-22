import React from "react";
import TodoList from "../components/TodoList";
import TodoCreate from "../components/TodoCreate";
import { TodoProvider } from "../components/TodoContext";
import styled from "styled-components";

const MainContainer = styled.div`
  justify-content: center;
  display: flex;
`;
const Container = styled.div`
  width: 70%;
`;
const Title = styled.div`
  display: flex;
  padding: 10px;
`;
const H1 = styled.h1`
  padding: 10px;
  color: ${(props) => (props.white ? "black" : "white")};
  background-color: ${(props) => (props.white ? "white" : "#981B45")};
`;

function Community() {
  return (
    <MainContainer>
      <Container>
        <Title>
          <H1>모든게시글</H1>
          <H1 white>판매자 업데이트</H1>
        </Title>
        <TodoProvider>
          <TodoCreate />
          <TodoList />
        </TodoProvider>
      </Container>
    </MainContainer>
  );
}

export default Community;
