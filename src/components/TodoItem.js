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
  border: none;
  padding: 5px;
  background-color: white;
`;
const Button_Reply = styled.button`
  float: left;
  border: none;
  padding: 5px;
  background-color: white;
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

function TodoItem({ profile, id, user, text, seller, key }) {
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
  const onReply = () => {
    dispatch({
      type: "REPLY",
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
      <Button_Reply onClick={onReply}>댓글 </Button_Reply>
      <Time>3</Time>
      <Button onClick={onModify}>수정</Button>
      <Button onClick={onRemove}>삭제</Button>
      <Hr />
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);
