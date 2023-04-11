import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <HomeLink href="/">
          <Logo>Keita Sekihara</Logo>
        </HomeLink>
        <Nav>
          <NavLink href="#works">Works</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NextLink href="/blog">blog</NextLink>
        </Nav>
        <CTAButton href="#contact">Let's talk</CTAButton>
      </Container>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  height: 80px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
`;
const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const HomeLink = styled(Link)``;
const Logo = styled.h1`
  font-size: 20px;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NavLink = styled.a`
  display: inline-block;
  margin: 0 12px;
`;
const NextLink = styled(Link)`
  display: inline-block;
  margin: 0 12px;
`;
const CTAButton = styled.a`
  padding: 12px;
  background-color: gray;
  color: #fff;
`;
