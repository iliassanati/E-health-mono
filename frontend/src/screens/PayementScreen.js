import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Col, Card, Row, InputGroup } from 'react-bootstrap';
import { savePaymentMethod } from '../actions/rdvInfoActions';

const PayementScreen = ({ history }) => {
  const [paymentMethod, setPaymentMethod] = useState('PayPal');
  const dispatch = useDispatch();

  const rdvInfo = useSelector(state => state.rdvInfo);
  const { date, doctor } = rdvInfo;

  const submitHandler = e => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push('/placeorder');
  };
  return (
    <Row>
      <Col>
        <p>Heure de votre rendez-vous:</p>
        <InputGroup size='lg'>
          <InputGroup.Prepend>
            <InputGroup.Text id='inputGroup-sizing-lg'>{date}</InputGroup.Text>
          </InputGroup.Prepend>
        </InputGroup>
        <Card>
          <Card.Img variant='top' src={doctor.image} />
          <Card.Body>
            <Card.Title>
              {doctor.titre} {doctor.nom} {doctor.prenom}{' '}
            </Card.Title>
            <Card.Title>{doctor.specialite}</Card.Title>
            <Card.Text>{doctor.addressCabinet}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label as='legend'>Select Method</Form.Label>

            <Col>
              <Form.Check
                type='radio'
                label='Paypal or Credit Card'
                id='PayPal'
                name='paymentMethod'
                value='PayPal'
                checked
                onChange={e => setPaymentMethod(e.target.value)}
              ></Form.Check>
            </Col>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Continue
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default PayementScreen;
