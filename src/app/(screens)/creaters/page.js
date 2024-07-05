"use client";
import "./creaters.scss";
import { SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Col, Container, Row, Stack } from "@/components/bootstrap/Bootstrap";
import { CONTENT_CENTRIC } from "@/app/api/ContentCentric";
//image
import Image from "next/image";
import ARROW from "@/assets/img/svg/arrow.svg";
import CHOOSETEAM from "@/assets/img/choose_us.png";
import IMG3 from "@/assets/influencer images/3.jpg";
import IMG8 from "@/assets/influencer images/8.jpg";
import IMG10 from "@/assets/influencer images/10.jpg";
import IPHONE from "@/assets/img/iphone.png";
//Core Components
import Slider from "@/components/slider";
import HeroSection from "@/components/HeroSection";
import TopBrands from "@/components/topbrands";
import Collaborator from "@/components/card/Collaborator";
import RenderContent from "@/components/interWeave";
import ContentCentric from "@/components/card/ContentCentric";
import AnimatedTabSvg from "@/assets/img/svg/tabDesign";
import Marquee from "react-fast-marquee";
import { BRANDS } from "@/app/api/Brands";
export default function Creaters() {
  const Choose = [
    {
      title: "Exclusive Collaborations",
      description:
        "Rare Club provides curated opportunities with top brands, ensuring that every collaboration is impactful and mutually beneficial.",
      image: IMG3,
    },
    {
      title: "Unique Rewards",
      description:
        "Influencers on our platform earn rewards tailored to their profile, enhancing their collaboration experience and adding value to their engagements.",
      image: IMG8,
    },
    {
      title: "Impactful Engagements",
      description:
        "Collaborate on high-value projects that resonate with your audience and create lasting impressions.",
      image: IMG10,
    },
  ];
  const Choose2 = [
    {
      title: "Impactful Engagements",
      description:
        "Collaborate on high-value projects that resonate with your audience and create lasting impressions.",
      image: IMG10,
    },
    {
      title: "Exclusive Collaborations",
      description:
        "Rare Club provides curated opportunities with top brands, ensuring that every collaboration is impactful and mutually beneficial.",
      image: IMG3,
    },
    {
      title: "Unique Rewards",
      description:
        "Influencers on our platform earn rewards tailored to their profile, enhancing their collaboration experience and adding value to their engagements.",
      image: IMG8,
    },
  ];
  const RenderChoose = () => {
    return Choose?.map((item, i) => (
      <SwiperSlide key={i + 1}>
        <motion.div
          className="choose_team_box"
          whileHover={{ marginTop: "-5px" }}
        >
          <div className="img">
            <img src={item.image?.src} alt="choose" className="img-fluid" />
          </div>
          <div className="choose_team_content">
            <Stack direction="horizontal" className="justify-content-between">
              <RenderContent tagname="h2" desc={item.title} />
              {/* <div className="icon">
                <Image
                  src={ARROW}
                  width={23}
                  height={23}
                  className="rotate180 ms-2"
                  alt="ARROW"
                />
              </div> */}
            </Stack>
          </div>
        </motion.div>
      </SwiperSlide>
    ));
  };
  const RenderText = () => {
    return Choose2?.map((item, i) => (
      <SwiperSlide key={i + 1}>
        <motion.div className="">
          <br />
          <h4>{item?.title}</h4>
          <p>{item?.description}</p>
        </motion.div>
      </SwiperSlide>
    ));
  };
  // const BRANDS = Array.from({ length: 3 }, (_, index) => index);
  const RenderTeam = () => {
    // const COLLAB = Array.from({ length: 12 }, (_, index) => index);
    return BRANDS?.map((item, i) => (
      <Collaborator item={item} index={i} key={i + 1} />
    ));
  };
  return (
    <>
      <HeroSection
        showArrow
        title={"Your Influence Now Your Currency"}
        tagName="h1"
        paragraph="Secure your place among the elite, unlocking doors<br/> to unparalleled collaborations."
      />
      <div className="why_choose_us creaters_choose">
        <div className="entertainment-bg w-embed">
          <AnimatedTabSvg />
        </div>
        <Container>
          <Row className="justify-content-center">
            <Col lg="10">
              <div className="boxed">
                <Row>
                  <Col lg="12">
                    <h1>What We Offer</h1>
                  </Col>
                  {/* <Col lg="4">
                    <div className="content">
                      <br />
                      <h4>Access Exclusive Offers</h4>
                      <p>
                        Experience a world where your creativity is not just
                        celebrated but rewarded with exclusive collaborations
                        and events.
                      </p>
                    </div>
                  </Col> */}
                  <Col lg="4">
                    <div className="content">
                      <Slider
                        show={1}
                        delay={4000}
                        spaceBetween={10}
                        mobile={1}
                      >
                        {RenderText()}
                      </Slider>
                    </div>
                  </Col>
                  <Col lg="8">
                    <div className="choose_team">
                      <Slider
                        show={2}
                        delay={4000}
                        spaceBetween={10}
                        mobile={2}
                      >
                        {RenderChoose()}
                      </Slider>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <TopBrands list={BRANDS} /> */}
      {/* <div className="content_centric">
        <Container fluid>
          <Row>
            <Col lg="4">
              <img src={IPHONE.src} className="img-fluid" alt="camera" />
            </Col>
            {CONTENT_CENTRIC.map((item, idx) => (
              <ContentCentric key={item.id} item={item} index={idx} />
            ))}
          </Row>
        </Container>
      </div> */}
      <div className="collaborate">
        <h1>
          Collaborate with top-tier brands
          <br /> on-the-go
        </h1>
        <Container fluid>
          <Row>
            <Col lg="12">
              <div className="all_collaborate">
                <Marquee>{RenderTeam()}</Marquee>
                <Marquee direction="right">{RenderTeam()}</Marquee>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="why_choose_us single_content">
        <div className="entertainment-bg w-embed">
          <AnimatedTabSvg />
        </div>
        <Container>
          <Row className="justify-content-center">
            <Col lg="10">
              <div className="boxed">
                <Row>
                  <Col lg="12">
                    <div className="duplicate">
                      <h1>
                        Join the exclusive <br /> waitlist
                      </h1>
                      <a
                        href="https://forms.gle/3SQdiYhoxz7Jrc2V9"
                        target="_blank"
                        className="btn-outline-green"
                      >
                        Join the waitlist now
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
