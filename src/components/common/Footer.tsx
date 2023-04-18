import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return <StyledFooter>
    <small>&copy;2023 Keita Sekihara</small>
  </StyledFooter>;
};

export default Footer;

const StyledFooter = styled.footer`
  color: ${({ theme: { color } }) => color.text};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
