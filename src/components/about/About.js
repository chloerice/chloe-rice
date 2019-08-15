import React from "react";
import { Row, Col, Image } from "react-bootstrap";

import "./About.css";
import mobileIllustration from "../../img/mobile-about.svg";
import selfPortrait from "../../img/me-eyes-looking-left.svg";
import favoriteThings from "../../img/favorite-things.svg";

const About = props => (
  <Row id="About">
    <Col xs={12} sm={12} md={12} lg={12}>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h1 className="About-header">About Me</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <p className="About-text">
            I believe in a free and open web, growing food over lawns, 80s
            workout tapes over gyms, bikes over cars, and never wearing pants
            you can’t do a roundhouse kick in.
          </p>
          <p className="About-text">
            When I’m not coding, I create whimsical landscapes, undercover
            unitards, and vegan deliciousness for the obscurely allergic. I also
            love running with my husky Ray, dancing with my blue pit{" "}
            <a
              href="https://instagram.com/twirlthesilverbuffalo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twirl
            </a>{" "}
            (RIP 🙌🏽💙🐗), and eating, growing, & hunting fruit.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="About-illustration" xsHidden sm={7} md={7} lg={7}>
          <Image
            responsive
            src={favoriteThings}
            alt="An illustration of some of Chloe`s favorites: her dogs Twirl and Ray, her vintage Singer sewing machine and bike, her MacBook, and an assortment of fruit."
          />
        </Col>
        <Col className="About-illustration me" xsHidden sm={5} md={5} lg={5}>
          <Image
            responsive
            src={selfPortrait}
            alt="An illustration of Chloe looking to the left at her favorite things."
          />
        </Col>
      </Row>
      <Row>
        <Col
          className="About-mobile-illustration"
          xs={12}
          smHidden
          mdHidden
          lgHidden
        >
          <Image
            className="illustration"
            responsive
            src={mobileIllustration}
            alt="An illustration of some of Chloe`s favorites: her dogs Twirl and Ray, her vintage Singer sewing machine and bike, her MacBook, and an assortment of fruit."
          />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default About;
