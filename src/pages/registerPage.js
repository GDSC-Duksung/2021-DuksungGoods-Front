import React, {useState} from "react";
import styled from "styled-components";

const Container=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const RegisterForm=styled.div`
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
    padding: 13px;
    margin: 15px;
    height: 25px;
    border: 1px solid #D1D1D1;
`;
const RegisterButton=styled.button`
    font-size: 1em;
    margin: 0.6em;
    padding: 0.6em;
    border: 2px solid #981B45;
    border-radius: 2px;
    color:white;
    background-color: #981B45;
`;
const RegisterPage = () => {

    const [user, setUser]=useState({
        name:"",
        email: "",
        nickname:"",
        password:""        
    });
    const {name, email,nickname, password}=user;

    const onChangeInput= e =>{
        const {name, value}=e.target;
        setUser({...user, [name]:value});
    };

    return (
        <Container>
            <RegisterForm>
                <Title>회원가입</Title>
                <Input placeholder="Name" name="name" value={name} onChange={onChangeInput}/>
                <Input placeholder="Email" name="email" value={email} onChange={onChangeInput}/>
                <Input placeholder="NickName" name="nickname" value={nickname} onChange={onChangeInput}/>
                <Input placeholder="Password" type="password" name="password" value={password} onChange={onChangeInput}/>
                <Input placeholder="Password Check" type="password"/>
                <RegisterButton>회원가입</RegisterButton>
            </RegisterForm>
        </Container>

    )


};
export default RegisterPage;