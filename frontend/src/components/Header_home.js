import React from 'react';
import Navbar from './Navbar';
import FeatureItem from './FeatureItem';
import Search from './Search'


const Header = (props) => {  
  return (
    <section className="main-home">
      <div className="container">
        <header>
          <Navbar />
          <Search/>
          <FeatureItem
              title="Choisissez votre medcin"
              subTitle="Retrouvez les medcins de votre ville et prenez rendez-vous gratuitement et en un seul clic" />
            <FeatureItem
              title="Doctor en vidéo"
              subTitle="choisissez le créneau qui vous convient et prenez RDV en ligne gratuitement et immédiatement" />
            <FeatureItem
              title="Un service 100% Gratuit"
              subTitle="Plus besoin d’appels et d’attente. Votre prise de RDV est à présent simple, rapide et efficace" />
        </header>
        
      </div>
    </section>
  );
};

export default Header;