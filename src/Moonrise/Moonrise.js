import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Switch from '../Switch';
import './Moonrise.css';


function Moonrise() {

  const [colorPalette, setColorPalette] = useState(true);

    return (
      <>

        <div className={colorPalette ? "moon-body" : "moon-body-colorful"}>

        <Switch setColorPalette={setColorPalette} colorPalette={colorPalette}/>

        <p className={colorPalette ? 'moon-try-text' : 'moon-try-text-colorful'}>Try the <span className={colorPalette ?'strong-moon-try-text' : 'strong-moon-try-text-colorful'}>Moonrise Kingdom</span> palette.</p>

        <h1 id={colorPalette ? "moon-title" : "moon-title-colorful"}><Link to='/'><i className={colorPalette ? "fas fa-arrow-alt-circle-left moon-arrow" : "fas fa-arrow-alt-circle-left moon-arrow-alt"}></i></Link><span id={colorPalette ? "moon-hex-title" : "moon-hex-title-colorful"}>&nbsp;hex</span>anderson</h1>

        <img className={colorPalette ? "moon-border" : "moon-border-colorful"} id='moonrise-main-image' src='./images/MoonriseKingdom2.jpeg' alt='a girl holding flowers and a boy with a camping backpack hold a map in the middle of a green field'/>

        <ul id="moonrise-hexcodes">

            <div className={colorPalette ? "moon-hex1 hex1" : "moon-hex1-alt hex1"}><p>#195B4E</p></div>
            <div className={colorPalette ? "moon-hex2 hex2" : "moon-hex2-alt hex2"}><p>#617337</p></div>
            <div className={colorPalette ? "moon-hex3 hex3" : "moon-hex3-alt hex3"}><p>#B1A16A</p></div>
            <div className={colorPalette ? "moon-hex4 hex4" : "moon-hex4-alt hex4"}><p>#E1D06E</p></div>
            <div className={colorPalette ? "moon-hex5 hex5" : "moon-hex5-alt hex5"}><p>#C99A6B</p></div>
            <div className={colorPalette ? "moon-hex6 hex6" : "moon-hex6-alt hex6"}><p>#B27B7F</p></div>

        </ul>

        <hr className={colorPalette ? "moon-horizontal-line" : "moon-alt-horizontal-line"}/>

        <div className={colorPalette ? "moon-citation" : "moon-citation-colorful"}>
          <h3>Moonrise Kingdom</h3>
          <h4>Wes Anderson, 2012</h4>
          <h6>American Empirical Pictures</h6>
        </div>
        </div>

        <footer className={colorPalette ? "moon-footer" : "moon-footer-colorful"}>
        <h5>Designed & Coded with &#9829; by Taylor Overturf</h5>
        <h6>Seattle, Washington&nbsp; | &nbsp;November, 2021</h6>
        </footer>
        
      </>
    );
  }
  
  export default Moonrise;