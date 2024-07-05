"use client";
import React, { useState } from "react";
import {
  Accordion,
  Col,
  Container,
  Row,
  Tab,
  Tabs,
  Form,
} from "@/components/bootstrap/Bootstrap";
import { useForm } from "react-hook-form";
import "./contact.scss";
import { FAQ } from "@/app/api/FAQ";
import {
  FORM_DEFAULT_VALUE,
  ContactFormSteps,
} from "@/app/api/ContactFormSteps";
//core components
import RenderContent from "@/components/interWeave";
import StepWizard from "@/components/form/stepwizard";
import ContactInfoCard from "@/components/card/ContactInfoCard";
import ActionNavigate from "@/components/form/stepwizard/actionbtn";
import { Instagram, Mail, MapPin, PhoneCall } from "lucide-react";

export default function ContactUs() {
  const [currentStep, setCurrentStep] = useState(1);
  const formMethods = useForm(FORM_DEFAULT_VALUE);
  const FORM_LIST = ContactFormSteps(formMethods);

  return (
    <>
      <div className="contact_us">
        <Container fluid>
          <Row>
            <Col lg="12">
              <div className="contact_head">
                <h3>
                  Begin Your Rare <br />
                  Conversation
                </h3>
              </div>
            </Col>
            <Col lg="3">
              <div className="contact_desc">
                {/* <a className="btn btn-outline-green ">Send us message </a> */}
              </div>
            </Col>
            <Col lg="9">
              <Row>
                <Col lg="6">
                  <ContactInfoCard
                    list={["hello@rareclub.in"]}
                    type="mailto:hello@rareclub.in"
                    icon={<Mail height={36} width={36} strokeWidth={1} />}
                  />
                </Col>
                {/* <Col lg="6">
                  <ContactInfoCard
                    list={["(+91) 9876543210", "1800-123-4567"]}
                    type="tel:"
                    icon={<PhoneCall height={36} width={36} />}
                  />
                </Col> */}
                {/* <Col lg="6">
                  <ContactInfoCard
                    list={["21 Golden Square, Soho, London, W1F 9JN"]}
                    spacing
                    icon={<MapPin height={36} width={36} />}
                  />
                </Col> */}
                <Col lg="6">
                  <ContactInfoCard
                    list={["@rareclub.in"]}
                    type="https://www.instagram.com/rareclub.in"
                    icon={<Instagram height={36} width={36} strokeWidth={1} />}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="contact_form">
        <Container fluid>
          <div className="h-line"></div>
          <Row>
            <Col lg="4">
              <div className="caption">
                <h4>Contact Us</h4>
                <p>
                  Discover how our network can amplify your brand&apos;s
                  influence.
                </p>
              </div>
            </Col>
            <Col lg="8">
              {/* {currentStep < 6 ? (
                <Form>
                  <div className="formwrap">
                    <StepWizard list={FORM_LIST} currentStep={currentStep} />
                  </div>
                  <ActionNavigate
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                    totalLength={FORM_LIST.length}
                    formMethods={formMethods}
                  />
                </Form>
              ) : (
                <div className="d-flex justify-content-center align-items-center flex-column">
                  <p style={{ color: "#00ef8e" }}>
                    Form submitted successfully
                  </p>
                </div>
              )} */}
              <div className="d-flex justify-content-center gap-5 align-items-center h-100">
                <a
                  href="https://forms.gle/3SQdiYhoxz7Jrc2V9"
                  target="_blank"
                  className="btn-outline-green"
                >
                  Creator
                </a>
                <a
                  href="https://forms.gle/mpp6FCru4HmZgbeB7"
                  target="_blank"
                  className="btn-outline-green"
                >
                  Brand
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="faq">
        <Container>
          <Row className="justify-content-center">
            <Col lg="10">
              <div className="heading">
                <h1>
                  Got questions? <br />
                  We got answers!
                </h1>
                <p>
                  Looking to know more about us? You’ve come to the right place!
                  Whether you’re a <br />
                  brand or a content creator, discover how to get started, learn
                  how our platform works,
                  <br /> and find answers to frequently asked questions.
                </p>
              </div>
            </Col>
            <Col lg="10">
              <div className="all_faqs">
                <Tabs
                  id="fill-tab-example"
                  className="mb-3 justify-content-center"
                  variant="pills"
                  defaultValue="general"
                >
                  {FAQ.map((item, idx) => (
                    <Tab eventKey={item.id} title={item.title} key={item?.id}>
                      <Accordion defaultActiveKey={0}>
                        {item.question.map((qs, idx) => (
                          <Accordion.Item eventKey={idx} key={idx}>
                            <Accordion.Header>{qs.heading}</Accordion.Header>
                            <Accordion.Body>
                              <RenderContent desc={qs.desc} tagname="p" />
                            </Accordion.Body>
                          </Accordion.Item>
                        ))}
                      </Accordion>
                    </Tab>
                  ))}
                </Tabs>
                {/* <div className="viewmore mt-5 text-center">
                  <a className="btn btn-outline-grey">Load More</a>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
