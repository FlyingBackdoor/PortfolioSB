import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import zestMoney from "../../Assets/Projects/zest.png";
import angkas from "../../Assets/Projects/angkas.png";
import projectGeneric from "../../Assets/Projects/project_generic.png";
import hoothoot from "../../Assets/Projects/hoothoot.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My recent <strong className="purple">Works </strong> & <strong className="purple">Collaborations </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={angkas}
              isBlog={false}
              title="Angkas"
              description="Angkas is a motorcycle hailing platform that helps Filipinos
              beat the traffic congested streets of the Philippines and save
              precious time through ride-hailing, delivery or purchase."
              ghLink=""
              demoLink="https://angkas.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectGeneric}
              isBlog={false}
              title="HDFC Bank - SLI"
              description="While working for Kadel Labs, I got deployed on Novopay (aka Trustt) project where I had an opportunity to work on the HDFC bank lending application. The application is used by bank’s field officers to do a customers background check and provide her a loan and can be used for various other tasks."
              demoLink="https://trustt.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zestMoney}
              isBlog={false}
              title="ZestMoney"
              description="ZestMoney helps make it accessible for millions to upgrade, to enhance, to rise, while keeping it affordable. Shopping with ZestMoney gives you the freedom to buy right now and repay in either 30 days, or 3 or 4 months. You get to pick what works best for you. With a quick 3-step approval process, ZestMoney offers buy now in easy EMIs option at over 10,000 online & 85,000 offline stores."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://play.google.com/store/apps/details?id=in.zestmoney.android.zestlife"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectGeneric}
              isBlog={false}
              title="Paqman"
              description="First of its kind, a peer-to-peer parcel delivery services."
              demoLink="https://paqman.one"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hoothoot}
              isBlog={false}
              title="Hoothoot Deals"
              description="HootHoot Deals provide you deals from every trusted e-commerce portal. Every deal is first verified by our team so you can get the best offer."
              demoLink="https://hoothoot-deals.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectGeneric}
              isBlog={false}
              title="Freelance Projects"
              description="During my career I’ve worked on many freelance projects as well. I’ve also helped dozens of clients with their code. You can find their testimonials in the following link."
              demoLink="https://www.fiverr.com/m_sohair"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
