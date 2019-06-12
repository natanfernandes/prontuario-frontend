import React from "react";
import Avatar from "material-ui/Avatar";
import InfoBox from "../components/dashboard/InfoBox";
import { red900 } from "material-ui/styles/colors";
import Alerggies from "../components/Alerggies";
import ChronicDiseases from "../components/Diseases";
import PageBase from "../components/PageBase";
import RaisedButton from 'material-ui/RaisedButton';
import Book from "material-ui/svg-icons/action/book";
import Data from "../data";

const MedicConsult = () => {

  return (
    <PageBase
      title="Informações do Paciente"
      navigation="Application / Consulta"
    >
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <div className="row">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{textAlign:'center',marginTop:'2%'}}>
              <Avatar src={require("../images/pacient.png")} size={64} />
            </div>
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
              <p>Nome : XXXXXXXX</p>
              <p>Idade : 25</p>
            </div>
          </div>
          
        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <InfoBox
            Icon={Book}
            color={red900}
            title="Tipo Sanguíneo"
            value="A-"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <Alerggies data={Data.dashBoardPage.recentExams} />
        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <ChronicDiseases data={Data.dashBoardPage.recentExams} />
        </div>
      </div>
       <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-15 ">
          <RaisedButton primary={true} label="Finalizar Consulta" fullWidth={true} />
        </div>
      </div>
    </PageBase>
  );
};

export default MedicConsult;
