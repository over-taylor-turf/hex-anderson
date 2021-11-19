import React from 'react';
import { Link } from "react-router-dom";

function Home() {

    return (
      <>

        <h1 id="title"><span id="hex-title">&nbsp;hex</span>anderson</h1>
        
        <h3 className='homepage'>Hex code palettes inspired by Wes Anderson films.</h3>
        <br/>

      <div id='photo-wrapper'>

        <Link to='/budapest'><img className='budapest-small-image' src='./images/GrandBudapestHotel1.jpeg' alt='characters from Grand Budapest Hotel in lobby together'/></Link>

        <Link to='/moonrise'><img className='moonrise-small-image' src='./images/MoonriseKingdom2.jpeg' alt='a girl holding flowers and a boy with a camping backpack hold a map in the middle of a green field'/></Link>
        
        <Link to='/chevalier'><img className='chevalier-small-image' src='./images/HotelChevalier.jpeg' alt='Natalie Portman sits in a yellow hotel bed in a yellow hotel room with a yellow robe'/></Link>

        <Link to='/darjeeling'><img className='darjeeling-small-image' src='./images/DarjeelingLimited.jpeg' alt='a blue train car room with two men, one helping the other light a cigarette'/></Link>

        {/* <Link to='/all'>View All</Link> */}

      </div>

      <footer className="buda-footer">
      <h5>Designed & Coded with &#9829; by Taylor Overturf</h5>
      <h6>Seattle, Washington&nbsp; | &nbsp;November, 2021</h6>
      </footer>

      </>
    );
  }
  
  export default Home;