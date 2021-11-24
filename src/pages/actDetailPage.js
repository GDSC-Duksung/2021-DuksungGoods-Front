import React, { useEffect } from "react";
import styled from "styled-components";
import Community from "../pages/community";
const Container=styled.div`
    display: flex;
    flex-direction: column;
`;
const Intro = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
`;
const IntroDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 10px 20px;
`;
const InformDiv = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  margin-top: 20px;
`;
const ChoiceDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;
const ActText = styled.text`
  font-weight: ${(props) => (props.weight ? props.weight : "normal")};
  font-size: ${(props) => props.size}px;
  line-height: ${(props) => props.height}px;
  color: ${(props) => (props.color ? props.color : "#22343D")};
`;
const NumButton = styled.button`
  border: 1px solid #dbdbdb;
  border-radius: 30px;
  width: 30px;
  height: 30px;
  font-weight: bold;
  margin-right: 10px;
`;
const MenuBar=styled.div`
    border: 1px solid #C4C4C4;
    width: 100%;
    border-width: 1px 0 1px 0;
    margin-bottom: 1rem;
`;
const Tabs=styled.li`
    font-size: 1rem;
    color:grey;
    font-weight: bold;
    display: inline-block;
    padding: 0 1rem 0 ;
    :active{
        color:black;
        border-bottom-width: 2px;
        border-color: black;
    }
