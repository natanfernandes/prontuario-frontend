import React from 'react';
import Surgeries from '../components/surgeries/Surgeries';
import PageBase from '../components/PageBase';
import Data from '../data';

const SurgeriesPage = () => {

  return (
    <PageBase title="Cirurgias"
              navigation="Application / Cirurgias">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-15 ">
          <Surgeries data={Data.dashBoardPage.recentExams}/>
        </div>
      </div>

    </PageBase>
  );
};

export default SurgeriesPage;
