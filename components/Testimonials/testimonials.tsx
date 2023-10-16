"use client";
import Image from "next/image";
import styled from "styled-components";
import emily from "@/public/images/image-emily.jpg";
import thomas from "@/public/images/image-thomas.jpg";
import jennie from "@/public/images/image-jennie.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(255 253 249);
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
`;
const Title = styled.h1`
  font-size: 2rem;
  font-family: var(--fraunces-font);
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  font-weight: 700;
  color: rgb(169 170 173);
  margin-bottom: 2rem;
`;
const ClientSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Client = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ClientImage = styled.div`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  overflow: hidden;
  margin-top: 5rem;
  margin-bottom: 3rem;
`;

const ClientText = styled.p`
  font-size: 1.5rem;
  font-family: var(--barlow-font);
  width: 60%;
  text-align: center;
  margin-bottom: 6rem;
`;

const ClientName = styled.h2`
  font-size: 1.5rem;
  font-family: var(--fraunces-font);
  font-weight: 700;
  color: rgb(0 0 0);
  margin-bottom: 0.8rem;
`;
const ClientPosition = styled.p`
  font-size: 1rem;
  font-family: var(--barlow-font);
  color: rgb(169 170 173);
`;

export default function Testimonials() {
  return (
    <Container>
      <Title>CLIENT TESTIMONIALS</Title>
      <ClientSection>
        <Client>
          <ClientImage>
            <Image src={emily} alt="emily" width={80} />
          </ClientImage>
          <ClientText>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </ClientText>
          <ClientName>Emily R.</ClientName>
          <ClientPosition>Marketing Director</ClientPosition>
        </Client>
        <Client>
          <ClientImage>
            <Image src={thomas} alt="thomas" width={80} />
          </ClientImage>
          <ClientText>
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </ClientText>
          <ClientName>Thomas S.</ClientName>
          <ClientPosition>Chief Operating Officer</ClientPosition>
        </Client>
        <Client>
          <ClientImage>
            <Image src={jennie} alt="jennie" width={80} />
          </ClientImage>
          <ClientText>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </ClientText>
          <ClientName>Jennie F.</ClientName>
          <ClientPosition>Business Owner</ClientPosition>
        </Client>
      </ClientSection>
    </Container>
  );
}
