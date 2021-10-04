import React, { createContext, useReducer, useContext, useRef } from "react";

const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);
const TodoNextIdContext = createContext(null);

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    // case "TOGGLE": //체크표시
    //   return state.map((todo) =>
    //     todo.id === action.id ? { ...todo, done: !todo.done } : todo
    //   );
    case "MODIFY":
      return state.map(
        (todo) => (todo.user === action.user ? { ...todo } : todo) //수정,,
      );

    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

const initialTodos = [
  {
    id: 1,
    user: "heesun",
    text: "아침 산책",
    seller: true,
    // done: true,
  },
  {
    id: 2,
    user: "bogyung",
    text: "오늘의 뉴스 읽기",
    // done: true,
  },
  { id: 3, user: "seunghee", text: "샌드위치 사 먹기" },
  { id: 4, user: "heesun", text: "리액트 공부하기", seller: true },
];

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  return useContext(TodoStateContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

export function useTodoNextId() {
  return useContext(TodoNextIdContext);
}
