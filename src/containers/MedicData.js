import React from 'react';
import InfoBox from '../components/dashboard/InfoBox';
import {red900} from 'material-ui/styles/colors';
import Alerggies from '../components/Alerggies';
import PageBase from '../components/PageBase';
import Book from 'material-ui/svg-icons/action/book';
import Data from '../data';

const MedicDataPage = () => {

  return (
    <PageBase title="Dados Médicos"
              navigation="Application / Dados Médicos">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <Alerggies data={Data.dashBoardPage.recentExams}/>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
         <InfoBox Icon={Book}
                   color={red900}
                   title="Tipo Sanguíneo"
                   value="A-"
          />
        </div>
      </div>

    </PageBase>
  );
};

export default MedicDataPage;
