import React from 'react';
import { Link } from "react-router-dom";


function Moonrise() {

    return (
      <>

        <h1 id="title"><Link to='/'><i class="fas fa-arrow-alt-circle-left moonrise-arrow"></i></Link><span id="hex-title">&nbsp;hex</span>anderson</h1>

        <img id='moonrise-main-image' src='./images/MoonriseKingdom2.jpeg' alt='a girl holding flowers and a boy with a camping backpack hold a map in the middle of a green field'/>

        <ul id="moonrise-hexcodes">

            <div className="moon-hex1 hex1"><p>#195B4E</p></div>
            <div className="moon-hex2 hex2"><p>#617337</p></div>
            <div className="moon-hex3 hex3"><p>#B1A16A</p></div>
            <div className="moon-hex4 hex4"><p>#E1D06E</p></div>
            <div className="moon-hex5 hex5"><p>#C99A6B</p></div>
            <div className="moon-hex6 hex6"><p>#B27B7F</p></div>

        </ul>

        <br/>

        <div className='citation'>
          <h3>Moonrise Kingdom</h3>
          <h4>Wes Anderson, 2012</h4>
          <h6>American Empirical Pictures</h6>
        </div>

        <footer className="buda-footer">
        <h5>Designed & Coded with &#9829; by Taylor Overturf</h5>
        <h6>Seattle, Washington&nbsp; | &nbsp;November, 2021</h6>
        </footer>
        
      </>
    );
  }
  
  export default Moonrise;