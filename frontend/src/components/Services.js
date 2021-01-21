import React from 'react';
import FeatureItem from './FeatureItem';


const Services = () => {  
  return (
    <section className="main-home">
      <div className="container">
        <br></br>
        <h1> Nous Services </h1>
        <br></br>
        <div className="row pr-6 mr-6">

            <FeatureItem
              title="Vous êtes Médecin ?"
              extraClass="home-primary"
              subTitle="S'inscrire sur E-health, est la meilleure façon de développer
              l'activité de votre cabinet." />

            <FeatureItem
              title="Gerer Votre Cabinet"
              subTitle="E-health permise à tous les médecins de gérer les RD Vs, accepter ou refuser un Rdv...
               D'une manière simple et sécurisé " /> 

            <FeatureItem
              title="Trouver votre medcin preferable"
              subTitle="Retrouvez les medcins de votre ville et prenez rendez-vous gratuitement et en un seul clic." />
              
            <FeatureItem
              title="DOCTOR EN VIDÉO"
              extraClass="home-primary"
              subTitle="choisissez le créneau qui vous convient et prenez RDV en ligne gratuitement et immédiatement." />

            <FeatureItem
              title="Paiement securisé"
              extraClass="home-primary"
              subTitle="Payer votre montant du RDV en toute sécurité. Vous pouvez utiliser votre card de paiement ou Paypal." />

            <FeatureItem
              title="UN SERVICE 100% GRATUIT"
              subTitle="Plus besoin d’appels et d’attente. Votre prise de RDV est à présent simple, rapide et efficace." />  
            
        </div>
      </div>
    </section>
  );
};

export default Services;