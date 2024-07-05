"use client";
import {
  Col,
  Container,
  Row,
  Tab,
  Nav,
} from "@/components/bootstrap/Bootstrap";
import "./team.scss";
import Image from "next/image";
import ARROW from "@/assets/img/svg/arrow.svg";
import { ALL_TEAMS } from "@/app/api/Teams";
import { useState } from "react";
import { MemberCard } from "@/components/card/MemberCard";
export default function ContactUs() {
  const [type, setType] = useState("cofounders");
  const [index, setIndex] = useState(0);
  const Department = ALL_TEAMS;
  const Member = ALL_TEAMS.find((member) => member.type === type).team;
  return (
    <>
      <div className="our_team">
        <Container fluid>
          <Row>
            <Col lg="12">
              <h1>
                Meet the Team Behind Will <br />
                Support Your Journey
              </h1>
            </Col>
            <Col lg="12">
              <div className="team_boxed">
                <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
                  <Row>
                    <Col sm={3}>
                      <Nav variant="pills" className="flex-column">
                        {Department.map((item, idx) => (
                          <Nav.Item key={item.id}>
                            <Nav.Link
                              eventKey={idx}
                              onClick={() => {
                                setType(item.type);
                                setIndex(idx);
                              }}
                            >
                              <div className="department_box">
                                <div className="title">{item.title}</div>
                                <div className="icon">
                                  <Image
                                    src={ARROW}
                                    width={25}
                                    height={25}
                                    alt="nav-arrow"
                                  />
                                </div>
                              </div>
                            </Nav.Link>
                          </Nav.Item>
                        ))}
                      </Nav>
                    </Col>
                    <Col sm={9}>
                      <Tab.Content>
                        <Tab.Pane eventKey={index}>
                          <div className="memberList">
                            <Row>
                              {Member.map((item) => (
                                <Col lg="4" key={item.id}>
                                  <MemberCard item={item} />
                                </Col>
                              ))}
                            </Row>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
