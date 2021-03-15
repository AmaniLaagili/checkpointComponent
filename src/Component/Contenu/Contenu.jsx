import React from "react";
import "./Contenu.css";
import Image from "../Profile/ProfilPhoto";
import Name from "../Profile/FullName";
import Adress from "../Profile/Address";
import Competence from "../Profile/Competence";
import Experience from "../Profile/Experience";
function Contenu() {
    return (
        <div className="container">
            <div className="logo">
                <Image />
            </div>
            <div className="header">
                <Competence />
            </div>
            <div className="nav">
                <Name />
            </div>
            <div className="content">
                <Experience />
            </div>
            <div className="footer">
                <Adress />
            </div>
        </div>
    );
}

export default Contenu;
