import React from 'react';

function About(){
    const details={
        name:"Rohan",
        desc:"Aspiring front-end web developer with a growing proficiency in backend development and a passion for creative problem-solving. Dedicated to crafting engaging user experiences through modern design and continuously expanding my skills in both front-end and backend development.",
        mobile:"7829926870",
        email:"rohanacharv@gmail.com"
    }

    function downcv(){
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/file/d/19BqBPiBCfeGuQivT65JoRCigwIgg2Hv0/view?usp=sharing'; 
        link.download = 'cv.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return(
        <div id="about">
            <div id="info">
                <div id="image"></div>
                <div id="det"><h1>Hi I am <span id="name">{details.name} </span> !</h1>
                <h2>{details.desc}</h2>
                </div>

            </div>
            <button id="resume" onClick={downcv}>Download CV</button>
            <footer>
                <div id="contact">
                <h2>Contact me </h2>
                    <h3><span>Phone: </span>{details.mobile}</h3>
                    <h3><span>Email: </span>{details.email}</h3>
                </div>
            </footer>
        </div>
    )
}

export default About;