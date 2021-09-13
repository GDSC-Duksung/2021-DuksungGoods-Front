import React from "react";
import "../App.css";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styled from "styled-components";
import ItemList from '../components/itemList';

// https://www.npmjs.com/package/react-slideshow-image
const MainContainer=styled.div`
  justify-content: center;
  display:flex;
  
`;
const Container=styled.div`
  width: 70%;

`;
const CategoryText=styled.text`
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  
`;
const CategoryDiv=styled.div`
  padding: 40px 0px 40px 0px
`;


const mainPage = () => {

  const slideImages = [
    '../assets/event.PNG',
    '../assets/event.PNG',
    '../assets/event.PNG'
  ];
  
  return (
    <MainContainer>
      <Container>

        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>First Ad</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Second Ad</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Third Ad</span>
            </div>
          </div>
        </Slide>

{/* TODO: 슬라이드 추가하기 */}
        <div>
          <CategoryText>성공 임박 굿즈</CategoryText>
          <ItemList/>
        </div>
        <CategoryDiv>
          <CategoryText>인기 굿즈</CategoryText>
          <ItemList/>
        </CategoryDiv>
        <div>
          <CategoryText>신규 추천 굿즈</CategoryText>
          <ItemList/>
        </div>


      </Container>
    </MainContainer>
  
  )
};

export default mainPage;