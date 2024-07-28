import { Container, Row, Col } from "react-bootstrap";

import headerImg from "../assets/img/header-img.svg";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const Banner = () => {
  const [text] = useTypewriter({
    words: ["Frontend", "Backend", "Freelance", "Licence Info"],
    loop: {},
    deleteSpeed: 20,
  });

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagline">Bienvenue sur mon Portfolio</span>
              <h1 className="">Diakite Cheikh A.T </h1>
              <h2 className="mb-4">
                Developpeur Web /{" "}
                <span style={{ color: "#2563eb" }}>
                  {text}
                  <Cursor cursorStyle="<" cursorColor="red" />
                </span>{" "}
              </h2>

              <h5 style={{ fontSize: "18px", lineHeight: "1.6" }}>
                Étudiant en troisième année de Licence et Freelance avec plus de
                2 ans d'expérience en développement web FullStack. Passionné par
                la création de sites web dynamiques et d'applications web
                interactives, je suis motivé par la conception de produits
                innovants et fonctionnels. Mon parcours académique m'a appris
                l'importance de l'apprentissage continu dans un domaine en
                constante évolution. Enthousiaste à relever de nouveaux défis et
                à collaborer avec d'autres professionnels, je suis ouvert à des
                opportunités de collaboration. N'hésitez pas à me contacter pour
                en discuter.
              </h5>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  
  );
};

export default Banner;
