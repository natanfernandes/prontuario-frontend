import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import MedicData from './containers/MedicData';
import Exams from './containers/Exams';
import Consults from './containers/Consults';
import TablePage from './containers/TablePage';
import Dashboard from './containers/DashboardPage';
import Surgeries from './containers/Surgeries';
import Internations from './containers/Internations';

export default (
  <Route>
    <Route path="login" component={LoginPage}/>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" component={Dashboard}/>
      <Route path="medicData" component={MedicData}/>
      <Route path="consults" component={Consults}/>
      <Route path="exams" component={Exams}/>
      <Route path="surgeries" component={Surgeries}/>
      <Route path="internations" component={Internations}/>
      <Route path="table" component={TablePage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);
