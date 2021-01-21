import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../components/Search'
import { Col, Row } from 'react-bootstrap';
import DoctorCard from '../components/DoctorCard';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listDoctors } from '../actions/doctorActions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const doctorList = useSelector(state => state.doctorList);
  const { doctors, error, loading } = doctorList;

  useEffect(() => {
    dispatch(listDoctors());
  }, [dispatch]);


  return (
    
    <>
    <Search />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {doctors.map(doctor => (
            <Col key={doctor._id} sm={12} md={6} lg={4} xl={3}>
              <DoctorCard doctor={doctor}></DoctorCard>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
//
