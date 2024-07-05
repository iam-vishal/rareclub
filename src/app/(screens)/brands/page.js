"use client";
import Marquee from "react-fast-marquee";
import { Col, Container, Row } from "@/components/bootstrap/Bootstrap";
//core components
import HeroSection from "@/components/HeroSection";
import TeamCard from "@/components/card/TeamCards";
import TopBrands from "@/components/topbrands";
import DiscountCard from "@/components/card/DiscountCard";
import Banner from "@/components/banner";
//images stock
import { DISCOUNT } from "@/app/api/Discount";
import AnimatedTabSvg from "@/assets/img/svg/tabDesign";
import shuffleArray from "@/lib/shuffleArray";
import { INF_IMAGES } from "@/app/api/influencerImages";
export default function Brands() {
  const BRANDS = Array.from({ length: 3 }, (_, index) => index);
  const Team = Array.from({ length: 20 }, (_, index) => index);
  const BannerCaption = () => {
    return (
      <div className="collaborations_head whitetext">
        <h1>
          Dive into a pool of <br /> unparalleled creator talent
        </h1>
        <p>
          Join the exclusive ranks and <br /> collaborate with the best in the
          industry.
        </p>
      </div>
    );
  };
  return (
    <>
      <HeroSection
        title="Exclusive Access <br/> to Elite Influence "
        tagName="h1"
        paragraph="Forge impactful collaborations with top-tier influencers at <br/>the pinnacle of prestige and exclusivity."
      />
      <div className="join_waitlist" style={{ padding: "3em 0" }}>
        <Container fluid>
          <Row>
            <Col lg="12">
              <div className="all_team mt-0">
                <Marquee>
                  {shuffleArray(INF_IMAGES)?.map((item, i) => (
                    <TeamCard item={item} index={i} key={i + 1} />
                  ))}
                </Marquee>
                <Marquee direction="right">
                  {shuffleArray(INF_IMAGES)?.map((item, i) => (
                    <TeamCard item={item} index={i} key={i + 1} />
                  ))}
                </Marquee>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <TopBrands list={BRANDS} /> */}
      <div className="about_us">
        <Container fluid>
          <Row className="align-items-center">
            <Col lg="6">
              <div className="image">
                <img
                  src="https://assets-global.website-files.com/6534f0776a9176ae6b5071cd/654cc0a01850181bc1aa1a18_1-_1_-p-1080.webp"
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col lg="6">
              <div className="about_content">
                <h4 style={{ marginTop: "2rem" }}>About us</h4>
                <p>Elevating Brand Presence with Premier Partnerships</p>

                <div className="min_content_box">
                  <h4>Influencer Discovery</h4>
                  <p>Curate your influencer collaborations with precision.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="collaborations usersonly">
        <Container fluid>
          <Col lg="12">
            <div className="collaborations_boxed">
              <Banner>{BannerCaption()}</Banner>
            </div>
          </Col>
        </Container>
      </div>
      <div className="discount_section">
        <Container fluid>
          <Row>
            <Col lg="12">
              <div className="heading">
                <h1>Platform Offerings</h1>
              </div>
            </Col>
            {DISCOUNT.map((item) => (
              <DiscountCard key={item.id} item={item} />
            ))}
          </Row>
        </Container>
      </div>
      <div className="why_choose_us">
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
                        href="https://forms.gle/S3U25REFNwhPqpWM8"
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
