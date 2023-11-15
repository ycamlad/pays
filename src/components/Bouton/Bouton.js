import React from 'react';

const Bouton = (props) => {
    const btnCss= `btn btn-${props.typeBtn} `;
    return <button
        className={btnCss}
        onClick={props.clic}
        style={props.estSelection ? {opacity:1} : {opacity:0.7}}
        >
        {props.children}
    </button>
};

export default Bouton;
