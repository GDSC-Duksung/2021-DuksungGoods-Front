import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";

const ImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #D0D0D0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const InfoWrapper = styled.div`
  display: inline-block;
  text-align: left;
  margin-left: 20px;
`;

const Info = styled.p`
  margin: 0;
  display: ${props => props.inline ? 'inline-block' : 'block'};
  font-weight: ${props => props.weight || 'normal'};
  font-size: ${props => props.size}px;
  line-height: ${props => props.height}px;
  color: ${props => props.color};
`;


export const Profile = ({nickname, email}) => {
  return (
    <div style={{display:"flex", alignItems:"center", marginTop:"20px"}}>
      <ImageWrapper>
        <span style={{fontWeight:'bold', fontSize:'40px'}}>{nickname[0]}</span>
      </ImageWrapper>
      <InfoWrapper>
        <Info weight={'bold'} size={30} height={45} color={'#3D3D3D'} inline>{nickname}</Info>
        <Link to='/myinfo'>
          <img src={require('../../assets/icons/setting.svg').default} alt={'내 정보 관리'} style={{marginLeft: '8px'}}/>
        </Link>
        <Info size={13} height={22} color={'#6D6D6D'}>{email}</Info>
      </InfoWrapper>
    </div>
  )
}

Profile.defaultProps = {
  nickname: "덕우",
  email: "dukwoo@duksung.ac.kr"
}
