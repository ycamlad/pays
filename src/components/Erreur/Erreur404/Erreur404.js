import React from 'react';
import img404 from "../../../assets/images/error404.png"

const Erreur404 = (props) => {

    return (
        <div className={"text-center"}>
            <img src={img404} alt={'erreur 404'} width={"66%"} />
            <div>La pade demander n'existe pas</div>
        </div>
    );
};

export default Erreur404;
