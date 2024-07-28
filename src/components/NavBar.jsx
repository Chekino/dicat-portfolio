import { useEffect, useState } from 'react';
import { Container, Navbar, Nav,  } from 'react-bootstrap';
import logo from '../assets/img/logo.png';
import navicon1 from '../assets/img/nav-icon1.svg';
import navicon2 from '../assets/img/nav-icon2.svg';
import navicon3 from '../assets/img/nav-icon3.svg';
import cv from '../assets/CV/moncv.pdf'
import { CloudDownload } from 'react-bootstrap-icons';
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Accueil</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Compétences</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projets</Nav.Link>
              <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
              <Nav.Link href={cv} download="CV_Diakite_Cheikh.pdf" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}> Telecharger (CV) <CloudDownload /></Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a  href="https://ci.linkedin.com/in/cheikh-ahmad-tidjani-diakite-3693a1280?trk=people-guest_people_search-card" target='blank'><img src={navicon1} alt="" /></a>
                <a  href="https://github.com/Chekino" target='blank'><img src={navicon2} alt="" /></a>
                <a href="#"><img src={navicon3} alt="" /></a>
              </div>
              
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};
