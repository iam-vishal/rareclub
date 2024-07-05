"use client";
import React from "react";
import { Col, Container, Row } from "@/components/bootstrap/Bootstrap";
import RenderContent from "../interWeave";
import HeroSectionSvg from "@/assets/img/svg/hero_section_svg";
export default function HeroSection({ showArrow, title, tagName, paragraph }) {
  return (
    <div className="hero_section">
      <Container>
        <Row className="justify-content-center">
          <Col lg="10">
            <div className="caption">
              {showArrow && (
                <HeroSectionSvg className="hero_left" align="left" />
              )}

              <RenderContent tagname={tagName} desc={title} />
              <RenderContent tagname="p" desc={paragraph} />
              {showArrow && (
                <HeroSectionSvg className="hero_right" align="right" />
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
