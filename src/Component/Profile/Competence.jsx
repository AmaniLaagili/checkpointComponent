import React, { Fragment } from "react";
import "./Competence.css";
import image from "../../image/image1.PNG";
function Competence() {
    return (
        <Fragment>
            <h2 id="line">Competence</h2>

            <div className="competence">
                <div className="para3">
                    <p>Langage de Programmation:</p>
                    <p>Web:</p>
                    <p>Logiciels:</p>
                    <p>Bases de données:</p>
                </div>

                <div>
                    <p>Java8, C</p>
                    <p>ReactJs,ReactNative,HTML5,CSS3,Angular8 , PHP</p>
                    <p>
                        Adobe: Photoshop ,Illustrator , 3dsmax , Unity , Visual
                        code , eclipse
                    </p>
                    <p>Postgresql,Access , Oracle , SQL , MySQL</p>
                </div>
                <div className="imagecompetence">
                    <img src={image} alt="this is image" />
                </div>
            </div>
        </Fragment>
    );
}

export default Competence;
