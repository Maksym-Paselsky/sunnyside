"use client";
import Header from "@/components/Header/header";
import HeroImage from "@/components/HeroPage/heroPage";
import ImageTextSplit from "@/components/ImageTextSplit/imageTextSplit";
import styled from "styled-components";
import ServiceCard from "@/components/ServiceCard/serviceCard";
import graphicDesignImage from "@/public/images/desktop/image-graphic-design.jpg";
import photographyImage from "@/public/images/desktop/image-photography.jpg";
import Testimonials from "@/components/Testimonials/testimonials";
import Galery from "@/components/Gallery/galery";
import Footer from "@/components/Footer/footer";

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  background: red;
  width: 100%;
  height: 70vh;
`;
export default function Home() {
  return (
    <main>
      <Header></Header>
      <HeroImage></HeroImage>
      <ImageTextSplit></ImageTextSplit>
      <FlexBox>
        <ServiceCard
          image={graphicDesignImage}
          title={"Graphic Design"}
          bodyText={
            "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
          }
          textColor="rgb(36 86 77)"
        ></ServiceCard>
        <ServiceCard
          image={photographyImage}
          title={"Photography"}
          bodyText={
            "Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
          }
          textColor="rgb(31 82 107)"
        ></ServiceCard>
      </FlexBox>
      <Testimonials></Testimonials>
      <Galery></Galery>
      <Footer></Footer>
    </main>
  );
}
