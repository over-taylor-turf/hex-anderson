import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Switch from '../Switch';
import './Chevalier.css';

function Chevalier() {

  const [colorPalette, setColorPalette] = useState(true);

    return (
      <>

        <div className={colorPalette ? "chev-body" : "chev-body-colorful"}>

        <Switch setColorPalette={setColorPalette} colorPalette={colorPalette}/>

        <p className={colorPalette ? 'chev-try-text' : 'chev-try-text-colorful'}>Try the <span className={colorPalette ?'strong-chev-try-text' : 'strong-chev-try-text-colorful'}>Hotel Chevalier</span> palette.</p>
        
        <h1 id={colorPalette ? "chev-title" : "chev-title-colorful"}><Link to='/'><i className={colorPalette ? "fas fa-arrow-alt-circle-left chev-arrow" : "fas fa-arrow-alt-circle-left chev-arrow-alt"}></i></Link><span id={colorPalette ? "chev-hex-title" : "chev-hex-title-colorful"}>&nbsp;hex</span>anderson</h1>

        <img id='chevalier-main-image' className={colorPalette ? "chev-border" : "chev-border-colorful"} src='./images/HotelChevalier.jpeg' alt='Natalie Portman sits in a yellow hotel bed in a yellow hotel room with a yellow robe'/>

        <ul id="chevalier-hexcodes">

            <div className={colorPalette ? "chev-hex1 hex1" : "chev-hex1-alt hex1"}><p>#C68130</p></div>
            <div className={colorPalette ? "chev-hex2 hex2" : "chev-hex2-alt hex2"}><p>#E0A517</p></div>
            <div className={colorPalette ? "chev-hex3 hex3" : "chev-hex3-alt hex3"}><p>#CBB22F</p></div>
            <div className={colorPalette ? "chev-hex4 hex4" : "chev-hex4-alt hex4"}><p>#6C6323</p></div>
            <div className={colorPalette ? "chev-hex5 hex5" : "chev-hex5-alt hex5"}><p>#B69D87</p></div>
            <div className={colorPalette ? "chev-hex6 hex6" : "chev-hex6-alt hex6"}><p>#E5DFE4</p></div>

        </ul>
        
        <hr className={colorPalette ? "chev-horizontal-line" : "chev-alt-horizontal-line"}/>

        <div className={colorPalette ? "chev-citation" : "chev-citation-colorful"}>
          <h3>Hotel Chevalier</h3>
          <h4>Wes Anderson, 2007</h4>
          <h6>American Empirical Pictures</h6>
        </div>
        </div>

        <footer className={colorPalette ? "chev-footer" : "chev-footer-colorful"}>
        <h5>Designed & Coded with &#9829; by Taylor Overturf</h5>
        <h6>Seattle, Washington&nbsp; | &nbsp;November, 2021</h6>
        </footer>
        
      </>
    );
  }
  
  export default Chevalier;