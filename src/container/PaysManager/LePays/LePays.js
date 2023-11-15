import React from 'react';
import {NavLink} from "react-router-dom";

const LePays = (props) => {
    let content="";
    if(!props.solo){// montre tous les pays
        content=(
            <NavLink to={"/pays/"+props.nom}>Voir la fiche du pays</NavLink>
        );
    }else{
        content=(
            <div>
                <div>Population : {props.population}</div>
                <div>Frontiere : {props.border}</div>
            </div>
        )
    }
    return (
        <>
            <div className={"row gx border m-2 bg-opacity-25 bg-info"}>
                <div className={"col-4"}>
                    <img src={props.drapeau} width={"100%"} className={"p-2"} alt={props.nom}/>
                </div>
                <div className={"col"}>
                    <h2>Nom : {props.nomFrancais}</h2>
                    <div>Capitale : {props.capitale}</div>
                    <div>Region : {props.region}</div>
                    {content}
                </div>
            </div>

        </>
    );
};

export default LePays;
