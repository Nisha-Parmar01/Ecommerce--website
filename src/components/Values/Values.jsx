import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaBolt, FaHeart, FaGlobe } from "react-icons/fa";
import "./Values.css";

const valuesData = [
  {
    icon: <FaBolt />,
    title: "Innovation",
    desc: "We constantly push boundaries with new materials, designs, and technologies to create the best footwear possible.",
  },
  {
    icon: <FaHeart />,
    title: "Customer Love",
    desc: "Our customers are at the heart of everything we do. Their feedback shapes our products and drives our improvements.",
  },
  {
    icon: <FaGlobe />,
    title: "Sustainability",
    desc: "We are committed to reducing our environmental footprint through sustainable materials and responsible manufacturing.",
  },
];

const Values = () => {
  return (
    <section className="values-section">
      <Container>
        
        {/* Heading */}
        <div className="text-center mb-5">
          <p className="values-label">OUR VALUES</p>
          <h2 className="values-title">What drives us forward</h2>
        </div>

        {/* Cards */}
        <Row>
          {valuesData.map((item, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className="value-card h-100">
                <Card.Body>
                  
                  <div className="icon-box">
                    {item.icon}
                  </div>

                  <h5 className="mt-3">{item.title}</h5>
                  <p className="mt-2">{item.desc}</p>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
};

export default Values;