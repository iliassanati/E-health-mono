import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Form, Row, Col } from 'react-bootstrap';

const DoctorCard = ({ doctor }) => {
  return (
    <Row>
      <Col>
        <Card className='my-3 p-3 rounded'>
          <Link to={`/doctor/${doctor._id}`}>
            <Card.Img src={doctor.image} variant='top' />
            <Card.Body>
              <Card.Title as='div'>
                <strong>
                  {doctor.titre} {doctor.prenom} {doctor.nom}
                </strong>
              </Card.Title>

              <Card.Text as='div'>
                {/* <Rating value={product.rating} text={`$ reviews`} /> */}
              </Card.Text>
              <Card.Text>{doctor.specialite}</Card.Text>
            </Card.Body>
          </Link>
        </Card>
      </Col>
    </Row>
  );
};

export default DoctorCard;
