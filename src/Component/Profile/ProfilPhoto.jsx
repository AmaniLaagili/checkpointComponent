import React from "react";
import img from "../../image/bebe.jpg";
import "./ProfilPhoto.css";
function ProfilPhoto() {
    return (
        <div>
            <img src={img} alt="this is my image" />
        </div>
    );
}

export default ProfilPhoto;
