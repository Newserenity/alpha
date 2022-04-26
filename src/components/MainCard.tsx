import React from "react";
import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
} from "@mui/material";

const Padding = styled.div`
  padding-top: 70pt;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 300pt;
`;

const MainContents = styled.div`
  /* background-color: transparent; */

  background-image: url("../src/assets/imgs/Fluorescent-Gradient-Final.jpg");
  background-position: center;
  background-size: cover;

  border: solid 0.1em;
  border-color: #dedede;

  width: 600pt;
  height: 300pt;

  border-radius: 20pt;

  margin-top: 5pt;
`;

const MainContentsH1 = styled.h1`
  font-size: 30pt;

  margin-left: 30pt;
`;

const MainContentsP = styled.p`
  font-size: 13pt;

  margin-left: 30pt;
  margin-top: 10pt;
`;

const DeleteDiv = styled.div`
  width: 100%;
  height: 40pt;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const PostForm = styled.form`
  margin-left: 30pt;
  margin-top: 10pt;

  border-radius: 15pt;

  width: 400pt;
  height: 180pt;
`;

const PostFormDiv = styled.div`
  margin-top: 20pt;

  border-radius: 15pt;

  width: 400pt;
  height: 180pt;
`;

const InputDiv = styled.div`
  background-color: aliceblue;

  border-radius: 10pt;

  margin-top: 10pt;
  margin-bottom: 10pt;

  width: 300pt;
  height: 50pt;
`;

const PostInput = styled.input`
  background-color: transparent;
  border: none;

  padding-left: 10pt;

  width: 100%;
  height: 100%;

  &:focus {
    border: none;
    outline: none;
  }
`;

function MainCard() {
  return (
    <>
      <Padding></Padding>
      <Main>
        <MainContents>
          <DeleteDiv>
            <IconButton>
              <ClearIcon></ClearIcon>
            </IconButton>
          </DeleteDiv>
          <MainContentsH1>Create you first post!</MainContentsH1>
          <MainContentsP>
            Choosing “Team” lets you manage members.
          </MainContentsP>
          <PostForm>
            <PostFormDiv>
              <InputDiv>
                <PostInput placeholder="What do you think about it?"></PostInput>
              </InputDiv>
              <RadioGroup>
                <FormControlLabel
                  value="Public"
                  control={<Radio />}
                  label="Public"
                />
                <FormControlLabel
                  value="Private"
                  control={<Radio />}
                  label="Private"
                />
              </RadioGroup>
              <Button variant="contained">Submit</Button>
            </PostFormDiv>
          </PostForm>
        </MainContents>
      </Main>
    </>
  );
}

export default MainCard;
