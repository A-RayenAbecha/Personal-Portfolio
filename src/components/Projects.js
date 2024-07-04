import { Container, Row, Col, Tab, Nav,Button  } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/pfe.jpg";
import projImg2 from "../assets/img/project-img2.png";
import CerfImg from "../assets/img/cerf.jpg";
import dsproj1 from "../assets/img/dsproj1.PNG";
import portimg from "../assets/img/portfol.PNG";
import anoimg from "../assets/img/anom.PNG";
import projimg3 from "../assets/img/projsymf.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Mobile version of the AXELOR ERP",
      description: (
        <>
        React Native <br />
        <Button variant="primary" className="mr-2" href="https://drive.google.com/file/d/1TUjUUQtJ5QLAVxj7getjjJYDDYG3g8ui/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Report in French</Button> <br />
        <Button variant="primary" href="https://drive.google.com/file/d/1gPAoi8w3XQSgCpgIN8dhusUIBm0GXrQ7/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Report in English</Button>
      </>
        
      ),
      imgUrl: projImg1,
    },
    {
      title: "BourLaForme",
      description:( <>
      Website with symfony  <br />
      <Button variant="primary" className="mr-2" href="https://github.com/HendiliMohamedAziz/ProjetPi_Anarchy.git" target="_blank" rel="noopener noreferrer">View Github</Button>
      
      </>
      ),
      
      imgUrl: projimg3,
    },
    {
      title: "Personal Portfolio ",
      description:( <>
      Website with react js  <br />
      <Button variant="primary" className="mr-2" href="#" target="_blank" rel="noopener noreferrer">View website</Button>
      
      </>
      ),
      
      imgUrl: portimg,
    },
    
  ];
  const certificates = [
    {
      title: "IBM Certificate",
      description: (
        <>
        Exploratory Data Analysis for Machine Learning <br />
        <Button variant="primary" className="mr-2" href="https://www.coursera.org/account/accomplishments/verify/KSSKSUGXYV68?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" target="_blank" rel="noopener noreferrer">Open</Button> <br />
      </>
        
      ),
      imgUrl: CerfImg,
      

}];
const dsProjects = [
  {
    title: "Credit Scoring In Africa",
    description: (
      <>
      <Button variant="primary" className="mr-2" href="https://prezi.com/view/TIzXRD0AIF817W7eIscR/?fbclid=IwY2xjawDyUQZleHRuA2FlbQIxMAABHaKr6g-qbNk-C2wncGwc4wQMuV88cDTYykw7VE2n9vgkXdvYaef3yvy1tw_aem_pJR4PrUHEKfMbC1YDGk3fA" target="_blank" rel="noopener noreferrer">Project Presentation</Button> <br />
      <Button variant="primary" className="mr-2" href="https://colab.research.google.com/drive/1s65OuS8ikcTZSCcLvTuFude78U7V6_V0?usp=sharing" target="_blank" rel="noopener noreferrer">Project Lab 1</Button> <br />
      <Button variant="primary" className="mr-2" href="https://colab.research.google.com/drive/1pnEk3YIjdIKvNb4DR5rYYe7wbUiR7MYH#scrollTo=ZPyDWlXtLwdn
" target="_blank" rel="noopener noreferrer">Project Lab 2</Button> <br />


    </>
      
    ),
    imgUrl: dsproj1,
    

},
{
  title: "anomaly detection in machine learning",
  description: (
    <>
    <Button variant="primary" className="mr-2" href="https://colab.research.google.com/drive/1zvtdu50peSK7y3xZukG4JONiUCxkWxiO?usp=sharing&fbclid=IwY2xjawDyhH1leHRuA2FlbQIxMAABHbeq1Hm8Gnfmpi78wenyJotfB4_jkcmSHCx2UISxvUFn7KtbEMUe72i_sw_aem_RcfcetSLiJK7ZBnRZpzndw" target="_blank" rel="noopener noreferrer">Project Lab</Button> <br />
    <Button variant="primary" className="mr-2" href="https://www.canva.com/design/DAF2k30zoo8/gZthJeUcFgi5IyoYQ4HBTw/edit?utm_content=DAF2k30zoo8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer">Project Presentation</Button> 

  


  </>
    
  ),
  imgUrl: anoimg,
  

}
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
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Development Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Data Science Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Certificates</Nav.Link>
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
                    <Row>
                        {
                          dsProjects.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          certificates.map((project, index) => {
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

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
