import React from "react";
import styled from "styled-components";
import { colors, flexBarStyling } from "./constants";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { WhiteIcon } from "./Icon";

const SearchBar = styled.nav`
  ${flexBarStyling}
  background-color: ${colors.lightGrey};
  height: 3rem;
  box-shadow: -0.4rem 0 10px rgba(0, 0, 0, 1);
  position: ${({ sticky }) => (sticky ? "sticky" : "static")};
  top: 2.5rem;
`;

const SearchInput = styled.input.attrs(() => ({
  type: "text",
  placeholder: "Search for videos",
}))`
  width: 11rem;
  border: none;
  border-radius: 0.25rem 0 0 0.25rem;
  font-size: 1rem;
  padding-left: 0.75rem;
  height: 100%;
`;

export const SearchButton = styled.button`
  background-color: ${colors.red};
  width: 2.5rem;
  height: 100%;
  border-radius: 0 0.25rem 0.25rem 0;
  border: none;
  font-size: 1.125rem;
`;

const Search = ({ sticky }) => (
  <SearchBar sticky={sticky}>
    <SearchInput />
    <SearchButton>
      <WhiteIcon icon={faSearch} title="Search" />
    </SearchButton>
  </SearchBar>
);

export default Search;
