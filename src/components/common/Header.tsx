import { StyledButton } from '@/components/common/StyledUI';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

const Header = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <Container>
        <HomeLink href="/">
          <Logo>Keita Sekihara</Logo>
        </HomeLink>
        <Nav>
          <NextLink
            href="/works"
            className={router.pathname == '/works' ? 'active' : ''}
          >
            Works
          </NextLink>
          {/* <NavLink href="/works" className={router.pathname == "/works" ? "active" : ""}>Works</NavLink> */}
          <NextLink
            href="/blog"
            className={router.pathname == '/blog' ? 'active' : ''}
          >
            Blog
          </NextLink>
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
  height: var(--header-height);
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const HomeLink = styled(Link)``;
const Logo = styled.h1`
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
  margin: 0 12px;
`;
const NextLink = styled(Link)`
  display: inline-block;
  font-weight: bold;
  margin: 0 12px;
  color: ${({ theme: { color }, className }) =>
    className ? color.text.strong : color.text.normal};
`;
const CTAButton = styled(StyledButton)`
  padding: 12px;
`;
