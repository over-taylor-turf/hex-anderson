import React from 'react';
import { Link } from "react-router-dom";

function Home() {

    return (
      <>

        <h1 id="title"><span id="hex-title">&nbsp;hex</span>anderson</h1>
        
        <h3 className='homepage'>Pleasing hex code palettes inspired by Wes Anderson films.</h3>
        <br/>

      <div id='photo-wrapper'>

        <Link to='/budapest'><img className='budapest-small-image' src='./images/GrandBudapestHotel1.jpeg' alt='characters from Grand Budapest Hotel in lobby together'/></Link>

        <Link to='/moonrise'><img className='moonrise-small-image' src='./images/MoonriseKingdom.jpeg' alt='Suzy from Moonrise Kingdom looks out with her binoculars from a lighthouse on a clear day'/></Link>
        
        <Link to='/chevalier'><img className='chevalier-small-image' src='./images/HotelChevalier.jpeg' alt='Natalie Portman sits in a yellow hotel bed in a yellow hotel room with a yellow robe'/></Link>

      </div>
      </>
    );
  }
  
  export default Home;