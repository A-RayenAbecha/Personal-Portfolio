import { Container, Row, Col} from "react-bootstrap";
import projImg1 from "../assets/img/aboutme.webp";

export const AboutMe = () => {
return (
    <section className="aboutMe" id="aboutme">
      <Container>
      <Row className="align-items-center">
      <Col md={4} className="text-center mb-4 mb-md-0">
            <img src={projImg1} />
          </Col>
        <Col md={8} className="text-center">
          <h2>About Me</h2>
          <p className="aboutMe-text" >
          My name is Ahmed Rayen Abecha, and I'm from Tunisia. I have a strong passion for creating visually stunning and highly functional websites. My dedication lies in transforming designs into interactive websites, using my development skills to enhance and personalize features. Even though I am still in the learning phase and don't have extensive experience, my primary objective is to continuously improve my skills, especially in building engaging and user-friendly digital experiences. Additionally, I have a significant interest and aptitude in data science.
As a Software Engineering student at Esprit, I am deeply invested in software engineering and focusing on gaining professional experience. My academic journey started at ISI Ariana in 2019, where I excelled. I successfully completed my second year of the engineering cycle and am currently in my third year, specializing in data science.
          </p>
        </Col>
        </Row>
      </Container>
    </section>
  )
}




