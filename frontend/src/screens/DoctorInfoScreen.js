import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getDoctorInfo } from '../actions/doctorActions';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import { saveDate } from '../actions/rdvInfoActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import CheckoutSteps from '../components/CheckoutSteps';

const DoctorInfoScreen = ({ match, history }) => {
  const dispatch = useDispatch();

  const doctorInfoById = useSelector(state => state.doctorInfoById);

  const { loading, doctor, error } = doctorInfoById;

  useEffect(() => {
    dispatch(getDoctorInfo(match.params.id));
  }, [dispatch, match]);

  const handleScheduled = date => {
    dispatch(saveDate(date));
    history.push(`/patient/login?redirect=/rdvinfo`);
  };
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Revenir à la page précedante
      </Link>
      <CheckoutSteps step1 step2 />

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          {' '}
          <Row>
            <Col>
              <Figure>
                <Figure.Image
                  width={342}
                  height={360}
                  alt='171x180'
                  src={doctor.image}
                />
                
                <Figure.Caption>
                  <br></br><br></br>
                  Medcin : {doctor.titre} {doctor.nom} {doctor.prenom}
                  <br></br><br></br>
                  Email : {doctor.email}
                  <br></br><br></br>
                  Specialite : {doctor.specialite}
                  <br></br><br></br>
                  Adresse : {doctor.addressCabinet}
                  <br></br><br></br>
                  Ville : {doctor.ville}
                  <br></br><br></br>
                  Telephone Cabinet : {doctor.phoneCabinet}
                </Figure.Caption>
              </Figure>
            </Col>
            <Col>
              <DayTimePicker
                timeSlotSizeMinutes={30}
                onConfirm={handleScheduled}
              />
            </Col>
          </Row>
          <Row>
            <Col md={5}></Col>
          </Row>
        </>
      )}
    </>
  );
};

export default DoctorInfoScreen;
