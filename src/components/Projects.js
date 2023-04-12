import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img4.png";
import projImg2 from "../assets/img/project-img5.png";
import projImg3 from "../assets/img/project-img6.png";
import projImg4 from "../assets/img/project-img7.png";
import projImg5 from "../assets/img/project-img8.png";
import projImg6 from "../assets/img/project-img9.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "BeConnect App",
      description: "UX/UI, Branding, Mobile Design",
      imgUrl: projImg1,
    },
    {
      title: "Growin Gainz: Website Design",
      description: "UI Dev, Promotion and Branding, UX Design",
      imgUrl: projImg2,
    },
    {
      title: "Gaia Online-redesign",
      description: "UX Research, Marketing, Web Design",
      imgUrl: projImg3,
    },
    {
      title: "iFocus",
      description: "UX/UI, Branding, Mobile Design",
      imgUrl: projImg4,
      onclick: "https://drive.google.com/file/d/1k8MtU-V9yIYmh-hw2MlJDuQ9bdaHzv0w/view?usp=share_link" 
    },
    {
      title: "Business Startup",
      description: "Logo Design",
      imgUrl: projImg5,
    },
    {
      title: "Research",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>- Access is key to having a sustainable society ​ - Seamlessly navigate through life in an effective and efficient way​ - Link to various daily activities and resources​ - Get info/Get Data/Give Data</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                          
                        }
                      </Row>
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>The re-design that provides unique experience while preserving its own authentic style empowered with up to date solutions. Considering the users needs and industry best practices starting from making it useful, responsive, easy to navigate are good points to start.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Clients should expect a high-end experience and workout programs focused on the individual’s medical conditions, ability, and goal.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
              
            </TrackVisibility>
          </Col>
        </Row>
        <a href="https://drive.google.com/file/d/1YaMMfrwZlaNcHj_dcsfzC4zuDCzPbK_7/view?usp=share_link"><button className="vvc">
                <span>View Projects</span>
              </button></a>
              <a href="https://drive.google.com/file/d/1eE1UYi1yuh9vVAVA5T8KA665ynQ17sn5/view?usp=share_link"><button className="vvc">
                <span>View other projects </span>
              </button></a>
      </Container>
      
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
