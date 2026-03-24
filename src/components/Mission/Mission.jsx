import { Container, Row, Col } from "react-bootstrap";
import { FaShieldAlt, FaLeaf } from "react-icons/fa";
import "./Mission.css";

const Mission = () => {
  return (
    <section className="mission-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <p className="mission-label">OUR MISSION</p>

            <h2 className="mission-title">
              Making every step count
            </h2>

            <p className="mission-text">
              At Stride, we are on a mission to revolutionize the footwear
              industry by creating shoes that don't just look good—they feel
              incredible and perform even better.
            </p>

            <p className="mission-text">
              We work with world-class designers and material scientists to
              develop innovative technologies that provide unmatched comfort,
              support, and durability. From marathon runners to everyday
              commuters, we have something for everyone.
            </p>
            <div className="mission-features">
              <div className="feature-box">
                <FaShieldAlt className="feature-icon" />
                <div>
                  <h6>Quality First</h6>
                  <p>Premium materials, rigorous testing</p>
                </div>
              </div>

              <div className="feature-box">
                <FaLeaf className="feature-icon" />
                <div>
                  <h6>Eco-Conscious</h6>
                  <p>Sustainable practices, recycled materials</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
                alt="shoes"
                className="img-fluid main-img"
              />
              <div className="experience-card">
                <p>Since 2018</p>
                <h5>6 Years</h5>
                <span>of innovation</span>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Mission;