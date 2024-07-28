import React from 'react';
import logo from '../assets/img/logo.png';
import navicon1 from '../assets/img/nav-icon1.svg';
import navicon2 from '../assets/img/nav-icon2.svg';
import navicon3 from '../assets/img/nav-icon3.svg';

const Footer = () => {
    return (
        <div>
            <footer className='footer'>
                <div className='container'>
                    <img src={logo} alt="" className='footer_logo'/>

                    <ul className='footer_list'>
                        <li>
                            <a href="#home" className='footer_link'>Accueil</a>
                        </li>

                        <li>
                            <a href="#skills" className='footer_link'>Compétences</a>
                        </li>

                        <li>
                            <a href="#projects" className='footer_link'>Projets</a>
                        </li>

                        <li>
                            <a href="#contact" className='footer_link'>Contact</a>
                        </li>
                    </ul>
                    <div className="social-icon">
                <a href="https://ci.linkedin.com/in/cheikh-ahmad-tidjani-diakite-3693a1280?trk=people-guest_people_search-card" target='blank'><img src={navicon1} alt="" /></a>
                <a  href="https://github.com/Chekino" target='blank'><img src={navicon2} alt="" /></a>
                <a href="#"><img src={navicon3} alt="" /></a>
              </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
