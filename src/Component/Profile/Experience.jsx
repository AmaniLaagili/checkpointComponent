import React, { Fragment } from "react";
import video from "../../video/GoMyCode.mp4";
import "./Experience.css";
function Experience() {
    return (
        <Fragment>
            <div className="menuexperience">
                <main>
                    <div>
                        <video controls className="videoExperience">
                            <source src={video} type="video/mp4"></source>
                        </video>
                        <p id="videoExperience">Video GoMyCode</p>
                    </div>
                    <textarea
                        id="textexperience"
                        cols="30"
                        rows="5"
                        placeholder="you can insert you comment here ..."
                    ></textarea>
                </main>
                <aside className="classexperience">
                    <video controls className="videoExperience1">
                        <source src={video} type="video/mp4"></source>
                    </video>
                    <video controls className="videoExperience1">
                        <source src={video} type="video/mp4"></source>
                    </video>
                </aside>
            </div>
        </Fragment>
    );
}

export default Experience;
