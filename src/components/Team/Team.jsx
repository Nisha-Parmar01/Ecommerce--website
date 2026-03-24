import { Container, Row, Col } from "react-bootstrap";
import "./Team.css";

const teamData = [
  {
    name: "James Chen",
    role: "CEO & Founder",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Williams",
    role: "Head of Design",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Park",
    role: "CTO",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Marketing",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Team = () => {
  return (
    <section className="team-section">
      <Container>
        
        {/* Heading */}
        <div className="text-center mb-5">
          <p className="team-label">OUR TEAM</p>
          <h2 className="team-title">The people behind Stride</h2>
          <p className="team-subtitle">
            A passionate team of designers, engineers, and shoe enthusiasts
            dedicated to creating the perfect footwear.
          </p>
        </div>
        <Row className="justify-content-center">
          {teamData.map((member, index) => (
            <Col lg={3} md={6} sm={6} key={index} className="mb-4 text-center">
              
              <div className="team-card">
                <div className="img-wrapper">
                  <img src={member.img} alt={member.name} />
                </div>

                <h5 className="mt-3">{member.name}</h5>
                <p className="role">{member.role}</p>
              </div>

            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
};

export default Team;