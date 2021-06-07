import React from "react";
import styled from "styled-components";

import { ReactComponent as GCNLogo } from "./assets/GCNLogoTxt.svg";
import { colors, flexBarStyling } from "./constants";

export const StyledLogo = styled(GCNLogo)`
  height: 1.4rem;
`;

const Header = styled.header`
  ${flexBarStyling}
  background-color: ${colors.red};
  height: 2.75rem;
`;

const HeaderButton = styled.a`
  padding: 0.35rem 0.25rem;
  border-radius: 0.25rem;
  background-color: #fff;
  color: #111;
  margin: 0 0.125rem;
  &:last-of-type {
    margin-right: 0;
  }
  font-size: 0.8rem;
  font-weight: bold;
  text-decoration: none;
`;

const LogoHeader = () => (
  <Header>
    <StyledLogo />
    <div>
      <HeaderButton href="#">Events</HeaderButton>
      <HeaderButton href="#">Club</HeaderButton>
      <HeaderButton href="#">Shop</HeaderButton>
      <HeaderButton href="#">YouTube</HeaderButton>
    </div>
  </Header>
);

export default LogoHeader;
