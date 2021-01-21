import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/patient/login'>
            <Nav.Link>Se connecter</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Se connecter</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/doctor/:id'>
            <Nav.Link>livraison</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>livraison</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/rdvinfo'>
            <Nav.Link>Paiement</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Paiement</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/payment'>
            <Nav.Link>Passer la commande</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Passer la commande</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
