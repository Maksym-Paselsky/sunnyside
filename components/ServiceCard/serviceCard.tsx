import styled from "styled-components";
import Image, { StaticImageData } from "next/image";

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background: green;
  justify-content: center;
  align-items: center;
`;

interface TextProps {
  textColor?: string;
}

const Title = styled.h1<TextProps>`
  position: absolute;
  margin-bottom: 2rem;
  bottom: 25%;
  color: ${(props) => (props.textColor ? props.textColor : "white")};
  font-family: var(--fraunces-font), sans-serif;
  font-weight: 900;
  font-size: 2.5rem;
  word-spacing: 1rem;
`;

const BodyText = styled.p<TextProps>`
  position: absolute;
  display: flex;
  width: 50%;
  margin-bottom: 5rem;
  bottom: 5%;
  color: ${(props) => (props.textColor ? props.textColor : "white")};
  font-weight: 300;
  font-family: var(--barlow-font), sans-serif;
  text-align: center;
  font-size: 1.5rem;
`;

interface Props {
  image: StaticImageData;
  title: string;
  bodyText: string;
  textColor?: string;
}

export default function ServiceCard({
  image,
  title,
  bodyText,
  textColor,
}: Props) {
  return (
    <Container>
      <Image src={image} alt="image" fill />

      <Title textColor={textColor}>{title}</Title>
      <BodyText textColor={textColor}>{bodyText}</BodyText>
    </Container>
  );
}
