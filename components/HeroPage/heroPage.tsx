"use client";
import Image from "next/image";

import styled from "styled-components";

const RelativeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;
const Title = styled.h1`
  color: white;
  font-family: var(--fraunces-font), sans-serif;
  font-size: 4rem;
  letter-spacing: 1rem;
  word-spacing: 1rem;
`;
const TextContainer = styled.div`
  position: absolute;
  width: 100wh;
  top: 10%;
  left: 50%;
  white-space: nowrap;
  z-index: 1;
  transform: translate(-50%, 50%);
`;
const Arrow = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 47%;
  left: 50%;
  border-radius: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
`;

const Picture = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`;

export default function HeroImage() {
  return (
    <RelativeContainer>
      <TextContainer>
        <Title>WE ARE CREATIVES</Title>
      </TextContainer>
      <Arrow>
        <Image
          src="/icons/icon-arrow-down.svg"
          alt="arrow"
          width={50}
          height={180}
        />
      </Arrow>
      <Picture>
        <Image src="/images/desktop/image-header.jpg" alt="hero image" fill />
      </Picture>
    </RelativeContainer>
  );
}
