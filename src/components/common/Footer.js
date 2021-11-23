import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  border-top: 1px solid #E6E6E6;
`;

const FooterText = styled.span`
  margin: 0 150px;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #6D6D6D;
  text-decoration: none;
`;

const LinkWrapper = styled.div`
  height: 24px;
  padding: ${props => props.text? "0 36px" : "0 36px 0 0"};
  font-size: 14px;
  line-height: 24px;
`;

const URL = styled.a`
  color: #7C7C7C;
  text-decoration: none;
  &:hover {
    font-weight: bold;
  }
`;

const FooterLink = (props) => {
  return (
    <LinkWrapper text={props.text}>
      <URL href={props.link} target="_blank" rel="noopener noreferrer">
        {props.text}
      </URL>
    </LinkWrapper>
  )
};

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>덕성 굿즈 플랫폼</FooterText>
      <FooterLink text="문의하기" link="https://business.kakao.com/info/kakaotalkchannel/"/>
      <FooterLink text="어플리케이션" link="https://play.google.com/store/apps"/>
      <FooterLink text="덕성여대 홈페이지" link="https://www.duksung.ac.kr"/>
    </FooterContainer>
  )
};

export default Footer;
