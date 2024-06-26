import ScrollLink from '@/components/common/UI/ScrollLink';
import { StyledNextLink } from '@/components/common/UI/StyledUI';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Header = () => {
  const router = useRouter();
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e: any) => {
    const header = document.getElementById('header');
    if (!header) return;
    const scrollTop = window.scrollY;
    scrollTop >= 100
      ? header.classList.add('is-sticky')
      : header.classList.remove('is-sticky');
  };
  return (
    <StyledHeader id="header">
      <HomeLink href="/">
        <Logo>Keita Sekihara</Logo>
      </HomeLink>
      <Nav>
        <NextLink href="/" className={router.pathname == '/' ? 'active' : ''}>
          Home
        </NextLink>
        <NextLink
          href="/works"
          className={router.pathname == '/works' ? 'active' : ''}
        >
          Works
        </NextLink>
        {/* <NavLink href="/works" className={router.pathname == "/works" ? "active" : ""}>Works</NavLink> */}
      </Nav>
      <CTAButton href="#contact">Let's talk</CTAButton>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 0 var(--space-side-header);
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  font-size: 1.8rem;
  z-index: 9999;
  transition: background-color 0.3s ease;
  &.is-sticky {
    background-color: ${({ theme: { color } }) => color.background};
  }
`;
// const Container = styled.div`
//   height: var(--header-height);
//   max-width: 120rem;
//   margin: 0 auto;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;
const HomeLink = styled(Link)``;
const Logo = styled.p`
  color: ${({ theme: { color } }) => color.primary};
  font-weight: bold;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme: { color } }) => color.text.strong};
`;
const NavLink = styled.a`
  display: inline-block;
  margin: 0 1.2rem;
`;
const NextLink = styled(Link)`
  display: inline-block;
  font-weight: bold;
  margin: 0 1.2rem;
  padding: 0.4rem 0;
  color: ${({ theme: { color }, className }) =>
    className === 'active' ? color.text.strong : color.text.normal};
  border-bottom: 0.1rem solid
    ${({ theme: { color }, className }) =>
      className === 'active' ? color.primary : 'transparent'};
`;
const CTAButton = styled(ScrollLink)`
  padding: 1.2rem;
  line-height: 1;
`;
