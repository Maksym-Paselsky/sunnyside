import styled from "styled-components";
import Image, { StaticImageData } from "next/image";

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: green;
`;

interface TextProps {
  textColor?: string;
}

const Title = styled.h1<TextProps>`
  position: absolute;
  bottom: 25%;
  font-family: var(--fraunces-font), sans-serif;
  color: ${(props) => (props.textColor ? props.textColor : "white")};
  font-weight: 900;
  font-size: 2.5rem;
  word-spacing: 1rem;
  margin-bottom: 2rem;
`;

const BodyText = styled.p<TextProps>`
  display: flex;
  position: absolute;
  bottom: 5%;
  font-family: var(--barlow-font), sans-serif;
  color: ${(props) => (props.textColor ? props.textColor : "white")};
  font-weight: 300;
  width: 50%;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 5rem;
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