`;
const Wrapper=styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin: 0 0 5px 20px;
    padding: 3px 0 0 0;
`;
const UserInfo=styled.input`
    margin-right: 30px;
    line-height: ${props => props.height}px;
`;
const GoodsDetail=()=>{
    const price=12000;
    const [totalPrice, setTotalPrice]=React.useState();
    const [num, setNum]=React.useState(1);

    useEffect(() => {
        setTotalPrice(num*price);
    }, [num])

    return(
        <Container style={{flexDirection:"row"}}>
            <div style={{width: "70%",borderRadius:"5px", border:"1px solid #CBCBCB", height:"1000px"}}>
                <text>안녕하세요. 창작자 bogyung.입니다. 이번에 공구할 굿즈는...</text>
            </div>
            <div  style={{width: "30%", padding:"1em"}}>
                <div style={{display:"inline-block" ,width: "100%",border:"1px solid #C4C4C4", height:"40px", paddingTop:"20px"}}>
                    <ActText height={20} size={15} weight={100} style={{ margin:"0 100px 0 20px"}}>창작자 소개</ActText>
                    <ActText height={20} size={15} weight={100}>bogyung1</ActText>
                </div>
                <div style={{margin:"25px 0 25px 0", border:"1px solid black", borderRadius:"5px", padding:" 20px 0 20px 0"}}> 
                    <Wrapper>
                        <ActText  height={20} size={15} weight={100}>이름</ActText>
                        <UserInfo></UserInfo>          
                    </Wrapper>
                    <Wrapper>
                        <ActText  height={20} size={15} weight={100}>후대폰 번호</ActText>
                        <UserInfo></UserInfo>          
                    </Wrapper>
                    <Wrapper>
                        <ActText  height={20} size={15} weight={100}>이메일</ActText>
                        <UserInfo></UserInfo>          
                    </Wrapper>
                    <Wrapper>
                        <ActText  height={20} size={15} weight={100}>주소</ActText>
                        <UserInfo height={40}></UserInfo>          
                    </Wrapper>
                    <Wrapper>
                        <ActText  height={20} size={15} weight={100}>우편번호</ActText>
                        <UserInfo></UserInfo>          
                    </Wrapper>
                    <Wrapper>
                        <ActText  height={20} size={15} weight={100}>배송시 요청사항</ActText>
                        <UserInfo height={40}></UserInfo>          
                    </Wrapper>
                    <Wrapper>
                        <ActText  height={20} size={15} weight={100}>환불 받을 계좌 번호</ActText>
                        <UserInfo></UserInfo>          
                    </Wrapper>
                    <ChoiceDiv style={{justifyContent:"flex-end", marginRight:"30px"}}>
                        <NumButton onClick={()=>{setNum(num-1)}}>-</NumButton>
                        <text style={{marginRight:"10px", paddingTop:"3px"}}>{num}</text>
                        <NumButton  onClick={()=>{setNum(num+1)}}>+</NumButton>
                        {totalPrice&&<ActText size={20} weight={700}>{totalPrice.toLocaleString()}</ActText>}
                        <ActText style={{marginLeft:"5px", paddingTop:"3px"}}>원</ActText>
                    </ChoiceDiv>
                    <button style={{width:"90%", backgroundColor:"#981B45", borderRadius:"5px",marginLeft:"17px",
                            color:"#FFFFFF", fontSize:"18px", height:"40px", marginTop:"15px", borderWidth:"0"}}>폼 제출하기</button>
                    
                </div>
            </div>

        </Container>
    );
}
const ActDetailPage = () => {
    const price=12000;
    const [totalPrice, setTotalPrice]=React.useState();
    const [num, setNum]=React.useState(1);
    const [isClicked, setIsClicked]=React.useState(false);
    const [menu, setMenu]=React.useState(0);

    const [heart, setHeart] = React.useState(false);

    const handleButtonClick = (event, item) => {
        setHeart(!heart);
    }
    
    const menuList = {
        0: <GoodsDetail />,
        1: <Community />
    };

    const changeMenu = (menuIndex) =>{
        setMenu( menuIndex);
    };


  useEffect(() => {
    setTotalPrice(num * price);
  }, [num]);

    return (
        <Container style={{alignItems:"center"}}>
            <ActText height={200} size={35} weight={600}>이번 겨울은 뭐다? 덕담 공구(덕성 담요)
            <span role="img" aria-label="writing hand">🔥</span></ActText>
            <Intro>
                <img height="400px"  src="https://t1.daumcdn.net/cfile/tistory/99737A495BBD582C29"/>
                <IntroDetail>
                    <ActText height={20} size={17} weight={100}>모인 개수</ActText>
                    <ActText size={35} weight={600}>99개</ActText>
                    <ActText height={20} size={17} weight={100}>남은 시간</ActText>
                    <ActText size={35} weight={600}>21일</ActText>
                    <InformDiv>
                        <ActText height={40} size={17} weight={600}>수요조사 진행중
                        <span role="img" aria-label="writing hand"> ❗</span></ActText>
                        <ActText>목표 개수는 30개가 모여야만 결제됩니다.
                        결제는 2021년 12월 24일에 다 함께 진행됩니다.</ActText>
                    </InformDiv>
                    
                    <ChoiceDiv style={{justifyContent:"space-between"}}>
                        <img src={require(`../assets/icons/heart-${isClicked ? 'clicked' : 'default'}.png`).default} alt={'heart'}
                                     onClick={()=> isClicked ?
                                    setIsClicked(false)
                                    :
                                    setIsClicked(true)
                                    } style={{width: "50px", height: "50px", margin:"-5px 5px 0 0"}}/>
                        <button style={{width:"90%", backgroundColor:"#981B45", borderRadius:"5px",
                            color:"#FFFFFF", fontSize:"15px", height:"45px", marginTop:"-5px", borderWidth:"0"}}>이 프로젝트 후원하기</button>
                    </ChoiceDiv>
                </IntroDetail>
            </Intro>
            <div style={{width:"70%", marginTop:"10px"}}>
                <MenuBar>
                    <ul>
                        <Tabs  onClick={() => changeMenu(0)}>상세설명</Tabs>
                        <Tabs  onClick={() => changeMenu(1)}>커뮤니티</Tabs>
                    </ul>
                </MenuBar>
                <div>
                    {menuList[menu]}
                </div>
            </div>
        </Container>
    );
}
export default ActDetailPage;