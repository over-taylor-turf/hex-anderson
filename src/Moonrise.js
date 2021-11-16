import React from 'react';
import { Link } from "react-router-dom";


function Moonrise() {

    return (
      <>

        <h1 id="title"><Link to='/'><i class="fas fa-arrow-alt-circle-left moonrise-arrow"></i></Link><span id="hex-title">&nbsp;hex</span>anderson</h1>

        <img id='moonrise-main-image' src='./images/MoonriseKingdom.jpeg' alt='Suzy from Moonrise Kingdom looks out with her binoculars from a lighthouse on a clear day'/>

        <ul id="moonrise-hexcodes">

            <div className="moon-hex1 hex1"><p>#F69B3F</p></div>
            <div className="moon-hex2 hex2"><p>#AA4808</p></div>
            <div className="moon-hex3 hex3"><p>#F2E3A3</p></div>
            <div className="moon-hex4 hex4"><p>#E6D494</p></div>
            <div className="moon-hex5 hex5"><p>#AEBDAA</p></div>
            <div className="moon-hex6 hex6"><p>#94AEA4</p></div>

        </ul>

        <br/>

        <div className='citation'>
          <h3>Moonrise Kingdom</h3>
          <h4>Wes Anderson, 2012</h4>
          <h6>American Empirical Pictures</h6>
        </div>
      </>
    );
  }
  
  export default Moonrise;