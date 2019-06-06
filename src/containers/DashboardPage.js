import React from 'react';
import {cyan600, pink600, purple600, orange600} from 'material-ui/styles/colors';
import Cirurgia from 'material-ui/svg-icons/communication/business';
import Favorite from 'material-ui/svg-icons/action/favorite';
import Book from 'material-ui/svg-icons/action/book';
import Hospital from 'material-ui/svg-icons/maps/local-hospital';
import InfoBox from '../components/dashboard/InfoBox';
import MonthlySales from '../components/dashboard/MonthlySales';
import RecentlyProducts from '../components/dashboard/RecentlyProducts';
import RecentlyExams from '../components/dashboard/RecentlyExams';
import globalStyles from '../styles';
import Data from '../data';

const DashboardPage = () => {

  return (
    <div>
      <h3 style={globalStyles.navigation}>Application / Dashboard</h3>

      <div className="row">

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={Hospital}
                   color={pink600}
                   title="Consultas"
                   value="3"
          />
        </div>


        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={Book}
                   color={cyan600}
                   title="Exames"
                   value="9"
          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={Favorite}
                   color={purple600}
                   title="Cirurgias"
                   value="0"
          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={Cirurgia}
                   color={orange600}
                   title="Internações"
                   value="1"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-15">
          <MonthlySales data={Data.dashBoardPage.monthlySales}/>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <RecentlyProducts data={Data.dashBoardPage.recentProducts}/>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <RecentlyExams data={Data.dashBoardPage.recentExams}/>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
