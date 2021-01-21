import React from 'react';
import FeatureItem from './FeatureItem';


const Apropos = () => {  
  return (
    <section className="main-home">
      <div className="container">
        <h1>À PROPOS DE NOUS</h1>
     
          <FeatureItem
              title="Qui sommes nous ?"
              subTitle="Nous sommes des élèves ingénieurs de l'Institut National des Postes et Télécommunication INPT-Rabat. 
                        Nous avons développé la plate-forme E-health au sein d'un projet académique " />

            <FeatureItem
              title="NOTRE CONCEPT"
              subTitle="Difficile de trouver un RDV médical ?
                        E-health est un outil innovant qui vous permet de trouver rapidement un médecin ou un dentiste et de prendre RDV en ligne immédiatement.
                        Retrouvez les praticiens à proximité de chez vous et prenez rendez-vous gratuitement et en un clic.
                        Renseignez-vous sur les spécialités médicales, consultez les disponibilités en temps réel et prenez RDV en ligne gratuitement." />

            <FeatureItem
              title="NOTRE HISTOIRE"
              subTitle="Toute nouvelle idée commence par la détection d’un besoin. Notre constat était : Trouver un médecin et prendre un rendez-vous est souvent un véritable casse-tête.
                        Nous avons donc décidé de lancer E-health afin de faciliter la vie des patients et des professionnels de la santé." />
        
      </div>
    </section>
  );
};

export default Apropos;