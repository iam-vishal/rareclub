"use client";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import "@/assets/scss/home.scss";
import CLOSE from "@/assets/img/svg/close.svg";
import {
  Col,
  Container,
  Row,
  Stack,
  Button,
  Modal,
  Form,
} from "@/components/bootstrap/Bootstrap";
import { motion } from "framer-motion";
import { BRANDS } from "@/app/api/Brands";
import { CONTENT_CENTRIC } from "@/app/api/ContentCentric";
//images stock

import { Circle } from "@/assets/img/svg/RotateCircle";
// import TABSVG from "@/assets/img/svg/tabDesign.svg";
import ARROW from "@/assets/img/svg/arrow.svg";
import CIRCLE_NAVIGATE from "@/assets/img/svg/circle_navigation.svg";
import ZOMATO from "@/assets/img/svg/zomato.svg";
import TEAM from "@/assets/img/teams/2.png";
import EXPLOREBTN from "@/assets/img/explore.png";
import BARCODE from "@/assets/img/scanner.png";
import RARECLUB from "@/assets/img/rareclub.png";
import RADIAL from "@/assets/img/circle/radial.svg";
import HAND from "@/assets/img/hand.png";
import BRANDS_LEFT from "@/assets/img/svg/brands_title.svg";
import BRANDS_RIGHT from "@/assets/img/svg/brands_left_arrow.svg";
import IPHONE from "@/assets/img/iphone.png";
//core Components
import ContentCentric from "@/components/card/ContentCentric";
import TeamCard from "@/components/card/TeamCards";
import BrandCard from "@/components/card/BrandCard";
import AnimatedTabSvg from "@/assets/img/svg/tabDesign";
import { useParallax } from "react-scroll-parallax";
import Banner from "@/components/banner";
import Slider from "@/components/slider";
import { useState } from "react";
import {
  FORM_DEFAULT_VALUE,
  ContactFormSteps,
} from "@/app/api/ContactFormSteps";

//core components
import StepWizard from "@/components/form/stepwizard";
import ActionNavigate from "@/components/form/stepwizard/actionbtn";
import { useForm } from "react-hook-form";
import { INF_IMAGES } from "./api/influencerImages";
import shuffleArray from "@/lib/shuffleArray";
import { CalendarCheck, Hotel, LocateIcon, Plane, Shirt } from "lucide-react";

