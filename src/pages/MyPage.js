import React, {useEffect} from "react";
import styled from "styled-components";
import {Profile} from "../components/MyPage/Profile";
import {GoodsCard} from "../components/MyPage/GoodsCard";

const TabContainer = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #E6E6E6;
`;

const TabText = styled.span`
  padding-bottom: 16px;
  font-weight: ${props => props.clicked ? 'bold' : 'normal'};
  font-size: 18px;
  line-height: 27px;
  color: ${props => props.clicked ? '#3D3D3D' : '#9E9E9E'};
  border-bottom: ${props => props.clicked ? '2px solid #3D3D3D' : null};
  cursor: pointer;
`;

const GoodsContainer = styled.div`
  margin-top: 24px;
`;

const MyPage = () => {
  const tabs = ['구매', '판매', '관심'];
  const [tab, setTab] = React.useState(0);

  const handleChange = (event, tab) => {
    setTab(tab)
  };

  useEffect(() => {
    // TODO: 굿즈 불러오기
  }, [tab])

  const tabList = tabs.map((t, index) => {
    return (
      <div style={{display:'inline-block', margin:'0 32px 0 0'}}>
        <TabText clicked={index===tab} onClick={e => handleChange(e, index)}>{t}</TabText>
      </div>
    )
  })

    return (
      <>
        <Profile/>
        <TabContainer>
          {tabList}
        </TabContainer>
        <GoodsContainer>
          <GoodsCard/>
        </GoodsContainer>
      </>
    )
}
export default MyPage;
