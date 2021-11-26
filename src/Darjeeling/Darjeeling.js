import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Switch from '../Switch';
import './Darjeeling.css';

function Darjeeling() {

  const [colorPalette, setColorPalette] = useState(true);

    return (
      <>

      <div className={colorPalette ? "dar-body" : "dar-body-colorful"}>

      <Switch setColorPalette={setColorPalette} colorPalette={colorPalette}/>

      <p className={colorPalette ? 'dar-try-text' : 'dar-try-text-colorful'}>Try <span className={colorPalette ?'strong-dar-try-text' : 'strong-dar-try-text-colorful'}>The Darjeeling Limited</span> palette.</p>

      <h1 id={colorPalette ? "dar-title" : "dar-title-colorful"}><Link to='/'><i className={colorPalette ? "fas fa-arrow-alt-circle-left dar-arrow" : "fas fa-arrow-alt-circle-left dar-arrow-alt"}></i></Link><span id={colorPalette ? "dar-hex-title" : "dar-hex-title-colorful"}>&nbsp;hex</span>anderson</h1>

        <img id='darjeeling-main-image'className={colorPalette ? "dar-border" : "dar-border-colorful"} src='./images/DarjeelingLimited.jpeg' alt='characters from Grand Budapest Hotel in lobby together'/>

        <ul id="darjeeling-hexcodes">

            <div className={colorPalette ? "dar-hex1 hex1" : "dar-hex1-alt hex1"}><p>#0D6CE8</p></div>
            <div className={colorPalette ? "dar-hex2 hex2" : "dar-hex2-alt hex2"}><p>#8ACAF0</p></div>
            <div className={colorPalette ? "dar-hex3 hex3" : "dar-hex3-alt hex3"}><p>#ABBBC7</p></div>
            <div className={colorPalette ? "dar-hex4 hex4" : "dar-hex4-alt hex4"}><p>#687075</p></div>
            <div className={colorPalette ? "dar-hex5 hex5" : "dar-hex5-alt hex5"}><p>#3B5657</p></div>
            <div className={colorPalette ? "dar-hex6 hex6" : "dar-hex6-alt hex6"}><p>#B45E3B</p></div>

        </ul>

        <hr className={colorPalette ? "dar-horizontal-line" : "dar-alt-horizontal-line"}/>

        <div className={colorPalette ? "dar-citation" : "dar-citation-colorful"}>
          <h3>The Darjeeling Limited</h3>
          <h4>Wes Anderson, 2007</h4>
          <h6>American Empirical Pictures</h6>
        </div>
        </div>

        <footer className={colorPalette ? "dar-footer" : "dar-footer-colorful"}>
        <h5>Designed & Coded with &#9829; by Taylor Overturf</h5>
        <h6>Seattle, Washington&nbsp; | &nbsp;November, 2021</h6>
        </footer>

      </>
    );
  }
  
  export default Darjeeling;