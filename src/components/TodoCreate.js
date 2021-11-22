import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from "./TodoContext";

const MainContainer = styled.div`
  justify-content: center;
  display: flex;
`;
const Container = styled.div`
  width: 100%;
  overflow: auto;
  white-space: pre;
`;

const InsertFormPositioner = styled.div`
  border: 1px solid black;
  margin-top: 30px;
`;

const InsertForm = styled.form`
  padding: 8px;
  margin: 8px;
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const Input = styled.textarea`
  //글쓰면 자동 줄넘기기
  border: none;
  width: 100%;
  height: 300px; //자동조절로 바꾸기
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const Button = styled.button`
  float: right;
  margin-right: 20px;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = (e) => setValue(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        profile:
          "https://www.duksung.ac.kr/uploads/CONTENTS/site/duksung/duksung_symbol.png",
        id: nextId.current,
        user: "heesun", //user DB값 받아오기
        seller: true,
        textarea: value,
      },
    });
    nextId.current += 1;
    setOpen(false);
    setValue("");
  };

  return (
    <MainContainer>
      <Container>
        {open && (
          <InsertFormPositioner>
            <InsertForm onSubmit={onSubmit}>
              <Input
                autoFocus
                onChange={onChange}
                value={value}
                placeholder="할 일을 입력 후, Enter 를 누르세요"
              />
              <input type="submit" value="Submit" />
            </InsertForm>
          </InsertFormPositioner>
        )}
        <Button onClick={onToggle} open={open}>
          <MdAdd /> 글쓰기
        </Button>
      </Container>
    </MainContainer>
  );
}

export default React.memo(TodoCreate);
