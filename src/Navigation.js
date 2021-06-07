import React, { useState } from "react";
import styled from "styled-components";

import { useScrollContext } from "./ScrollContextProvider";
import SearchBar from "./SearchBar";

import { WhiteIcon } from "./Icon";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import socialIcons from "./assets/social-icons.png";
import { StyledLogo } from "./LogoHeader";

import { flexBarStyling } from "./constants";

const NavBar = styled.nav`
  ${flexBarStyling}
  position: sticky;
  top: 0;
  height: 2.5rem;
  background: linear-gradient(90deg, #111 0%, black 60%);
`;

const MenuButton = styled.button`
  background: transparent;
  border: none;
`;

const SocialIcons = styled.img.attrs({
  src: socialIcons,
})`
  height: 100%;
`;

// Really would also contain hrefs for each link - omitted for now
const MENU_ITEMS = [
  "Home",
  "GCN Show",
  "How To",
  "Maintenance",
  "Ask GCN",
  "Training",
  "Features",
  "Top 10s",
  "GCN Racing",
  "GCN Tech",
  "Presenters",
];

const MenuList = styled.ul`
  position: absolute;
  transform-origin: top;
  transform: scaleY(${({ isOpen }) => (isOpen ? "1" : "0")});
  overflow: none;
  list-style-type: none;
  padding: 0;
  margin: 0;
  left: 0;
  background: black;
  overflow: none;
  color: white;
  top: 2.125rem; /* TODO: use constants instead */
  width: 100%;
  transition: 0.125s;
`;

const MenuItem = styled.li`
  width: 100%;
  a {
    display: inline-block;
    width: 100%;
    padding: 1rem;
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  border-bottom: 1px solid white;
`;

const ExpandedMenu = ({ isOpen }) => {
  return (
    <MenuList isOpen={isOpen}>
      {MENU_ITEMS.map((item) => (
        <MenuItem key={item}>
          <a href="#">{item}</a>
        </MenuItem>
      ))}
    </MenuList>
  );
};

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchSticky, setSearchSticky] = useState(false);
  const { scrollY } = useScrollContext();

  const handleMenuClick = () => setMenuOpen((menuOpen) => !menuOpen);
  const handleSearchClick = () =>
    setSearchSticky((searchSticky) => !searchSticky);

  return (
    <>
      <NavBar onBlur={() => console.log("blur")}>
        <MenuButton onClick={handleMenuClick}>
          <WhiteIcon icon={faBars} size="lg" title="Menu" />
        </MenuButton>
        {scrollY < 90 ? (
          <SocialIcons />
        ) : (
          <>
            <StyledLogo />
            <MenuButton onClick={handleSearchClick}>
              <WhiteIcon icon={faSearch} title="Search" />
            </MenuButton>
          </>
        )}
        <ExpandedMenu isOpen={menuOpen} />
      </NavBar>
      <SearchBar sticky={searchSticky} />
    </>
  );
};

export default Navigation;
