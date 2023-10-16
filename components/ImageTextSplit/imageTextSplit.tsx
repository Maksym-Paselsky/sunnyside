"use client";
import styled from "styled-components";
import Image from "next/image";
import transformPicture from "@/public/images/desktop/image-transform.jpg";
import standOutPicture from "@/public/images/desktop/image-stand-out.jpg";

const Container = styled.div`
  display: flex;
  width: 100%;
  background: red;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 75vh;
`;
const TextContainer = styled.div`
  display: flex;
  background-color: rgb(255 251 249);
  flex-direction: column;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const ImageContainer = styled.div`
  display: flex;
  width: 50%;
  position: relative;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const TextZone = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 10rem 4rem 2rem;
  width: 80%;
  align-items: left;
`;

const Title = styled.h1`
  font-family: var(--fraunces-font), sans-serif;
  color: rgb(35 48 62);
  font-weight: 900;
  font-size: 5rem;
  word-spacing: 1rem;
  margin-bottom: 2rem;
`;
const BodyText = styled.p`
  font-family: var(--barlow-font), sans-serif;
  color: rgb(122 117 130);
  font-weight: 300;
  width: 100%;
  font-size: 2rem;
  margin-bottom: 5rem;
`;
interface ButtonProps {
  bgColor?: string;
}

const Button = styled.button<ButtonProps>`
  position: relative;
  font-family: var(--fraunces-font), sans-serif;
  font-weight: 900;
  font-size: 1.5rem;
  width: max-content;
  background-color: transparent;
  border: none;
  text-align: left;
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    display: inline-block;
    bottom: 0;
    left: -5px;
    width: 110%;
    height: 9px;
    z-index: -1;
    border-radius: 5px;
    background: ${(props) => props.bgColor || "rgb(255 245 183)"};
  }
`;

export default function ImageTextSplit() {
  return (
    <>
      <Container>
        <TextContainer>
          <TextZone>
            <Title>Transform your brand</Title>
            <BodyText>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </BodyText>
            <Button bgColor="rgb(255 245 183)">LEARN MORE</Button>
          </TextZone>
        </TextContainer>
        <ImageContainer>
          <Image src={transformPicture} alt="egg" fill />
        </ImageContainer>
      </Container>
      <Container>
        <ImageContainer>
          <Image src={standOutPicture} alt="standout" fill />
        </ImageContainer>
        <TextContainer>
          <TextZone>
            <Title>Stand out to the right audience</Title>
            <BodyText>
              Using a collaborative tormula or designers, researchers,
              photographers, videographers, and copywriters, well bulld and
              extend your brand in digital places.
            </BodyText>
            <Button bgColor="rgb(255 218 212)">LEARN MORE</Button>
          </TextZone>
        </TextContainer>
      </Container>
    </>
  );
}
