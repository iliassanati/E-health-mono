import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Button, ListGroup, Row, Image, Card } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getRdvDetails, payRdv } from '../actions/rdvActions';
import axios from 'axios';
import { RDV_PAY_RESET } from '../constants/rdvConstants';
import { PayPalButton } from 'react-paypal-button-v2';

const OrderScreen = ({ match, history }) => {
  const [sdkReady, setSdkReady] = useState(false);
  const rdvId = match.params.id;
  const dispatch = useDispatch();

  const rdvDetails = useSelector(state => state.rdvDetails);
  const { loading, error, rdv } = rdvDetails;

  const rdvPay = useSelector(state => state.rdvPay);
  const { loading: loadingPay, success: successPay } = rdvPay;

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get('/api/config/paypal');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!rdv._id || successPay) {
      dispatch({ type: RDV_PAY_RESET });
      dispatch(getRdvDetails(rdvId));
    } else if (!rdv.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, rdvId, rdv, successPay, history]);

  const successPaymentHandler = paymentResult => {
    console.log(paymentResult);
    dispatch(payRdv(rdvId, paymentResult));
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
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
                <p>
                  <strong>Method: </strong> {rdv.paymentMethod}
                </p>
                {rdv.isPaid ? (
                  <Message variant='success'>Paid on {rdv.paidAt}</Message>
                ) : (
                  <Message variant='danger'>Not Paid</Message>
                )}
              </ListGroup.Item>

              <ListGroup.Item>
                <h2>Reference du rendez-vous</h2>

                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>{rdv._id}</Col>
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
                    <Col>{rdv.rdvPrix} MAD</Col>
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

                {!rdv.isPaid && (
                  <ListGroup.Item>
                    {loadingPay && <Loader />}
                    {!sdkReady ? (
                      <Loader />
                    ) : (
                      <PayPalButton
                        amount={rdv.totalPrice}
                        onSuccess={successPaymentHandler}
                      />
                    )}
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default OrderScreen;
