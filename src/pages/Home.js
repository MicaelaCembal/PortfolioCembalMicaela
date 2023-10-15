import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import "../styles/styles.css";
import Header from "../components/Header";
import AcercaDeMi from "../components/AcercaDeMi";
import Formulario from "../components/Formulario";
import Skills from "../components/Skills";

function Home() {
  return (
   <div>
    <Header/>
    <AcercaDeMi/>
     {/* <Skills/>*/} 
    <Formulario/>
      </div>
      
  );
}

export default Home;
