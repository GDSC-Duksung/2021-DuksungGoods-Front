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
  border: 1px solid black;
  padding: 8px;
  margin: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  overflow: auto;
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const Button = styled.button`
  float: right;
`;

function TodoItem({ id, user, text }) {
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
      <text>
        {user}
        <br />
      </text>
      <Text>{text}</Text>
      <Button onClick={onModify}>
        <MdBorderColor /> 수정하기
      </Button>
      <Button onClick={onRemove}>
        <MdDelete /> 삭제하기
      </Button>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);
