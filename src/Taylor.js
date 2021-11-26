import React from 'react';
import { Link } from "react-router-dom";

function Taylor() {

    return (
<>
<Link to='/'><i class="fas fa-arrow-alt-circle-left taylor-arrow"></i></Link>

<h1 className="intro-text">Hi, I'm Taylor.</h1>

<hr className="horizontal-line"/>

<img id='taylor-headshot' src='https://res.cloudinary.com/overturf/image/upload/v1633735267/P1033070_qs1l2w.jpg' alt='young woman in white t-shirt smiling' />

<p className="bio-text">I am a former educator with a Master’s Degree in Applied Linguistics from Columbia University. I am deeply curious about language acquisition—whether it be a human or computer language. As such, a career as a software engineer—with infinite frameworks, libraries and languages to learn—excites me as an individual and a professional. Like all languages, I write code with the intention of clear communication and collaboration with my community. I live with my dog, Uma Thurman, in Seattle, WA. When I'm not coding, I'm watching Wes Anderson films.
<br/>
<br/>
<a className="linkedin" href='https://www.linkedin.com/in/tayloroverturf/' target='_blank' rel='noreferrer'><i class="fab fa-linkedin"></i>&nbsp;LinkedIn</a>
</p>

<footer className="footer">
      <h5>Designed & Coded with <span className="heart">&#9829;</span> by Taylor Overturf</h5>
      <h6>Seattle, Washington&nbsp; | &nbsp;November, 2021</h6>
</footer>

</>

    );
}
    
    export default Taylor;