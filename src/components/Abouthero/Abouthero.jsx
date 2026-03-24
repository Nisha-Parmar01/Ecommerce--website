import { Container, Row, Col, Badge } from "react-bootstrap";
import "./AboutHero.css";

const AboutHero = () => {
  return (
    <section className="about-hero">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={7} md={10}>
            <Badge className="story-badge">Our Story</Badge>

            <h1 className="hero-title mt-3">
              We believe in the power of <br />
              <span className="highlight">the perfect step</span>
            </h1>

            <p className="hero-text mt-4">
              Founded in 2018, Stride was born from a simple idea: footwear
              should never make you choose between style and comfort. Every
              shoe we create is designed to move with you, support you, and
              help you look great doing it.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutHero;