import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from "./TodoContext";
import Textarea from "react-textarea-autosize";
import TimeCounting from "time-counting";

const MainContainer = styled.div`
  justify-content: center;
  display: flex;
`;
const Container = styled.div`
  width: 100%;
  overflow: auto;
  white-space: pre;
`;

const InsertFormPositioner = styled.div``;

const InsertForm = styled.form`
  padding: 8px;
  margin: 8px;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const Input = styled(Textarea)`
  border: none;
  width: 100%;
  outline: none;
  box-sizing: border-box;
  resize: none;
  font-size: 16px;
  //자동조절로 바꾸기 : npm install react-textarea-autosize
  min-height: 100px;

  padding: 12px 20px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  color: rgb(158, 158, 158);
  border: 0.8px solid rgb(242, 242, 242);
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 3%) 0px 0.8px 0px;
  background: rgb(252, 252, 252);
  line-height: 22px !important;
  font-family: NotoSansKR, "SF Pro Text", "Segoe UI", "Helvetica Neue", Arial,
    sans-serif !important;
`;

const Input2 = styled.input`
  float: right;
  margin: 16px 16px 8px;

  border: none;
  color: rgb(0, 0, 0);
  height: 36px;
  font-weight: 400;
  //width: 100% !important;
  font-size: 12px !important;
  line-height: 20px !important;
  font-family: NotoSansKR, "SF Pro Text", "Segoe UI", "Helvetica Neue", Arial,
    sans-serif !important;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = (e) => setValue(e.target.value);

  const onSubmit = (e) => {
    var today = new Date();

    var year = today.getFullYear();
    var month = ("0" + (today.getMonth() + 1)).slice(-2);
    var day = ("0" + today.getDate()).slice(-2);
    var hours = ("0" + today.getHours()).slice(-2);
    var minutes = ("0" + today.getMinutes()).slice(-2);
    var seconds = ("0" + today.getSeconds()).slice(-2);

    var dateString =
      year +
      "-" +
      month +
      "-" +
      day +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds;

    // console.log(dateString);
    // console.log(typeof dateString);
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        profile:
          "https://www.duksung.ac.kr/uploads/CONTENTS/site/duksung/duksung_symbol.png",
        id: nextId.current,
        user: "heesun", //user DB값 받아오기
        time: TimeCounting(dateString, {
          lang: "ko",
        }),
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
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              onChange={onChange}
              value={value}
              placeholder="글을 입력한 후, 작성하기를 누르세요"
            />
            <Input2 type="submit" value="작성하기" />
          </InsertForm>
        </InsertFormPositioner>
      </Container>
    </MainContainer>
  );
}

export default React.memo(TodoCreate);
