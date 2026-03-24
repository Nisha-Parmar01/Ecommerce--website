import { Container, Row, Col } from "react-bootstrap";
import "./Stats.css";

const Stats = () => {
  return (
    <section className="stats-section">
      <Container>
        <Row className="text-center">
          <Col md={3} sm={6} className="mb-4">
            <h2>500K+</h2>
            <p>Happy Customers</p>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <h2>200+</h2>
            <p>Shoe Styles</p>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <h2>15</h2>
            <p>Countries Served</p>
          </Col>

          <Col md={3} sm={6} className="mb-4">
            <h2>4.9</h2>
            <p>Average Rating</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Stats;