import React, { useState, useRef } from "react";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

//icon
import imageIcon from "../images/image.svg";
import defaultImge from "../images/defaultImage.png";

//import axios
import axios from "axios";
import { POST_ULR } from "../api/api";

//import redux

import { useSelector, useDispatch } from "react-redux";

import { loadHomeTweet } from "../actions/tweetAction";
const Container = styled.div`
  display: flex;
  width: 100%;
  background: white;
  min-height: 150px;
  -webkit-box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin: 1rem;
  max-width: 800px;
  @media screen and (max-width: 1000px){
      max-width: 90vw;
  }

  @media screen and (max-width: 600px){
      margin: 0;
  }
`;

const Margin = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: 1fr 10fr;
`;

const IconContainer = styled.div`
  width: 100px;
  padding-right: 1rem;
  img {
    width: 60px;
    height: 60px;
  }
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1000px){
    width: 60px;
    img {
    width: 50px;
    height: 50px;
  }
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledTextbox = styled(TextareaAutosize)`
  resize: none;
  border: none;
  font-size: 1.3rem;
  outline: none;
  width: 100%;
  @media screen and (max-width: 1000px){
  font-size: 1rem;
  }
`;

const IconBar = styled.div`
  margin: 0 10px;
  img {
    height: 20px;
    cursor: pointer;
  }
`;

const StyledBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid gray;
  padding-top: 0.5rem;
`;

const StyledImage = styled.div`
position: relative;
margin: 2rem 0rem;
margin-right: 1rem;
img{
  max-width: 100%;
  border-radius: 10px;

}
`;

const StyledButton = styled.button`
  cursor: pointer;
  background: #6216d0;
  padding: 1rem 2rem;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: normal;
  letter-spacing: 1px;
  margin: 0 10px;
  @media screen and (max-width: 1000px){
    padding: 0.5rem 1rem;
  }
`;
const ImageBar = styled.div`
position: absolute;
left: 1rem;
top: 1rem;
button{
  color: white;
  background: rgba(0,0,0,1);
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  display: flex;
  justify-content:center;
  align-items: center;
  transition: all 0.5s ease;
  font-weight: bold;
  :hover{
    background: rgba(30,30,30,1);
  }
}
`
const MakeTweet = () => {
  const [text, setText] = useState("");
  const { token, profile } = useSelector((state) => state.user);
  const [Image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState();
  const inputFile = useRef(null);

  const dispatch = useDispatch();

  const SubmitHandler = () => {
    if (text === "") return;

    //controllo tag e mentiones

    const tweet = {
      body: text,
      tags: [],
      date: new Date()
    };

    const formData = new FormData();
    console.log(profile._id);
    formData.append("userId", profile._id);
    formData.append("tweet", JSON.stringify(tweet));
    if (Image !== "") {
      formData.append("tweetImage", Image);
    }

    axios
      .post(POST_ULR, formData, { headers: { "auth-token": token } })
      .then((res) => {
        setText("");
        setPreviewImage(null);
        setImage("");
        dispatch(loadHomeTweet(profile._id, token));
      })
      .catch((err) => console.log(err.response));
  };
  return (
    <Container>
      <Margin>
        <IconContainer>
          <img src={defaultImge} alt="PI"></img>
        </IconContainer>

        <StyledContent>
          <StyledTextbox
            placeholder="Twitta qualcosa!!!"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />

          {previewImage && (
            <StyledImage>
              <ImageBar>
                <button onClick={() => { setPreviewImage(null); setImage("") }}>x</button>
              </ImageBar>
              <img src={previewImage} alt="possible image" />
            </StyledImage>
          )}
          <StyledBar>
            <IconBar>
              <input
                type="file"
                id="file"
                accept="image/*"
                ref={inputFile}
                style={{ display: "none" }}
                onChange={(e) => {
                  setImage(e.target.files[0]);
                  if (!e.target.files[0]) return
                  setPreviewImage(URL.createObjectURL(e.target.files[0]));
                }}
              />
              <img
                src={imageIcon}
                onClick={() => inputFile.current.click()}
                alt="imageIcon"
              />
            </IconBar>
            <StyledButton onClick={SubmitHandler}>Twitta</StyledButton>
          </StyledBar>
        </StyledContent>
      </Margin>
    </Container>
  );
};

export default MakeTweet;
