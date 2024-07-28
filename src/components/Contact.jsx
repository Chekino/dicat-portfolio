import React, { useRef } from "react";

import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";
import { EnvelopeAt, TelephonePlus, Whatsapp } from "react-bootstrap-icons";
import { ArrowRight } from 'react-bootstrap-icons';

import emailjs from "@emailjs/browser";
import { Card } from "react-bootstrap";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xlcqdxn",
        "template_rd9i3tu",
        form.current,
        "TG-1yw9UWYvJtaOBb"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Formulaire envoyé avec succès");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container mb-5" id="contact" >
      <div className="row">
        <h2 className="pb-5 justify-content-center text-center" style={{fontSize:"45px",fontWeight:"700" }}>
          Me Contacter
        </h2>
        <div className="col-md-4 mb-3">
          <Card className="mb-3">
            <Card.Body>
              <Card.Title className="card-title text-center">Whatsapp <span><Whatsapp/></span></Card.Title> 
              <Card.Text className="card-text text-center">+225 0749352214 </Card.Text>
              <Card.Text className="card-text text-center"><a href="https://wa.me/2250749352214?text=Bonjour,%20je%20vous%20ecrit%20depuis%20votre%20portfolio%20." target="blank" className="text-black">Ecrit-moi <ArrowRight/> </a> </Card.Text>
            </Card.Body>
          </Card>
          <Card className="">
            <Card.Body>
              <Card.Title className="card-title text-center">Adresse E-mail <span><EnvelopeAt/></span></Card.Title>
              <Card.Text className="card-text text-center">dicatdev@gmail.com</Card.Text>
              <Card.Text className="card-text text-center"> <a href="mailto:dicatdev@gmail.com" target="blank" className="text-black">Ecrit-moi <ArrowRight/> </a></Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-8">
          <form className="container" ref={form} onSubmit={sendEmail}>
            <MDBCol>
              <MDBInput
                label={<span className="text-white">Nom et prenom</span>}
                name="user_name"
                className="text-white mb-2"
                type="text"
                required
              />
            </MDBCol>
            <MDBCol>
              <MDBInput
                type="email"
                label={<span className="text-white">Email</span>}
                className="text-white mb-2"
                name="user_email"
                required
              />
            </MDBCol>
            <MDBCol>
              <MDBInput
                type="number"
                label={<span className="text-white">Numero de téléphone</span>}
                name="user_number"
                className="text-white mb-4"
                required
              />
            </MDBCol>

            <MDBTextArea
              wrapperClass="mb-4"
              type="text"
              textarea
              rows={4}
              label={<span className="text-white">Message</span>}
              className="text-white "
              name="message"
              required
            />

            <MDBBtn type="submit" className="mb-4">
              Envoyer le message
            </MDBBtn>
          </form>
        </div>
      </div>
    </div>
  );
}
