import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "./TodoContext";

const TodoListBlock = styled.div`
  flex: 1;
  padding-top: 20px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  const todos = useTodoState();
  return (
    <TodoListBlock>
      {todos
        .slice(0)
        .reverse()
        .map((todo) => (
          <TodoItem
            profile={todo.profile}
            id={todo.id}
            user={todo.user}
            text={todo.textarea}
            time={todo.time}
            seller={todo.seller}
            key={todo.id}
          />
        ))}
    </TodoListBlock>
  );
}

export default TodoList;
