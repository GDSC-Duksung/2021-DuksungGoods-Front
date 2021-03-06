import React, { useEffect } from "react";
import styled from "styled-components";
import Community from "../pages/community";
const Container=styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1000px){
        #form{
            display: none;
        }
        #introdetail{
            display:none;
        }
        #goodsinfo{
            width:100%;
        }
        #goodsimg{
            display: 100%;
        }
    }
`;
const Intro = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
`;
const IntroDetail = styled.div`
  display: flex;
  width:30%;
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
`;
const GoodsInfo=styled.div`
    width: 70%;
    border-radius: 5px;
    border: 1px solid #CBCBCB;
    height: 1000px;
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
            <GoodsInfo id="goodsinfo">
                <text>???????????????. ????????? bogyung.?????????. ????????? ????????? ?????????...</text>
            </GoodsInfo>
            <div  id="form" style={{width: "30%", padding:"1em"}}>
                <div style={{display:"inline-block" ,width: "100%",border:"1px solid #C4C4C4", height:"40px", paddingTop:"20px"}}>
                    <ActText height={20} size={15} weight={100} style={{ margin:"0 100px 0 20px"}}>????????? ??????</ActText>
                    <ActText height={20} size={15} weight={100}>bogyung1</ActText>
                </div>
                <div style={{margin:"25px 0 25px 0", border:"1px solid black", borderRadius:"5px", padding:" 20px 0 20px 0"}}> 
                    <Wrapper>
                        <ActText style={{paddingTop:"5px"}}size={15} weight={700} >??????</ActText>
                        <ChoiceDiv style={{marginRight:"30px"}}>
                            <NumButton onClick={()=>{setNum(num-1)}}>-</NumButton>
                            <text style={{marginRight:"10px", paddingTop:"3px"}}>{num}</text>
                            <NumButton  onClick={()=>{setNum(num+1)}}>+</NumButton>
                            {totalPrice&&<ActText size={20} weight={700}>{totalPrice.toLocaleString()}</ActText>}
                            <ActText style={{marginLeft:"5px", paddingTop:"3px"}}>???</ActText>
                        </ChoiceDiv>
                    </Wrapper>
                    <button style={{width:"90%", backgroundColor:"#981B45", borderRadius:"5px",marginLeft:"17px",
                            color:"#FFFFFF", fontSize:"18px", height:"40px", marginTop:"15px", borderWidth:"0"}}>????????????</button>
                    
                </div>
            </div>

        </Container>
    );
}
const FictiDetailPage = () => {
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
            <ActText height={200} size={35} weight={600}>?????? ????????? ??????? ?????? ??????(?????? ??????)
            <span role="img" aria-label="writing hand">????</span></ActText>
            <Intro>
                <img id="goodsimg" height="400px" src="https://t1.daumcdn.net/cfile/tistory/99737A495BBD582C29"/>
                <IntroDetail id="introdetail">
                    <ActText height={20} size={17} weight={100}>?????? ??????</ActText>
                    <ActText size={35} weight={600}>99???</ActText>
                    <ActText height={20} size={17} weight={100}>?????? ??????</ActText>
                    <ActText size={35} weight={600}>21???</ActText>
                    <InformDiv>
                        <ActText height={40} size={17} weight={600}>???????????? ?????????
                        <span role="img" aria-label="writing hand"> ???</span></ActText>
                        <ActText>?????? ????????? 30?????? ???????????? ???????????????.
                        ????????? 2021??? 12??? 24?????? ??? ?????? ???????????????.</ActText>
                    </InformDiv>
                    
                    <ChoiceDiv style={{justifyContent:"space-between",  marginTop: "30px"}}>
                        <img src={require(`../assets/icons/heart-${isClicked ? 'clicked' : 'default'}.png`).default} alt={'heart'}
                                     onClick={()=> isClicked ?
                                    setIsClicked(false)
                                    :
                                    setIsClicked(true)
                                    } style={{width: "50px", height: "50px", margin:"-5px 5px 0 0"}}/>
                        <button style={{width:"90%", backgroundColor:"#981B45", borderRadius:"5px",
                            color:"#FFFFFF", fontSize:"15px", height:"45px", marginTop:"-5px", borderWidth:"0"}}>??? ???????????? ????????????</button>
                    </ChoiceDiv>
                </IntroDetail>
            </Intro>
            <div style={{width:"70%", marginTop:"10px"}}>
                <MenuBar>
                    <ul>
                        <Tabs  onClick={() => changeMenu(0)}>????????????</Tabs>
                        <Tabs  onClick={() => changeMenu(1)}>????????????</Tabs>
                    </ul>
                </MenuBar>
                <div>
                    {menuList[menu]}
                </div>
            </div>
        </Container>
    );
}
export default FictiDetailPage;