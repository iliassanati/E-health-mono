import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Button, ListGroup, Row, Image, Card } from 'react-bootstrap';
import Message from '../components/Message';
import { getRdvDetails } from '../actions/rdvActions';

const OrderScreen = ({ match, history }) => {
  const rdvId = match.params.id;
  const dispatch = useDispatch();

  const rdvDetails = useSelector(state => state.rdvDetails);
  const { loading, error, rdv } = rdvDetails;
  console.log(rdv);

  useEffect(() => {
    if (!rdv._id) {
      dispatch(getRdvDetails(rdvId));
    }
  });
  return (
    <>
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Date de rendez-vous</h2>
              <p>
                <strong>Date: </strong> {rdv.rdvDate}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong>Method: </strong> {rdv.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Informations du medecin</h2>

              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col md={1}>
                      {/* <Image
                        src={rdv.image}
                        alt={rdv.doctor.nom}
                        fluid
                        rounded
                      /> */}
                    </Col>
                    <Col>
                      {/* {rdv.doctor.titre} {rdvInfo.doctor.nom}{' '}
                      {rdvInfo.doctor.prenom}{' '} */}
                    </Col>
                    {/* <Col md={4}>{rdvInfo.doctor.specialite}</Col> */}
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
                  <Col>{rdv.typeConsultation}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Prix de consultation</Col>
                  <Col>{rdv.prixConsultation} MAD</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>{rdv.taxPrice} MAD</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>{rdv.totalPrice} MAD</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <Message variant='danger'>{error}</Message>}
              </ListGroup.Item>

              <ListGroup.Item>
                <Button type='button' className='btn-block'>
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

export default OrderScreen;
