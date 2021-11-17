import React from 'react';
import { Link } from "react-router-dom";

function Chevalier() {

    return (
      <>

        <h1 id="title"><Link to='/'><i class="fas fa-arrow-alt-circle-left chevalier-arrow"></i></Link><span id="hex-title">&nbsp;hex</span>anderson</h1>

        <img id='chevalier-main-image' src='./images/HotelChevalier.jpeg' alt='Natalie Portman sits in a yellow hotel bed in a yellow hotel room with a yellow robe'/>

        <ul id="chevalier-hexcodes">

            <div className="chev-hex1 hex1"><p>#C68130</p></div>
            <div className="chev-hex2 hex2"><p>#E0A517</p></div>
            <div className="chev-hex3 hex3"><p>#CBB22F</p></div>
            <div className="chev-hex4 hex4"><p>#6C6323</p></div>
            <div className="chev-hex5 hex5"><p>#B69D87</p></div>
            <div className="chev-hex6 hex6"><p>#E5DFE4</p></div>

        </ul>

        <br/>

        <div className='citation'>
          <h3>Hotel Chevalier</h3>
          <h4>Wes Anderson, 2007</h4>
          <h6>American Empirical Pictures</h6>
        </div>
      </>
    );
  }
  
  export default Chevalier;