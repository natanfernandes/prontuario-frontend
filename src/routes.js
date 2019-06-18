import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import SelectPerfilType from './containers/SelectPerfilType';
import MedicData from './containers/MedicData';
import Exams from './containers/Exams';
import Consults from './containers/Consults';
import Dashboard from './containers/DashboardPage';
import Surgeries from './containers/Surgeries';
import Internations from './containers/Internations';
import MedicConsult from './containers/MedicConsult';

export default (
  <Route>
    <Route path="/" component={LoginPage}/>
    <Route path="/perfilType" component={SelectPerfilType}/>
    <Route path="/" component={App}>
      {/* <IndexRoute component={Dashboard}/> */}
      <Route path="dashboard" component={Dashboard}/>
      <Route path="medicData" component={MedicData}/>
      <Route path="consults" component={Consults}/>
      <Route path="exams" component={Exams}/>
      <Route path="surgeries" component={Surgeries}/>
      <Route path="internations" component={Internations}/>
      <Route path="login" component={LoginPage}/>
      <Route path="medicConsult/:cpf_paciente" component={MedicConsult}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);
