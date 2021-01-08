import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Row, ListGroup, Image, Card } from 'react-bootstrap';
import { createRdv } from '../actions/rdvActions';
import Message from '../components/Message';

const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch();

  const rdvInfo = useSelector(state => state.rdvInfo);

  const rdvCreate = useSelector(state => state.rdvCreate);
  const { rdv, error, success } = rdvCreate;

  //Calculate prices
  const addDecimals = num => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  rdvInfo.taxPrice = addDecimals(
    Number((0.02 * rdvInfo.doctor.prixConsultation).toFixed(2))
  );

  rdvInfo.totalPrice = (
    Number(rdvInfo.doctor.prixConsultation) + Number(rdvInfo.taxPrice)
  ).toFixed(2);

  useEffect(() => {
    if (success) {
      history.push(`/rdv/${rdv._id}`);
    }
  }, [history, success]);

  const placeOrderHandler = () => {
    const rdv = {
      doctorNom: rdvInfo.doctor.nom,
      doctorPrenom: rdvInfo.doctor.prenom,
      etatClient: rdvInfo.renseignements.etatClient,
      typeConsultation: rdvInfo.renseignements.typeConsultation,
      renseignementMedicaux: rdvInfo.renseignements.renseignementMedicaux,
      paymentMethod: rdvInfo.paymentMethod,
      rdvPrix: rdvInfo.doctor.prixConsultation,
      rdvDate: rdvInfo.date,
      taxPrice: rdvInfo.taxPrice,
      totalPrice: rdvInfo.totalPrice,
    };

    dispatch(createRdv(rdv));
  };
  return (
    <>
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Date de rendez-vous</h2>
              <p>
                <strong>Date: </strong> {rdvInfo.date}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong>Method: </strong> {rdvInfo.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Informations du medecin</h2>

              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col md={1}>
                      <Image
                        src={rdvInfo.doctor.image}
                        alt={rdvInfo.doctor.nom}
                        fluid
                        rounded
                      />
                    </Col>
                    <Col>
                      {rdvInfo.doctor.titre} {rdvInfo.doctor.nom}{' '}
                      {rdvInfo.doctor.prenom}{' '}
                    </Col>
                    <Col md={4}>{rdvInfo.doctor.specialite}</Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Resume de rdv</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Type de consultation</Col>
                  <Col>{rdvInfo.renseignements.typeConsultation}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Prix de consultation</Col>
                  <Col>{rdvInfo.doctor.prixConsultation} MAD</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>{rdvInfo.taxPrice} MAD</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>{rdvInfo.totalPrice} MAD</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <Message variant='danger'>{error}</Message>}
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block'
                  onClick={placeOrderHandler}
                >
                  Confirmer le rendez-vous
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrderScreen;
