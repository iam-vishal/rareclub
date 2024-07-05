"use client";
import "./about.scss";
//stock images
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Container,
  Row,
  Col,
  Stack,
  Button,
} from "@/components/bootstrap/Bootstrap";
import { BRANDS } from "@/app/api/Brands";
import { SwiperSlide } from "swiper/react";
import Slider from "@/components/slider";
import BrandCard from "@/components/card/BrandCard";
//images
import AboutSvg from "./about_us";
import EXPLOREBTN from "@/assets/img/explore.png";
import PLAYSTORE from "@/assets/img/playstore.png";
import APPSTORE from "@/assets/img/appstore.png";
import ARROW from "@/assets/img/svg/arrow.svg";
import MISSION1 from "@/assets/img/mission1.png";
import MISSION from "@/assets/img/mission_head.png";
import INFLUENCE from "@/assets/img/elevate_influence.png";
import BRANDING from "@/assets/img/branding.png";
import SUPPORT from "@/assets/img/creator_support.png";
import KOFINITY from "@/assets/img/svg/kofinity.svg";
import KOFLUENCE from "@/assets/img/svg/kofluence.svg";
import BRANDS_LEFT from "@/assets/img/svg/brands_title.svg";
import BRANDS_RIGHT from "@/assets/img/svg/brands_left_arrow.svg";
import Image from "next/image";
import { CircleGredient } from "@/assets/img/svg/RotateCircle";
import AnimatedTabSvg from "@/assets/img/svg/tabDesign";

