import React from 'react';
import styled from "styled-components";
import image from '../assets/dscup.PNG';
import Slider from "react-slick";
// const Container=styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;
// const LoginForm=styled.div`
//     display: flex;
//     text-align: center;
//     width: 400px;
//     margin-top: 100px;
//     flex-direction: column;
// `;
const StyledDiv=styled.div`
    padding: 10px;
    flex-direction: row;

`;
const GoodsDiv=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

// TODO: 슬라이드 적용하기

const ItemList=()=>{

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
      };

     //  const titles=['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth'];
      const titles=['First'];
    const itemlists = titles.map(
        
        (title, index)=>
        
            <GoodsDiv key={index}>
               <img src={image} alt="goods" width="190" height="140"/>
               <text>{title}</text>
            </GoodsDiv>
        );

    return(
         <StyledDiv>
            <Slider {...settings}>{itemlists}</Slider>
         </StyledDiv> 
    ); 

};
export default ItemList;