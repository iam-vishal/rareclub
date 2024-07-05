import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Nav,
  Navbar,
  Row,
} from "@/components/bootstrap/Bootstrap";
import LOGO from "@/assets/img/logo.png";
import AnimatedTabSvg from "@/assets/img/svg/tabDesign";
import CLOSE from "@/assets/img/svg/close.svg";
import {
  FORM_DEFAULT_VALUE,
  ContactFormSteps,
} from "@/app/api/ContactFormSteps";
//core components
import StepWizard from "../form/stepwizard";
import ActionNavigate from "../form/stepwizard/actionbtn";

function Header() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  const [show, setShow] = useState(false);
  const handleModal = () => setShow(!show);
  const [currentStep, setCurrentStep] = useState(1);
  const formMethods = useForm(FORM_DEFAULT_VALUE);
  const FORM_LIST = ContactFormSteps(formMethods);
  const handleLinkClick = () => {
    setExpanded(false);
  };
  return (
    <>
      <header>
        <Navbar
          expand="lg"
          variant="dark"
          className="bg-body-transparent"
          fixed="top"
          expanded={expanded}
        >
          <Container fluid>
            <Navbar.Brand href="/" as={Link}>
              <img
                src={LOGO.src}
                alt="rare club"
                width={120}
                height={40}
                onClick={handleLinkClick}
              />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setExpanded(!expanded)}
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto align-items-center">
                <Nav.Link
                  href="/creaters"
                  passHref
                  active={pathname === "/creaters"}
                  as={Link}
                  onClick={handleLinkClick}
                >
                  Creators
                </Nav.Link>
                <Nav.Link
                  href="/brands"
                  passHref
                  active={pathname === "/brands"}
                  as={Link}
                  onClick={handleLinkClick}
                >
                  Brands
                </Nav.Link>
                <Nav.Link
                  href="/contact-us"
                  passHref
                  active={pathname === "/contact-us"}
                  as={Link}
                  onClick={handleLinkClick}
                >
                  Contact
                </Nav.Link>
                <Nav.Link
                  href="https://forms.gle/pyjc3hvp3mUGJbY3A"
                  target="_blank"
                  // onClick={handleModal}
                  as={Button}
                >
                  Join the waitlist
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Modal
        show={show}
        onHide={handleModal}
        size="xl"
        className="custom_modal_form"
      >
        <Button onClick={handleModal} type="button" className="btn-closed">
          <img src={CLOSE.src} />
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

export default Header;
