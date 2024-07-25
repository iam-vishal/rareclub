"use client";
import React from "react";
import Image from "next/image";
import {
  Container,
  Row,
  Col,
  Button,
  Stack,
} from "@/components/bootstrap/Bootstrap";

import Link from "next/link";
//image
import ARROW from "@/assets/img/svg/arrow.svg";
import LOGO from "@/assets/img/logo.png";
import BARCODE from "@/assets/img/svg/footer-barcode.svg";
import FOOTERHR from "@/assets/img/svg/footer_line.svg";
import "./footer.scss";
import { Instagram, Mail, PhoneCall } from "lucide-react";
const Footer = (props) => {
  const footerLink = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Who we are",
      link: "/about-us",
    },
    // {
    //   name: "Meet the team",
    //   link: "/team",
    // },
    {
      name: "Contact us",
      link: "/contact-us",
    },
    // {
    //   name: "Case Studies",
    //   link: "/",
    // },
  ];
  const isBrowser = () => typeof window !== "undefined";

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className="footer">
      <Container fluid>
        <Row>
          <Col lg="5" className="pe-0">
            <div className="left_content">
              <div className="brand">
                <img src={LOGO.src} alt="rare club" width={160} height={60} />
                <span>by Kofluence</span>
              </div>
              <div className="useful_media">
                <div className="media">
                  <div className="icon">
                    <Mail strokeWidth={1} />
                  </div>
                  <div className="content">
                    <a href="mailto:hello@rareclub.in" target="_blank">
                      hello@rareclub.in
                    </a>
                  </div>
                </div>
                {/* <div className="media">
                  <div className="icon">
                  <PhoneCall />
                  </div>
                  <div className="content">(+91) 123-456-7890</div>
                </div> */}
                <div className="media">
                  <div className="icon">
                    <Instagram strokeWidth={1} />
                  </div>
                  <div className="content">
                    <a
                      href="https://www.instagram.com/rareclub.in"
                      target="_blank"
                    >
                      @rareclub.in
                    </a>
                  </div>
                </div>
              </div>
              {/* <img src={BARCODE.src} className="img-fluid" alt="barcode" /> */}
            </div>
          </Col>
          <Col lg="7" className="ps-0">
            <div className="right_content">
              <div className="head">
                <div className="icon">
                  <a href="#!">
                    <Image src={ARROW} width={100} height={55} alt="ARROW" />
                  </a>
                </div>
                <div className="title">Navigate</div>
              </div>
              <div className="useful_link">
                {footerLink?.map((item, idx) => (
                  <Link href={item.link} key={idx + 1}>
                    <div className="item_link">
                      <div className="content">{item.name}</div>
                      <div className="icon">
                        <Image
                          src={ARROW}
                          width={100}
                          height={55}
                          alt="ARROW"
                        />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Col>
          <Col lg="12">
            <img src={FOOTERHR.src} className="img-fluid" alt="ARROW" />
            <div className="copyright">
              <br />
              <Row className="align-items-center">
                <Col lg="9">
                  <div className="d-flex flex-column flex-md-row align-items-center gap-4">
                    <p className="mb-0 text-muted">
                      Copyright - Rare Club Inc. 2024
                    </p>
                    <Link
                      href="/privacy-policy"
                      className="text-muted d-md-block"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href="/terms-condition"
                      className="text-muted d-md-block"
                    >
                      Terms and conditions
                    </Link>
                  </div>
                </Col>
                <Col lg="3" className="text-end">
                  <Button
                    variant="ghost"
                    className="text-muted"
                    onClick={scrollToTop}
                  >
                    back to top{" "}
                    <img
                      src={ARROW.src}
                      width={23}
                      height={23}
                      className="rotate180 ms-2"
                      alt="ARROW"
                    />
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
