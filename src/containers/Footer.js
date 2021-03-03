import React from 'react';

const Footer = (props) => {
    return(
    <footer className="App-footer">
        <div className="row">
            {props.children}
        </div>
    </footer>
    )
}

export default Footer