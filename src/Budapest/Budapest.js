import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Switch from '../Switch';
import './Budapest.css';

function Budapest() {

    const [colorPalette, setColorPalette] = useState(true);


    return (
      <>

      <div className={colorPalette ? "buda-body" : "buda-body-colorful"}>

        <Switch setColorPalette={setColorPalette} colorPalette={colorPalette}/>
        
        <p className={colorPalette ? 'buda-try-text' : 'buda-try-text-colorful'}>Try <span className={colorPalette ?'strong-buda-try-text' : 'strong-buda-try-text-colorful'}>The Grand Budapest Hotel</span> palette.</p>

        <h1 id={colorPalette ? "buda-title" : "buda-title-colorful"}><Link to='/'><i className={colorPalette ? "fas fa-arrow-alt-circle-left budapest-arrow" : "fas fa-arrow-alt-circle-left budapest-arrow-alt"}></i></Link><span id={colorPalette ? "buda-hex-title" : "buda-hex-title-colorful"}>&nbsp;hex</span>anderson</h1>

        <img className={colorPalette ? "buda-border" : "buda-border-colorful"} id='budapest-main-image' src='./images/GrandBudapestHotel1.jpeg' alt='characters from Grand Budapest Hotel in lobby together'/>

        <ul id="budapest-hexcodes">

            <div className={colorPalette ? "buda-hex1 hex1" : "buda-hex1-alt hex1"}><p>#4B0100</p></div>
            <div className={colorPalette ? "buda-hex2 hex2" : "buda-hex2-alt hex2"}><p>#900403</p></div>
            <div className={colorPalette ? "buda-hex3 hex3" : "buda-hex3-alt hex3"}><p>#4E1042</p></div>
            <div className={colorPalette ? "buda-hex4 hex4" : "buda-hex4-alt hex4"}><p>#806150</p></div>
            <div className={colorPalette ? "buda-hex5 hex5" : "buda-hex5-alt hex5"}><p>#C76B4F</p></div>
            <div className={colorPalette ? "buda-hex6 hex6" : "buda-hex6-alt hex6"}><p>#D8AA88</p></div>

        </ul>

        <br/>

        <div className={colorPalette ? "citation" : "citation-colorful"}>
          <h3>The Grand Budapest Hotel</h3>
          <h4>Wes Anderson, 2014</h4>
          <h6>American Empirical Pictures</h6>
        </div>
      </div>

      <footer className={colorPalette ? "buda-footer" : "buda-footer-colorful"}>
      <h5>Designed & Coded with &#9829; by Taylor Overturf</h5>
      <h6>Seattle, Washington&nbsp; | &nbsp;November, 2021</h6>
      </footer>

      </>

    );
  }
  
  export default Budapest;