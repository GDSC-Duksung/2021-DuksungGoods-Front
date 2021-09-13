import React from "react";
import styled from "styled-components";

const Container=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const FindForm=styled.div`
    display: flex;
    text-align: center;
    width: 400px;
    margin-top: 100px;
    flex-direction: column;
`;
const Title=styled.text`
    font-size: 20px;
    font-weight: bold;
    padding: 0.5em;
    border-bottom: 2px solid #981B45;
`;
const Input=styled.input`
    outline: 0;
    border-width: 0 0 2px;
    border-color: #D1D1D1;
    padding: 13px;
    margin: 15px;
    height: 25px;
    &:focus{
        border-color: #981B45;
    }
`;
const FindButton=styled.button`
    font-size: 1em;
    margin: 0.6em;
    padding: 0.6em;
    border: 2px solid #981B45;
    border-radius: 2px;
    color:white;
    background-color: #981B45;
`;
const AuthDiv=styled.div`
    display: flex;
    align-items: center;
`;
const EmailInput=styled.input`
    outline: 0;
    border-width: 0 0 2px;
    border-color: #D1D1D1;
    padding: 15px;
    margin: 15px;
    width:80%;
    height: 25px;
    &:focus{
        border-color: #981B45;
    }
`;
const AuthButton=styled.button`
    background-color: #981B4580;
    border: 1px solid #981B4580;
    border-radius: 10px;
    color: white;
    width: 20%;
    height: 30px;
`;

const FindPassPage = () => {

    return (
        <Container>
        <FindForm>
            <Title>비밀번호 찾기</Title>
            <AuthDiv>
                <EmailInput placeholder="Email"/>
                <AuthButton>인증요청</AuthButton>
            </AuthDiv>
            <Input placeholder="Code"/>
            <FindButton>확인</FindButton>
        </FindForm>
        </Container>

    )


}
export default FindPassPage;