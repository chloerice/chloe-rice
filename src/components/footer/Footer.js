import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import SocialNav from "./SocialNav";
import "./Footer.css";

const Footer = () => (
  <footer>
    <Row id="Contact">
      <Col xs={12} sm={12} md={12} lg={12}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h1 className="Contact-header">Contact me</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            {/* <p className="Contact-text">
              I’m currently looking for a team to learn from and solve problems with. Looking for someone gritty and meticulous? I’m that somebody. If you’re cross-functional and user-centered, I’m interested.
            </p> */}
            <p className="Contact-text">
              I’m a UX Developer at Shopify. I collaborate with a distributed
              team of designers, content strategists, researchers and other
              developers to maintain and evolve{" "}
              <a
                href="https://polaris.shopify.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Polaris
              </a>
              , Shopify's open source product design system.
            </p>

            <p className="Contact-text">
              In my spare time, I work on technical education and career
              development initiatives with my friends through a non-profit we
              founded called We Build Black. We're on a mission to leverage
              technology to achieve socio-economic change in underserved
              communities.
            </p>
            <p className="Contact-text">
              I’m always on the lookout for side projects that matter and good
              conversation. Let’s talk!
            </p>
          </Col>
        </Row>
        <SocialNav />
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <p className="madeBy">
              Coded & Illustrated with
              <span className="heart">
                <FaHeart />
                <span className="sr-only">love</span>
              </span>
              by Chloé Rice
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  </footer>
);

export default Footer;
