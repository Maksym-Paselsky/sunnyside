"use client";
import styled from "styled-components";
import Image from "next/image";
import desktopCone from "@/public/images/desktop/image-gallery-cone.jpg";
import desktopMilk from "@/public/images/desktop/image-gallery-milkbottles.jpg";
import desktopOrange from "@/public/images/desktop/image-gallery-orange.jpg";
import desktopSugar from "@/public/images/desktop/image-gallery-sugarcubes.jpg";
const FlexBox = styled.div`
  display: flex;
  width: 100%;
  height: 55vh;
  flex-direction: row;
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 25%;
  flex: 1;
`;
export default function Galery() {
  return (
    <FlexBox>
      <ImageWrapper>
        <Image src={desktopMilk} alt="milk" fill />
      </ImageWrapper>
      <ImageWrapper>
        <Image src={desktopOrange} alt="orange" fill />
      </ImageWrapper>
      <ImageWrapper>
        <Image src={desktopCone} alt={"cone"} fill />
      </ImageWrapper>
      <ImageWrapper>
        <Image src={desktopSugar} alt={"sugar"} fill />
      </ImageWrapper>
    </FlexBox>
  );
}
