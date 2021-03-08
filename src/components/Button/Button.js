import React from 'react';
import "./Button.css";
const button = (props) => {
    return(
        <div className="Button">
            <button 
            onClick={props.clicked}
            disabled={props.disabled}>{props.children}</button>
        </div>
    )
}

export default button