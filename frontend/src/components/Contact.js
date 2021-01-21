import React from 'react';
import FeatureItem from './FeatureItem';


const Contact = () => {  
  return (
    <section className="main-home">
     
     <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Contacter Nous</h2>
                  <p>
                    Pour plus d'information veuillez nous envoyer un message ou de nous appeler 
                  </p>
                  <br></br>
                </div>
                <br></br>
                <form name="sentMessage" id="contactForm" noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Nom"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="prenom"
                          className="form-control"
                          placeholder="Prenom"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="nuber"
                          id="tele"
                          className="form-control"
                          placeholder="Telephone"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button style={{border:"3px solid"}} type="submit" className="btn btn-custom">
                    Envoyer
                  </button>
                </form>
              </div>
              <br></br> <br></br>
              <div className="row">
                <div className="col-md-6">
                 <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1752.6064338197405!2d-6.867214723951574!3d33.98019155031231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sma!4v1611091705926!5m2!1sfr!2sma"></iframe>
                </div>
                <div className="col-md-6">
                  <br></br>
                  <h5>Telephone : </h5> <p>053787452147 / 0658741254</p>
                  <h5>Email</h5> <p>contact@e-health.com</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <br></br> <br></br>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2021 Developper par Group-3 ASEDS - INE3 - INPT 
              
            </p>
          </div>
        </div>
        
    </section>
  );
};

export default Contact;