import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import react from "../assets/img/react.svg"
import javascript from "../assets/img/javascript.svg"
import python from "../assets/img/python.svg"
import django from "../assets/img/django.svg"
import node from "../assets/img/nodejs.svg"
import html from "../assets/img/html.svg"
import css from "../assets/img/css.svg"
import mongodb from "../assets/img/mongodb.svg"
import gitlab from "../assets/img/gitlab.svg"
import github from "../assets/img/github.svg"


const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <div>
            <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="">
                    <div className="skill-bx wow zoomIn">
                        <h2 className="mb-4">Compétences</h2>
                        <div className="row mb-4">
                        <div className="col-md-4">
                            <h5>FRONTEND</h5>
                            <div className="skills-list">
                            <span className="skill-item">HTML</span>
                            <span className="skill-item">CSS</span>
                            <span className="skill-item">JAVASCRIPT</span>
                            <span className="skill-item">REACT</span>
                            <span className="skill-item">BOOTSTRAP</span>
                            <span className="skill-item">CHAKRA UI</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h5>BACKEND</h5>
                        <div className="skills-list">
                            <span className="skill-item">NODE.JS</span>
                            <span className="skill-item">EXPRESS.JS</span>
                            <span className="skill-item">PYTHON</span>
                            <span className="skill-item">DJANGO</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h5>DB ET VERSION</h5>
                        <div className="skills-list ">
                            <span className="skill-item">MONGO.DB</span>
                            <span className="skill-item">MYSQL</span>
                            <span className="skill-item">GITHUB</span>
                            <span className="skill-item">GITLAB</span>
                        </div>
                    </div>
                        </div>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={javascript} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React Js</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Image" />
                                <h5>Node Js</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={django} alt="Image" />
                                <h5>Django</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>Html</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={mongodb} alt="Image" />
                                <h5>Mongo DB</h5>
                            </div>
                            <div className="item">
                                <img src={github} alt="Image" />
                                <h5>Github</h5>
                            </div>
                            <div className="item">
                                <img src={gitlab} alt="Image" />
                                <h5>Gitlab</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
   </div>
    );
}

export default Skills;
