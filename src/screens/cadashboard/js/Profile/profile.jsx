import React, {Component} from 'react';
import CAProfile from "./CA_Profile/Viewprofile";
import IITRProfile from "./IITR_Profile/Viewprofile";
import NonIITRProfile from "./NonIITR_Profile/Viewprofile";
import ProfProfile from "./Proffesors_Profile/Viewprofile";
import ProfessProfile from "./Professonal_Profile/Viewprofile";

export default class Profile extends Component {


    render() {
        let profile = localStorage.getItem("profile");

        if (profile === "AMB") {
            return (<CAProfile/>);
        }

       else  if (profile === "IIT") {
            return (<IITRProfile/>);
        }

       else if (profile === "NONIIT") {
            return (<NonIITRProfile/>);
        }

        else if (profile === "PROF") {
            return (<ProfProfile/>);
        }


      else   if (profile === "CA") {
            return (<CAProfile/>);
        }


       else  if (profile === "PROFE") {
            return (<ProfessProfile/>);
        }

        else{
            return null;

        }

       
    }
}
