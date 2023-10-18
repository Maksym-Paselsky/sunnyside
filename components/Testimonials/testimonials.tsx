"use client";
import Image from "next/image";
import styled from "styled-components";
import emily from "@/public/images/image-emily.jpg";
import thomas from "@/public/images/image-thomas.jpg";
import jennie from "@/public/images/image-jennie.jpg";

const Container = styled.div`
  display: flex;
  height: 80vh;
  width: 100%;
  background: rgb(255 253 249);
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  margin-bottom: 2rem;
  color: rgb(169 170 173);
  font-family: var(--fraunces-font);
  font-size: 2rem;
  letter-spacing: 0.5rem;
  font-weight: 700;
  text-transform: uppercase;
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
  width: 80px;
  height: 80px;
  overflow: hidden;
  margin-top: 5rem;
  margin-bottom: 3rem;
  border-radius: 50%;
`;

const ClientText = styled.p`
  width: 60%;
  margin-bottom: 6rem;
  font-family: var(--barlow-font);
  font-size: 1.5rem;
  text-align: center;
`;

const ClientName = styled.h2`
  margin-bottom: 0.8rem;
  color: rgb(0 0 0);
  font-size: 1.5rem;
  font-family: var(--fraunces-font);
  font-weight: 700;
`;
const ClientPosition = styled.p`
  color: rgb(169 170 173);
  font-size: 1rem;
  font-family: var(--barlow-font);
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
