import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import { Container } from 'react-bootstrap';

//Patient Screen
import PatientLoginScreen from './screens/patient/PatientLoginScreen';
import PatientRegisterScreen from './screens/patient/PatientRegisterScreen';
import PatientProfileScreen from './screens/patient/PatientProfileScreen';

//componenets
import Home from './components/Home'
import Contact from './components/Contact'
import Services from './components/Services'
import Apropos from './components/Apropos'

//Doctor Screen
import DoctorLoginScreen from './screens/doctor/DoctorLoginScreen';
import DoctorRegisterScreen from './screens/doctor/DoctorRegisterScreen';
import DoctorSpaceScreen from './screens/doctor/DoctorSpaceScreen';
import DoctorProfileScreen from './screens/doctor/DoctorProfileScreen';
import DoctorPatientsScreen from './screens/doctor/DoctorPatientsScreen';
import HomeScreen from './screens/HomeScreen';
import DoctorInfoScreen from './screens/DoctorInfoScreen';
import RdvScreen from './screens/RdvScreen';
import PayementScreen from './screens/PayementScreen';
import PlaceOrder from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import PatientRdvScreen from './screens/patient/PatientRdvScreen';
import DoctorRdvScreen from './screens/doctor/DoctorRdvScreen';

function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <main className='py-3'>
          <Container>
            <Route path='/' component={Home} exact />
            <Route path='/doctor/:id' component={DoctorInfoScreen} />
            <Route path='/rdvinfo' component={RdvScreen} />
            <Route path='/payment' component={PayementScreen} />
            <Route path='/placeorder' component={PlaceOrder} />
            <Route path='/rdv/:id' component={OrderScreen} />

            <Route path='/patient/login' component={PatientLoginScreen} />
            <Route path='/patient/register' component={PatientRegisterScreen} />
            <Route path='/patient/profile' component={PatientProfileScreen} />
            <Route path='/patient/rdvs' component={PatientRdvScreen} />

            <Route path='/doctors/login' component={DoctorLoginScreen} />
            <Route path='/medcins' component={HomeScreen} />
            <Route path='/doctors/register' component={DoctorRegisterScreen} />
            <Route path='/doctors/doctorspace' component={DoctorSpaceScreen} />
            <Route path='/doctors/profile' component={DoctorProfileScreen} />
            <Route path='/doctors/patients' component={DoctorPatientsScreen} />
            <Route path='/doctors/rdvs' component={DoctorRdvScreen} />

            <Route path='/contact' component={Contact} />
            <Route path='/services' component={Services} />
            <Route path='/apropos' component={Apropos} />

          </Container>
        </main>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
