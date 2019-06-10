import React from 'react';
import Exams from '../components/exams/Exams';
import PageBase from '../components/PageBase';
import Data from '../data';

const ExamsPage = () => {

  return (
    <PageBase title="Consultas"
              navigation="Application / Consultas">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-15 ">
          <Exams data={Data.dashBoardPage.recentExams}/>
        </div>
      </div>

    </PageBase>
  );
};

export default ExamsPage;
