import React from 'react';
import { Link } from "react-router-dom";

function Budapest() {

    return (
      <>

        <h1 id="title"><Link to='/'><i class="fas fa-arrow-alt-circle-left budapest-arrow"></i></Link><span id="hex-title">&nbsp;hex</span>anderson</h1>

        <img id='budapest-main-image' src='./images/GrandBudapestHotel1.jpeg' alt='characters from Grand Budapest Hotel in lobby together'/>

        <ul id="budapest-hexcodes">

            <div className="buda-hex1 hex1"><p>#4B0100</p></div>
            <div className="buda-hex2 hex2"><p>#900403</p></div>
            <div className="buda-hex3 hex3"><p>#4E1042</p></div>
            <div className="buda-hex4 hex4"><p>#806150</p></div>
            <div className="buda-hex5 hex5"><p>#C76B4F</p></div>
            <div className="buda-hex6 hex6"><p>#D8AA88</p></div>

        </ul>

        <br/>

        <div className='citation'>
          <h3>The Grand Budapest Hotel</h3>
          <h4>Wes Anderson, 2014</h4>
          <h6>American Empirical Pictures</h6>
        </div>
      </>
    );
  }
  
  export default Budapest;