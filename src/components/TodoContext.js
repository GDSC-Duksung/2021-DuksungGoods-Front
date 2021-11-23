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
    // case "MODIFY":
    //   return state.map(
    //     (todo) => (todo.user === action.user ? { ...todo } : todo) //수정,,
    //   );

    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    case "REPLY": //수정 필요
      return state.concat(action.todo);

    default:
      return state;
  }
}

const textexample =
  "안녕하세요. 책들의정원입니다. :)\n호랑이 키링 2종 세트\n작가의 다른 저서인 <족집게 한국사>\n\n다시 한번 많은 관심에 감사하다는 말씀드리며 펀딩 마감까지 잘 부탁드립니다! 😊\n 감사합니다.";

const initialTodos = [
  {
    id: 1,
    user: "책들의정원",
    textarea: textexample,
    seller: true,
    profile:
      "https://www.duksung.ac.kr/uploads/CONTENTS/site/duksung/duksung_symbol.png",
    // done: true,
  },
  {
    id: 2,
    user: "최희선",
    textarea: "오늘의 뉴스 읽기",
    seller: false,
    profile:
      "https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo-thumbnail.png",
    // done: true,
  },
  {
    id: 3,
    user: "김보경",
    textarea: "샌드위치 사 먹기",
    seller: false,
    profile:
      "https://cheecle.kr/wp-content/uploads/2014/05/%ed%99%98%ec%83%81%ec%86%8d%ec%9c%bc%eb%a1%9c%ec%a0%95%ec%82%ac%ea%b0%81%ed%98%95.jpg",
  },
  {
    id: 4,
    user: "이승희",
    textarea: "리액트 공부하기",
    seller: false,
    profile:
      "https://cheecle.kr/wp-content/uploads/2014/05/%ed%99%94%ec%9d%b4%ed%8a%b8%ec%a0%95%ec%82%ac%ea%b0%81%ed%98%95.jpg",
  },
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
