import React from 'react';
import classes from "./TitreH1.module.css";

const MyComponent = (props) => {
    const monCss = `${classes.policeTitre} border border-dark p-2 m-2 bg-primary rounded text-center text-white`;
    return (
        <>
            <h1 className={monCss} > {props.children}</h1>
        </>
    );
};

export default MyComponent;