export default function Home() {
  const [show, setShow] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const handleModal = () => setShow(!show);
  const formMethods = useForm(FORM_DEFAULT_VALUE);
  const FORM_LIST = ContactFormSteps(formMethods);
  const Team = Array.from({ length: 25 }, (_, index) => index);
  const BannerCaptionVariant = {
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
    initial: { opacity: 0, y: -30 },
  };
  const BannerCaption = () => {
    return (
      <div className="rare_banner_content">
        <motion.div
          variants={BannerCaptionVariant}
          whileInView="animate"
          initial="initial"
          className="rare_banner_subtitle"
        >
          <span className="animateColor"></span>
          <span className="subt">A marketplace for creators and brands</span>
        </motion.div>
        <motion.div
          variants={BannerCaptionVariant}
          whileInView="animate"
          initial="initial"
          className="rare_banner_title"
        >
          Where Influence
          <br /> Meets Opportunity
        </motion.div>
        <div className="rare_banner_icon">
          <Image src={ARROW} width={100} height={55} alt="ARROW" />
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="rare_banner">
        <div className="rare_banner_wrap">
          <div className="rare_banner_circle">
            <Banner>
              <Container fluid>{BannerCaption()}</Container>
            </Banner>
          </div>
        </div>
      </div>
      <div className="why_choose_us newBg">
        <div className="entertainment-bg w-embed">
          <AnimatedTabSvg />
        </div>
        <Container>
          <Row className="justify-content-center">
            <Col lg="8">
              <div className="boxed">
                <Row>
                  <Col lg="12">
                    <div className="duplicate">
                      <h1>Who We Are</h1>
                      <p>
                        At Rare Club, our mission is to connect top-tier
                        creators with exclusive brands for curated, impactful
                        collaborations. We strive to create meaningful
                        engagements that benefit both creators and brands,
                        fostering a community where unique opportunities and
                        rewards are the norm.
                      </p>
                      <a href="/about-us" className="btn-outline-green">
                        Learn More
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="exclusive_offers">
        <Container fluid>
          <Row className="align-items-center">
            <Col lg="4">
              <div className="exclusive_left_content">
                <Circle style={{ width: 700, height: 700 }} reverse={false} />

                <div className="contents">
                  <h3 data-aos="zoom-in">
                    Privileges Reserved for the Distinguished
                  </h3>
                </div>
                <div className="circle_button">
                  <motion.div
                    className="circle_image"
                    whileInView={{
                      opacity: 1,
                      left: "6em",
                      transition: { duration: 0.8 },
                    }}
                    initial={{ opacity: 0, left: 0 }}
                  >
                    <Image
                      src={EXPLOREBTN.src}
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
                  </motion.div>
                </div>
              </div>
            </Col>
            <Col lg="8">
              <div className="exclusive_right_content">
                <Stack direction="horizontal">
                  <div className="boxed" data-aos="fade-up">
                    <Stack
                      direction="vertical"
                      className="align-items-center"
                      gap={3}
                    >
                      <div className="overflow-hidden">
                        <Image
                          src={RARECLUB.src}
                          width={10}
                          height={200}
                          animate={{ y: "-100%" }}
                          transition={{
                            duration: 3, // Adjust the duration as needed
                            repeat: Infinity, // Infinite loop
                            repeatType: "loop", // Reverse animation direction when repeating
                          }}
                          alt="text"
                          style={{ height: 200 }}
                          className="animateUp"
                        />
                      </div>
                      <div className="barcode">
                        <Image
                          src={BARCODE.src}
                          width={40}
                          height={100}
                          alt="barcode"
                        />
                      </div>
                    </Stack>
                  </div>
                  <div className="boxed breif_content" data-aos="fade-left">
                    <Slider show={1} spaceBetween={20} delay={2500} mobile={1}>
                      <SwiperSlide>
                        <div className="d-flex justify-content-between pe-md-4">
                          <h2 data-aos="fade-up" data-aos-duration="2300">
                            Travel Collaborations
                          </h2>
                          <Plane
                            data-aos="fade-up"
                            data-aos-duration="2300"
                            className="opacity-25"
                            size={64}
                            strokeWidth={1}
                          />
                        </div>

                        <p data-aos="fade-up" data-aos-duration="2300">
                          Rare Club organises multiple international trips every
                          month. We take care of everything you will need to be
                          on the trip while you engage in exclusive brand
                          collaborations.
                        </p>
                        {/* <a href="#!" className="btn-outline-green">
                          Discover More
                        </a> */}
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="d-flex justify-content-between pe-md-4">
                          <h2 data-aos="fade-up" data-aos-duration="2300">
                            Hospitality Collaborations
                          </h2>
                          <Hotel
                            data-aos="fade-up"
                            data-aos-duration="2300"
                            className="opacity-25"
                            size={64}
                            strokeWidth={1}
                          />
                        </div>
                        <p data-aos="fade-up" data-aos-duration="2300">
                          Enjoy seamless experiences at partner restaurants and
                          clubs with barter collaborations. Our unique
                          coin-based system allows creators to earn and redeem
                          coins for financial rewards, enhancing their
                          collaboration opportunities.
                        </p>
                        {/* <a href="#!" className="btn-outline-green">
                          Discover More
                        </a> */}
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="d-flex justify-content-between pe-md-4">
                          <h2 data-aos="fade-up" data-aos-duration="2300">
                            Events & Experiences
                          </h2>
                          <CalendarCheck
                            data-aos="fade-up"
                            data-aos-duration="2300"
                            className="opacity-25"
                            size={64}
                            strokeWidth={1}
                          />
                        </div>
                        <p data-aos="fade-up" data-aos-duration="2300">
                          As a Rare Club member, get first access to the best
                          live experiences in your city. Use your influence to
                          gain exclusive access and enjoy the finest experiences
                          available.
                        </p>
                        {/* <a href="#!" className="btn-outline-green">
                          Discover More
                        </a> */}
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="d-flex justify-content-between pe-md-4">
                          <h2 data-aos="fade-up" data-aos-duration="2300">
                            Fashion & Lifestyle
                          </h2>
                          <Shirt
                            data-aos="fade-up"
                            data-aos-duration="2300"
                            className="opacity-25"
                            size={64}
                            strokeWidth={1}
                          />
                        </div>
                        <p data-aos="fade-up" data-aos-duration="2300">
                          Rare Club is built around the creator lifestyle,
                          providing access to top brand collaborations in the
                          fashion and lifestyle sectors. Enjoy partnerships that
                          align with your personal brand and resonate with your
                          audience.
                        </p>
                        {/* <a href="#!" className="btn-outline-green">
                          Discover More
                        </a> */}
                      </SwiperSlide>
                    </Slider>
                  </div>
                </Stack>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="collaborations">
        <Container fluid>
          <Col lg="12">
            <div className="collaborations_boxed">
              <div className="crust">
                <Circle style={{ width: 1200, height: 1200 }} reverse={false} />
                <div className="btn btnpurple mainbtn">Makeup</div>
                <div className="outer">
                  <Circle style={{ width: 950, height: 950 }} reverse={true} />
                  <div className="btn btn1 btngreen">Experiences</div>
                  <div className="btn btn2 btnyellow">Events</div>
                  <div className="inner">
                    <Circle
                      style={{ width: 650, height: 650 }}
                      reverse={false}
                    />
                    <div className="btn btnyellow">Hospitality</div>
                    <div className="btn btngreen">Lifestyle</div>
                    <div className="core">
                      <Circle
                        style={{ width: 350, height: 350 }}
                        reverse={true}
                      />
                      <div className="collaborations_head">
                        <h1>Collaborations that fits your niche</h1>
                      </div>
                      <div className="btn btnred">Travel</div>
                      {/* <div className="btn btnpurple">Food</div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Container>
      </div>
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
        <Image
          src={RADIAL}
          width={600}
          height={600}
          alt="radial"
          className="radial"
        />
      </div> */}
      {/* <div className="featured_content">
        <Container fluid>
          <Row>
            <Col lg="12">
              <div className="content">
                <Marquee>
                  <p>
                    1 Million+ Top Brands 1 Million+ Top Brands 1 Million+ Top
                    Brands
                  </p>
                </Marquee>
                <Marquee direction="right">
                  <p>5000+ Campaigns 5000+ Campaigns 5000+ Campaigns</p>
                </Marquee>
                <Marquee>
                  <p>150000+ Unique Collab 150000+ Unique Collab</p>
                </Marquee>
                <img src={HAND.src} alt="hand" className="img-fluid hand" />
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}
      <div className="join_waitlist">
        <Container fluid>
          <Row>
            <Col lg="12">
              <div className="heading" data-aos="fade-up">
                <h1>
                  Join the exclusive <br />
                  waitlist
                </h1>
                <a
                  className="btn btn-outline-green"
                  // onClick={handleModal}
                >
                  Join creator waitlist
                </a>
                <a
                  className="btn btn-outline-green ms-4"
                  // onClick={handleModal}
                >
                  Join brand waitlist
                </a>
              </div>
              <div className="all_team">
                <Marquee>
                  {shuffleArray(INF_IMAGES)?.map((item, i) => (
                    <TeamCard item={item} index={i} key={item.id} />
                  ))}
                </Marquee>
                <Marquee direction="right">
                  {shuffleArray(INF_IMAGES)?.map((item, i) => (
                    <TeamCard item={item} index={i} key={item.id} />
                  ))}
                </Marquee>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="our_brands" data-aos="fade-up" data-aos-duration="1500">
        <Container fluid>
          <Row className="align-items-center">
            <Col className="pe-0 col-lg-2">
              <Image
                src={BRANDS_LEFT.src}
                width={400}
                height={400}
                className="img-fluid coupon "
              />
            </Col>
            <Col className="px-0 col-lg-9">
              <div className="all_brands">
                <Marquee>
                  {BRANDS?.map((item, i) => (
                    <BrandCard index={i} item={item} key={i + 1} />
                  ))}
                </Marquee>
              </div>
            </Col>
            <Col className="text-end col-lg-1">
              <Image
                src={BRANDS_RIGHT.src}
                width={400}
                height={400}
                className="img-fluid coupon"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Modal
        show={show}
        onHide={handleModal}
        size="xl"
        className="custom_modal_form"
      >
        <Button onClick={handleModal} type="button" className="btn-closed">
          <Image width={36} height={36} src={CLOSE.src} />
        </Button>
        <Modal.Body>
          <div className="custom_form">
            <AnimatedTabSvg />
            <Row className="justify-content-center">
              <Col lg="8">
                <div className="form_wrap">
                  <h2>
                    Join the exclusive <br /> creator waitlist
                  </h2>
                  <p>
                    We&apos;re here to help you access more brands, grow your
                    <br />
                    audience and support you in your creative journey
                  </p>
                  {currentStep < 6 ? (
                    <Form>
                      <div className="formwrap">
                        <StepWizard
                          list={FORM_LIST}
                          currentStep={currentStep}
                        />
                      </div>
                      <ActionNavigate
                        currentStep={currentStep}
                        setCurrentStep={setCurrentStep}
                        totalLength={FORM_LIST.length}
                        formMethods={formMethods}
                      />
                    </Form>
                  ) : (
                    <Form>
                      <h2>Congratulations</h2>
                      <p style={{ color: "#00ef8e" }}>
                        Successfully joined waitlist
                      </p>
                    </Form>
                  )}
                </div>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
