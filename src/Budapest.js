import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Switch from './Switch';

function Budapest() {

    // useState for the color scheme, default is off. 
    const [colorPalette, setColorPalette] = useState(true);

    return (
      <div className={colorPalette ? "buda-body" : "buda-body-colorful"}>

        <Switch setColorPalette={setColorPalette} colorPalette={colorPalette}/>

        <h1 id={colorPalette ? "title" : "title-colorful"}><Link to='/'><i class="fas fa-arrow-alt-circle-left budapest-arrow"></i></Link><span id={colorPalette ? "hex-title" : "hex-title-colorful"}>&nbsp;hex</span>anderson</h1>

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

        <div className={colorPalette ? "citation" : "citation-colorful"}>
          <h3>The Grand Budapest Hotel</h3>
          <h4>Wes Anderson, 2014</h4>
          <h6>American Empirical Pictures</h6>
        </div>
      </div>
    );
  }
  
  export default Budapest;