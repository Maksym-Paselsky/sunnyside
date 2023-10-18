"use client";
import styled from "styled-components";
import logo from "../../public/logo.svg";
import Image from "next/image";
import facebookIcon from "../../public/icons/icon-facebook.svg";
import instagramIcon from "../../public/icons/icon-instagram.svg";
import pinterestIcon from "../../public/icons/icon-pinterest.svg";
import twitterIcon from "../../public/icons/icon-twitter.svg";
const Container = styled.div`
  display: flex;
  background: rgb(144 212 197);
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 100%;
  padding: 100px 0;
  height: 50vh;
`;
const Logo = styled.div`
  position: relative;
  margin: 50px;
`;
const LogoText = styled.h1`
  font-family: var(--gabrito-font), sans-serif;
  font-size: 3.5rem;
  font-weight: 900;
  color: rgb(43 117 100);
  text-decoration: none;
`;
const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
`;
const Link = styled.a`
  font-family: var(--barlow-font), sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  color: rgb(43 117 100);
  text-decoration: none;
  margin: 0 25px;
`;

const Icon = styled.div`
  margin: 0 25px;
`;
const SocialMedia = styled.div`
  display: flex;
  margin-top: 100px;
  width: max-content;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
`;
export default function Footer() {
  return (
    <Container>
      <Logo>
        <LogoText>sunnyside</LogoText>
      </Logo>
      <Links>
        <Link>About</Link>
        <Link>Services</Link>
        <Link>Projects</Link>
      </Links>

      <SocialMedia>
        <Icon>
          <Image src={facebookIcon} alt="facebook" width={25} />
        </Icon>
        <Icon>
          <Image src={instagramIcon} alt="instagram" width={25} />
        </Icon>
        <Icon>
          <Image src={twitterIcon} alt="twitter" width={25} />
        </Icon>
        <Icon>
          <Image src={pinterestIcon} alt="pinterest" width={25} />
        </Icon>
      </SocialMedia>
    </Container>
  );
}
