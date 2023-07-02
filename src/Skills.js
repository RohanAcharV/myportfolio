import React from 'react';
import intern from './images/campalin.png';
import nptel from './images/nptel.jpg';

function Skills(){
    const edu = [
        {
          degree: "SSLC (10th)",
          institute: "VijayaVittalaVidyashala , Mysuru",
          year: "2018",
          marks:"96%",
          additionalDet: ""
        },
        {
          degree: "PUC (12th)",
          institute: "Base PU College , Mysuru",
          year: "2020",
          marks:"89%",
          additionalDet: ""
        },
        {
          degree: "BE in CopmuterScience",
          institute: "JSSSTU , Mysuru",
          year: "2024",
          marks:"9.4 CGPA",
          additionalDet: "currently pursuing 6th sem"
        }
      ];
      
    const skills=[{category:"Programming Languages",skill:["Python","C","Java"]},
    {category:"Frontend Development",skill:["HTML","CSS","JavaScript","React"]},
    {category:"Backend Development",skill:["MySQL","MongoDB"]},
    {category:"Other Skills",skill:["Basic problem solving abilites","Data Structures","Algorithms"]}]
    
    const certificates=[{image:intern,name:"Internship Training Program (Web development)",from:"CAMPALIN"},{image:nptel,name:"Joy of Computing",from:"NPTEL Swyam"},]
    return(
        <div id="details">
            <div id="education" class="det">
                <h1>Education</h1>
                {
                    edu.map((e)=>(
                        <div class="edu">
                            <ul>
                                <li class="deg">{e.degree}</li>
                                <li>{e.institute}</li>
                                <li>{e.year}</li>
                                <li>{e.marks}</li>
                                <li>{e.additionalDet}</li>
                            </ul>
                        </div>
                    ))
                }
            </div>
            <div id='skills' class="det">
                <h1>Skills</h1>
                {
                    skills.map((s)=>(
                        <div class="edu">
                            <ul>
                                <li class="deg">{s.category}</li>
                                {
                                    (s.skill).map((i)=>(
                                        <li>{i}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>

            <div id="certificates" class="det">
            <h1>Courses and Certificates</h1>    
                    {
                        certificates.map((c)=>(
                            <div class="edu">
                            <div class="cert_img"><img src={c.image} alt="error"/></div>
                                <div class="cert_det">
                                    <ul>
                                    <li class="deg">{c.name}</li>
                                    <li>by {c.from}</li>
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
            </div> 
        </div>
    )
}

export default Skills;