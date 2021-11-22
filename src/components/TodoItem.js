import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete, MdBorderColor } from "react-icons/md";
import { useTodoDispatch } from "./TodoContext";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;
const TodoItemBlock = styled.div`
  height: 100%;
  padding: 8px;
  margin: 8px;
  overflow: auto;
`;

const Text = styled.div`
  flex: 1;
  color: #495057;
  padding-bottom: 50px;
`;

const Button = styled.button`
  float: right;
`;

const Name = styled.text`
  flex: 1;
  font-weight: bold;
`;

const Time = styled.text`
  font-size: 80%;
`;

const Img = styled.div`
  padding: 5px;
`;
const Column = styled.div`
  float: left;
`;

const Row = styled.div`
  content: "";
  display: table;
  clear: both;
`;
const Hr = styled.hr`
  border-top: 1px solid #ebebeb;
`;

function TodoItem({ profile, img, id, user, text }) {
  const dispatch = useTodoDispatch();

  const onModify = () => {
    //고쵸야함
    dispatch({
      type: "MODIFY",
      id,
    });
  };

  const onRemove = () => {
    dispatch({
      type: "REMOVE",
      id,
    });
  };

  return (
    <TodoItemBlock>
      <Row>
        <Column>
          <Img>
            <img height="45px" src={profile} />
          </Img>
        </Column>
        <Column>
          <Row>
            <Name>{user} </Name>
          </Row>
          <Row>
            <Time> 5시간 전 , 수정됨 </Time>
          </Row>
        </Column>
      </Row>
      <Text>
        {text.split("\n").map((line) => {
          return (
            <>
              {line}
              <br />
            </>
          );
        })}
      </Text>
      {/* <Button onClick={onModify}>
        <MdBorderColor /> 수정하기
      </Button>
      <Button onClick={onRemove}>
        <MdDelete /> 삭제하기
      </Button> */}
      <text>댓글 </text>
      <text>3</text>
      <Hr />
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);
