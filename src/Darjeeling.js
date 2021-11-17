import React from 'react';
import { Link } from "react-router-dom";

function Darjeeling() {

    return (
      <>

        <h1 id="title"><Link to='/'><i class="fas fa-arrow-alt-circle-left darjeeling-arrow"></i></Link><span id="hex-title">&nbsp;hex</span>anderson</h1>

        <img id='darjeeling-main-image' src='./images/DarjeelingLimited.jpeg' alt='characters from Grand Budapest Hotel in lobby together'/>

        <ul id="darjeeling-hexcodes">

            <div className="dar-hex1 hex1"><p>#0D6CE8</p></div>
            <div className="dar-hex2 hex2"><p>#8ACAF0</p></div>
            <div className="dar-hex3 hex3"><p>#ABBBC7</p></div>
            <div className="dar-hex4 hex4"><p>#687075</p></div>
            <div className="dar-hex5 hex5"><p>#3B5657</p></div>
            <div className="dar-hex6 hex6"><p>#B45E3B</p></div>

        </ul>

        <br/>

        <div className='citation'>
          <h3>The Darjeeling Limited</h3>
          <h4>Wes Anderson, 2007</h4>
          <h6>American Empirical Pictures</h6>
        </div>
      </>
    );
  }
  
  export default Darjeeling;