"use client";
import Image from "next/image";
import styles from "./heroImage.module.scss";
import styled from "styled-components";

const Title = styled.h1`
  font-family: var(--fraunces-font), sans-serif;
  color: white;
  font-size: 4rem;
  letter-spacing: 1rem;
  word-spacing: 1rem;
`;
const TextContainer = styled.div`
  position: absolute;
  top: 10%;
  white-space: nowrap;
  width: 100wh;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 1;
`;
const Arrow = styled.div`
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

export default function HeroImage() {
  return (
    <>
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
      <div className={styles.heroImage}>
        <Image src="/images/desktop/image-header.jpg" alt="hero image" fill />
      </div>
    </>
  );
}
