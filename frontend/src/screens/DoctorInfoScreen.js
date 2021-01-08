import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getDoctorInfo } from '../actions/doctorActions';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import { saveDate } from '../actions/rdvInfoActions';

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
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </Figure.Caption>
          </Figure>
        </Col>
        <Col>
          <DayTimePicker timeSlotSizeMinutes={30} onConfirm={handleScheduled} />
        </Col>
      </Row>
      <Row>
        <Col md={5}></Col>
      </Row>
    </>
  );
};

export default DoctorInfoScreen;

// <Accordion defaultActiveKey=''>
// <Card>
//   <Accordion.Toggle as={Card.Header} eventKey='0'>
//     Adresse
//   </Accordion.Toggle>
//   <Accordion.Collapse eventKey='0'>
//     <Card.Body>{doctor.addressCabinet}</Card.Body>
//   </Accordion.Collapse>
// </Card>
// <Card>
//   <Accordion.Toggle as={Card.Header} eventKey='1'>
//     Modes de reglements
//   </Accordion.Toggle>
//   <Accordion.Collapse eventKey='1'>
//     <Card.Body>Hello! I'm another body</Card.Body>
//   </Accordion.Collapse>
// </Card>
// <Card>
//   <Accordion.Toggle as={Card.Header} eventKey='2'>
//     Specialites
//   </Accordion.Toggle>
//   <Accordion.Collapse eventKey='2'>
//     <Card.Body>
//       {' '}
//       <Badge pill variant='info'>
//         {doctor.specialite}
//       </Badge>
//     </Card.Body>
//   </Accordion.Collapse>
// </Card>
// <Card>
//   <Accordion.Toggle as={Card.Header} eventKey='3'>
//     Geolocalisation
//   </Accordion.Toggle>
//   <Accordion.Collapse eventKey='3'>
//     <Card.Body>Hello! I'm another body</Card.Body>
//   </Accordion.Collapse>
// </Card>
// <Card>
//   <Accordion.Toggle as={Card.Header} eventKey='4'>
//     Presentation de cabinet
//   </Accordion.Toggle>
//   <Accordion.Collapse eventKey='4'>
//     <Card.Body>Hello! I'm another body</Card.Body>
//   </Accordion.Collapse>
// </Card>
// <Card>
//   <Accordion.Toggle as={Card.Header} eventKey='5'>
//     Diplomes et formations
//   </Accordion.Toggle>
//   <Accordion.Collapse eventKey='5'>
//     <Card.Body>Hello! I'm another body</Card.Body>
//   </Accordion.Collapse>
// </Card>
// </Accordion>
//
