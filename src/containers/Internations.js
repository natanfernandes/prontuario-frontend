import React from 'react';
import Internations from '../components/internations/Internations';
import PageBase from '../components/PageBase';
import Data from '../data';

const InternationsPage = () => {

  return (
    <PageBase title="Internações"
              navigation="Application / Internações">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-15 ">
          <Internations data={Data.dashBoardPage.recentExams}/>
        </div>
      </div>

    </PageBase>
  );
};

export default InternationsPage;
