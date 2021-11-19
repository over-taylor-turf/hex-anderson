import React from "react";
import './App.css';


function Switch(props) {

return (
    <>

    <p className='budapest-header'>
        <span>
            <i className='fas fa-eye budapest-eye' onClick={() => props.setColorPalette(!props.colorPalette)}>
                </i>&nbsp;
        </span></p>

    </>
)

}

export default Switch;