const BackedCard = ({ icon, title }) => {
  return (
    <div className="backed_card">
      <div className="icon">
        <div className="img">
          <img src={icon?.src} />
        </div>
        <div className="title">{title}</div>
      </div>
      <div className="content">
        <p>
          Kofluence is a disruptive AI-powered Ad-Tech influencer platform that
          empowers both brands and influencers to capitalise on the value of
          their social influence. We firmly believe that with the right
          opportunities, individuals of all backgrounds can transform their
          social reach into a source of income. Our technology-driven
          marketplace seamlessly connects brands and social users, enabling them
          to discover and curate collaborations based on their preferences. With
          a robust community of over 600,000 creators collectively reaching over
          6 billion individuals, we stand as leaders in influencer marketing
          technology. Leveraging our extensive expertise, we have successfully
          delivered value across 30 different sectors.
        </p>
      </div>
    </div>
  );
};
export default function AboutUs() {
  const MissionCard = ({ title, icon }) => {
    return (
      <motion.div className="mission_card" whileHover={{ marginTop: "-8px" }}>
        <div className="boxed">
          <img
            src={icon.src}
            className="img-fluid opacity-50"
            style={{ height: "120px" }}
          />
          <div className="title">{title}</div>
        </div>
      </motion.div>
    );
  };
  const RenderBrands = () => {
    return BRANDS?.map((item, i) => (
      <SwiperSlide key={i + 1}>
        <BrandCard index={i} item={item} />
      </SwiperSlide>
    ));
  };
  const RenderDownloadStore = () => (
    <Stack direction="horizontal" className="justify-content-between advBtn">
      <div className="download_box">
        <Stack direction="horizontal" gap={3}>
          <div className="icon">
            <Image
              src={PLAYSTORE}
              width={40}
              height={40}
              alt="Download play store"
            />
          </div>
          <div className="content">
            <div className="subtitle">Download on the</div>
            <div className="title">Play Store</div>
          </div>
        </Stack>
      </div>
      <div className="download_box">
        <Stack direction="horizontal" gap={3}>
          <div className="icon">
            <Image
              src={APPSTORE}
              width={40}
              height={40}
              alt="Download play store"
            />
          </div>
          <div className="content">
            <div className="subtitle">Download on the</div>
            <div className="title">App Store</div>
          </div>
        </Stack>
      </div>
    </Stack>
  );
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 5]);
  const opacity = useTransform(scale, [1, 5], [1, 0]);
  return (
    <>
      <section>
        <div className="about_us postion-relative">
          <AboutSvg />
          <div className="heading">
            <motion.h1
              style={{
                opacity: opacity,
              }}
            >
              Where Influence
              <br />
              Meets Opportunity
            </motion.h1>
          </div>
        </div>
      </section>
      <div className="why_we">
        <Container>
          <Row className="justify-content-center">
            <Col lg="6">
              <div className="content">
                <h2 data-aos="fade-up" data-aos-duration="2100">
                  Why Rare Club?
                </h2>
                <p data-aos="fade-up" data-aos-duration="2300">
                  Rare is all about creating an organic connection between
                  creators and top-tier brands. We&apos;re here to weave a
                  seamless and carefully curated path to exclusive partnerships.
                  At the heart of our platform is a deep understanding of the
                  little details that make each interaction special. We&apos;re
                  committed to fostering engagements that are not just
                  beneficial but meaningful and impactful for everyone involved.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="backed_by">
        <Container fluid>
          <Row className="align-items-center">
            <Col lg="5">
              <div
                className="backed_box"
                data-aos="fade-right"
                data-aos-duration="2100"
              >
                <h4>Product By</h4>
                <p>
                  The Rare.club is built over powerful technology and analytics
                  to seamlessly provide a creator all the tools and resources
                  required to help them scale up their content effectively
                </p>
              </div>
            </Col>
            <Col lg="7">
              <Stack
                direction="horizontal"
                gap={2}
                data-aos="fade-left"
                data-aos-duration="2100"
              >
                <BackedCard icon={KOFLUENCE} title="Kofluence" />
                {/* <BackedCard icon={KOFINITY} title="Kofinity" /> */}
              </Stack>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="our_mission">
        <Container>
          <div className="heading">
            <h1>Our Mission</h1>
            <Button className="btn-icon">
              <img src={ARROW.src} />
            </Button>
            <img src={MISSION.src} className="img-fluid" />
          </div>
          <Row>
            <Col lg="4">
              <MissionCard title="Elevate Your Influence" icon={INFLUENCE} />
            </Col>
            <Col lg="4">
              <MissionCard title="Branding Revolutionised" icon={BRANDING} />
            </Col>
            <Col lg="4">
              <MissionCard title="Full Circle Creator Support" icon={SUPPORT} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="why_choose_us">
        <div className="entertainment-bg w-embed">
          <AnimatedTabSvg />
        </div>
        {/* <Container>
          <Row className="justify-content-center">
            <Col lg="10">
              <div className="fetured_wrap_boxed">
                <Row>
                  <Col lg="6">
                    <motion.div className="fetured_boxed">
                      <div className="brandtitle">For Brands</div>
                      <div className="desc">
                        Transforming the essence of collaboration into an art
                        form, Rare eradicates the inefficiencies plaguing
                        traditional influencer engagements.
                      </div>
                      <a className="btn btn-outline-green">Talk to us</a>
                    </motion.div>
                  </Col>
                  <Col lg="6">
                    <motion.div className="fetured_boxed">
                      <div className="brandtitle">For Creators</div>
                      <div className="desc">
                        At the heart of Rare is a commitment to transparency,
                        efficiency, and unmatched quality—redefining the
                        landscape of influencer and brand collaborations.
                      </div>
                      <RenderDownloadStore />
                    </motion.div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg="10">
              <div className="fetured_wrap_boxed mt-3 bottoms">
                <Row className="align-items-center">
                  <Col lg="7">
                    <div
                      className="fetured_boxed"
                      style={{ background: "#111111" }}
                    >
                      <div className="desc">
                        Rare’s revolutionary platform empowers restaurant owners
                        with clarity, control, and measurable impact, turning
                        every influencer partnership into an opportunity for
                        unprecedented growth.
                      </div>
                      <a
                        className="btn btn-outline-green"
                        href="mailto:hello@rareclub.in"
                      >
                        Write us to: hello@rareclub.in
                      </a>
                    </div>
                  </Col>
                  <Col lg="5">
                    <div className="circle_button">
                      <CircleGredient />
                      <div className="circle_image">
                        <Image
                          src={EXPLOREBTN}
                          width={120}
                          height={120}
                          alt="exploreicons"
                          className="rotate-circle"
                        />
                        <div className="circle_arrow">
                          <Image
                            src={ARROW.src}
                            width={35}
                            height={35}
                            alt="ARROW"
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container> */}
      </div>
      <div className="our_brands">
        <Container fluid>
          <Row className="align-items-center">
            <Col lg="2" className="pe-0">
              <img src={BRANDS_LEFT.src} className="img-fluid coupon" />
            </Col>
            <Col lg="9" className="px-0">
              <div className="all_brands">
                <Slider show={6} delay={1000}>
                  {RenderBrands()}
                </Slider>
              </div>
            </Col>
            <Col lg="1" className="text-end">
              <img src={BRANDS_RIGHT.src} className="img-fluid coupon" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
