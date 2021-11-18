import React from "react";
// import ReactDOM from "react-dom";
import './App.css';


function Switch(props) {

return (
    <>

    <p className='budapest-header'><span><i class="fas fa-eye budapest-eye" onClick={() => props.setColorPalette(!props.colorPalette)}></i>&nbsp;</span>Let's try it out!</p>

    </>
)


}

export default Switch;