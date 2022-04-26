import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 48pt;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: whitesmoke;
`;

const MenuBar = styled.div`
  margin: 10px;
`;

const LeftItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 10pt;

  width: 400pt;
  height: 100%;
  border-radius: 5pt;
`;

const SearchForm = styled.form`
  width: 70%;
  height: 30pt;

  background-color: #d3d3d37d;

  border-radius: 7pt;

  margin-left: 10%;
  margin-right: 5%;
  &:hover {
    background-color: lightgray;
    width: 100%;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;

  background-color: transparent;
  border: none;

  margin-left: 10pt;

  &:focus {
    border: none;
    outline: none;
  }
`;

const SearchSubmit = styled.button``;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

function Header() {
  const [login, setLogin] = useState(false);

  return (
    <>
      <Nav>
        <LeftItems>
          <TwitterIcon color="primary" sx={{ fontSize: 50 }}></TwitterIcon>
          <SearchForm>
            <SearchInput placeholder="Search..."></SearchInput>
          </SearchForm>
        </LeftItems>
        <MenuBar>
          <ButtonWrapper>
            <Box m={1}>
              <Button variant="text">Legal</Button>
            </Box>
            <Box m={1}>
              <Button variant="text">About</Button>
            </Box>
            <>
              {login ? (
                <Box m={1}>
                  <Button variant="text">My Page</Button>
                </Box>
              ) : (
                <Box m={1}>
                  <Button variant="text">Login</Button>
                </Box>
              )}
            </>
            <>
              {login ? (
                <Box m={1}>
                  <Button variant="contained">New +</Button>
                </Box>
              ) : (
                <Box m={1}>
                  <Button variant="contained">Get stared</Button>
                </Box>
              )}
            </>
          </ButtonWrapper>
        </MenuBar>
      </Nav>
    </>
  );
}

export default Header;
