import React from 'react'
import styled, { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    background-color: #3b5d50;
    margin: 0px;
    padding:0px;
    font-family: "Inter", sans-serif;
    font-weight: 700;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 10px 20px;
`;

const Logo = styled.div`
  color: white;
`;

const NavItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: auto;
`;

const NavItem = styled.li`
  margin: 0 15px;
`;

const Navlink = styled.a`
  color: white;
  text-decoration: none;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 4px;
    background-color: yellow;
    left: 50%;
    bottom: -5px;
    transition: width 0.3s ease, left 0.3s ease;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  padding-left: 20px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Items = styled.h1`
  font-size: 15px;
  color: white;
  margin-right:90rem;
  width:20%;
`;

const Content = styled.p`
  color: white;
  margin-top: 20px;
  font-size: 16px;
  width: 37%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
`;

const StyledButton = styled.button`
  background-color: orange;
  font-size: 25px;
  border: none;
  border-radius: 10%;
  padding: 10px 20px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: darkorange;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  margin-top: -24rem;
  right: 5%;

`;



const StyledComponent = () => {
  return (
    <>
      <GlobalStyle />
      <Nav>
        <Logo>
          <h3>Furni.</h3>
        </Logo>
        <NavItems>
          <NavItem>
            <Navlink href="#">Home</Navlink>
          </NavItem>
          <NavItem>
            <Navlink href="#">Shop</Navlink>
          </NavItem>
          <NavItem>
            <Navlink href="#">About us</Navlink>
          </NavItem>
          <NavItem>
            <Navlink href="#">Services</Navlink>
          </NavItem>
          <NavItem>
            <Navlink href="#">Blog</Navlink>
          </NavItem>
          <NavItem>
            <Navlink href="#">Contact us</Navlink>
          </NavItem>
        </NavItems>
      </Nav>
      <HeroSection>
        <TitleWrapper>
          <Items>
            <h2>MODERN INTERIOR</h2>
            <h2>DESIGN STUDIO</h2>
          </Items>
        </TitleWrapper>
        <Content>
          Donec vitae odio quis nisi dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
        </Content>
        <ButtonWrapper>
          <StyledButton>Shop Now</StyledButton>
          <StyledButton>Explore</StyledButton>
        </ButtonWrapper>
      </HeroSection>
      <ImageWrapper>
        <img
          src="/Images/couch.png"
          alt="Couch"
          style={{position:'absolute'}}
        />
      </ImageWrapper>
    </>

  )
}

export default StyledComponent