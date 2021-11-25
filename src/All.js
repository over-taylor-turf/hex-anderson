import React from 'react';
import { Link } from "react-router-dom";

function All() {

    return (
      <>
        <h1 id="title"><Link to='/'><i class="fas fa-arrow-alt-circle-left budapest-arrow"></i></Link><span id="hex-title">&nbsp;hex</span>anderson</h1>


        <div className="all-view1">

                <img id='budapest-main-image' src='./images/GrandBudapestHotel1.jpeg' alt='characters from Grand Budapest Hotel in lobby together'/>

                <ul id="budapest-hexcodes">

                    <div className="buda-hex1 hex1"><p>#4B0100</p></div>
                    <div className="buda-hex2 hex2"><p>#900403</p></div>
                    <div className="buda-hex3 hex3"><p>#4E1042</p></div>
                    <div className="buda-hex4 hex4"><p>#806150</p></div>
                    <div className="buda-hex5 hex5"><p>#C76B4F</p></div>
                    <div className="buda-hex6 hex6"><p>#D8AA88</p></div>

                </ul>

                <div className='buda-citation'>
                <h3>The Grand Budapest Hotel</h3>
                <h4>Wes Anderson, 2014</h4>
                <h6>American Empirical Pictures</h6>
                </div>

        </div>

        <hr className="horizontal-line"/>

                <div className='all-view2'>

                <img id='moonrise-main-image' src='./images/MoonriseKingdom2.jpeg' alt='a girl holding flowers and a boy with a camping backpack hold a map in the middle of a green field'/>

                <ul id="moonrise-hexcodes">

                    <div className="moon-hex1 hex1"><p>#195B4E</p></div>
                    <div className="moon-hex2 hex2"><p>#617337</p></div>
                    <div className="moon-hex3 hex3"><p>#B1A16A</p></div>
                    <div className="moon-hex4 hex4"><p>#E1D06E</p></div>
                    <div className="moon-hex5 hex5"><p>#C99A6B</p></div>
                    <div className="moon-hex6 hex6"><p>#B27B7F</p></div>

                </ul>

                <div className='moon-citation'>
                <h3>Moonrise Kingdom</h3>
                <h4>Wes Anderson, 2012</h4>
                <h6>American Empirical Pictures</h6>
                </div>

        </div>

        <hr className="horizontal-line"/>

        <div className='all-view3'>

                <img id='chevalier-main-image' src='./images/HotelChevalier.jpeg' alt='Natalie Portman sits in a yellow hotel bed in a yellow hotel room with a yellow robe'/>

                <ul id="chevalier-hexcodes">

                    <div className="chev-hex1 hex1"><p>#C68130</p></div>
                    <div className="chev-hex2 hex2"><p>#E0A517</p></div>
                    <div className="chev-hex3 hex3"><p>#CBB22F</p></div>
                    <div className="chev-hex4 hex4"><p>#6C6323</p></div>
                    <div className="chev-hex5 hex5"><p>#B69D87</p></div>
                    <div className="chev-hex6 hex6"><p>#E5DFE4</p></div>

                </ul>

                <div className='chev-citation'>
                <h3>Hotel Chevalier</h3>
                <h4>Wes Anderson, 2007</h4>
                <h6>American Empirical Pictures</h6>
                </div>

        </div>

        <hr className="horizontal-line"/>

        <div className='all-view4'>
                    
                <img id='darjeeling-main-image' src='./images/DarjeelingLimited.jpeg' alt='characters from Grand Budapest Hotel in lobby together'/>

                <ul id="darjeeling-hexcodes">

                    <div className="dar-hex1 hex1"><p>#0D6CE8</p></div>
                    <div className="dar-hex2 hex2"><p>#8ACAF0</p></div>
                    <div className="dar-hex3 hex3"><p>#ABBBC7</p></div>
                    <div className="dar-hex4 hex4"><p>#687075</p></div>
                    <div className="dar-hex5 hex5"><p>#3B5657</p></div>
                    <div className="dar-hex6 hex6"><p>#B45E3B</p></div>

                </ul>

                <div className='dar-citation'>
                <h3>The Darjeeling Limited</h3>
                <h4>Wes Anderson, 2007</h4>
                <h6>American Empirical Pictures</h6>
                </div>


        </div>

      </>
    );
  }
  
  export default All;