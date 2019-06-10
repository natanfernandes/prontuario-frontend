import React from 'react';
import Consults from '../components/consults/Consults';
import PageBase from '../components/PageBase';
import Data from '../data';

const MedicData = () => {

  return (
    <PageBase title="Consultas"
              navigation="Application / Consultas">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-15 ">
          <Consults data={Data.dashBoardPage.recentExams}/>
        </div>
      </div>

    </PageBase>
  );
};

export default MedicData;
