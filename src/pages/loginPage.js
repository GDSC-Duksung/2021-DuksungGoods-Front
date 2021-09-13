import React, {useState} from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import image from '../assets/loginImage.PNG';
// import {FaEye, FaEyeSlash} from 'react-icons/fa';

const Container=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const LoginForm=styled.div`
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
    padding: 0.6em;
    margin:0.6em;
    height: 25px;
    border: 1px solid #D1D1D1;
`;
const LoginButton=styled.button`
    font-size: 1em;
    margin: 0.6em;
    padding: 0.6em;
    border: 2px solid #981B45;
    border-radius: 2px;
    color:white;
    background-color: #981B45;
    text-decoration:none;
`;
const AccountText=styled.text`
    font-size: 15px;
    color: #7C7C7C;
    padding-top: 5px;
`;
const RegButton=styled.button`
    font-size: 15px;
    font-weight: bold;
    background-color: transparent;
    border: none;
    color: #981B45;
`;
const PassText=styled.text`
    font-size: 13px;
    color: #981B45;
    padding-top: 20px;
`;
const SepDiv=styled.div`
    border-bottom: 1px solid #C4C4C4;
    padding: 10px;
`;
const LoginLink=styled(Link)`
    text-decoration: none;
    color: white;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
const StyledLink=styled(Link)`
    text-decoration: none;
    color: #981B45;
    
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
//TODO LIST
// 1. Email에 @duksung.ac.kr 집어넣기
// 2. password옆에 icons, 그리고 효과 집어넣기
//https://velog.io/@kdo0129/react-input-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC
const LoginPage = () => {

    const [user, setUser]=useState({
        email: "",
        password:""
        
    });
    const {email, password}=user;

    const onChangeInput= e =>{
        const {name, value}=e.target;
        setUser({...user, [name]:value});

    };


    return (
        <Container>
            <LoginForm>
                <Title>로그인</Title>
                <img src={image} alt="goods" width="220" height="200" style={{alignSelf: 'center'}}/>
                <Input placeholder="Email@duksung.ac.kr" name="email" value={email} onChange={onChangeInput}/>
                <Input placeholder="Password" type="password" name="password" value={password} onChange={onChangeInput}/>
                {/* <FaEye/>
                <FaEyeSlash/> */}
                <LoginButton><LoginLink to='/' >로그인하기</LoginLink></LoginButton>
                <SepDiv>
                    <AccountText>계정이 없으신가요? </AccountText><RegButton><StyledLink to="/register">회원가입</StyledLink></RegButton>
                </SepDiv>
                <PassText><StyledLink to="/findpass">비밀번호를 잊으셨나요?</StyledLink></PassText>
            </LoginForm>
        </Container>
        
        


    )


};
export default LoginPage;