import { StyledNextLink } from '@/components/common/UI/StyledUI';
import { LinkProps } from 'next/link';
import React, { PropsWithChildren } from 'react';
// mirror the props of next/link component
type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;
// component definition
const ScrollLink = ({ children, href, className }: ScrollLinkProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    //remove everything before the hash
    const targetId = e.currentTarget.href.replace(/.*\#/, '');
    const elem = document.getElementById(targetId);
    const header = document.getElementById('header');
    const offset = header ? header.clientHeight : 0;
    window.scrollTo({
      top: elem ? elem?.getBoundingClientRect().top - offset: 0,
      behavior: 'smooth',
    });
  };
  return (
    <StyledNextLink href={href} onClick={handleScroll} className={className}>
      {children}
    </StyledNextLink>
  );
};
export default ScrollLink;
