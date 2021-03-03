import React from 'react';
import "./Input.css";
const input = (props) => {
    return(
        <div className="Input">
            <label>{props.children}</label>
            <input type={props.elementtype}  onChange={props.changed}/>
        </div>
    )
}

export default input