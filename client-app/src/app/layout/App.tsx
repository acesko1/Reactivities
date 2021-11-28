import React, { Fragment } from 'react';
import { Container} from 'semantic-ui-react';
import Navbar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import HomePage from '../../features/home/HomePage';
import {Route, Routes, useLocation} from 'react-router-dom';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';



function App() {
  const location = useLocation();
  return (
    <Fragment>
        
        <Navbar />
        
        <Container style={{marginTop: '7em'}}>
          <Routes>
          <Route path='/' element={<HomePage />}></Route>
        <Route path='/activities' element={<ActivityDashboard />} />
        <Route path='/activities/:id' element={<ActivityDetails />} />
        <Route key={location.key} path={'/createActivity'} element={<ActivityForm />} />
        <Route key={location.key} path={'/manage/:id'} element={<ActivityForm />} />
        </Routes>
        </Container>
        
    </Fragment>
  );
}

export default observer(App);
