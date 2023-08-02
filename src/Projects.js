import React, { useState } from 'react';

function Projects(){
    const projects=[{title:"Online Movie Booking platform",desc:"The Online Movie Booking System is a web application developed as a demonstration project to showcase the functionality of an online movie booking platform. It is built using HTML, CSS, JavaScript, PHP, and MySQL. The system allows users to register and log in to their accounts. Once logged in, users can browse through a selection of available movies, view showtimes, and book tickets for their preferred shows. The system also provides the option to order snacks for the movie screening. Payments are simulated in the demonstration, allowing users to go through the payment process to complete their bookings. Additionally, the system includes administrative features that enable administrators to manage movie listings, snack items, and view the total collections generated from movie bookings. Please note that this project does not involve real transactions or actual payment processing, but serves as a demonstration of the functionality one would expect from an online movie booking system.",github:"https://github.com/RohanAcharV/movie",project:"abc.html"},
    {title:"Language Detection ML project",desc:"The Language Detection project is a machine learning-based application that accurately identifies the language of a given text. The project utilizes a comprehensive dataset consisting of text samples from 17 different languages. To ensure accurate language detection, the project undergoes several crucial steps. Firstly, the independent and dependent features are separated, followed by label encoding for efficient processing. Text preprocessing techniques are applied to cleanse and standardize the data. The dataset is then split into training and testing sets to assess the model's accuracy. Using the Naive Bayes algorithm, the model is trained to predict the language based on the provided text. Evaluation metrics are employed to measure the model's performance. Finally, the trained model is utilized to predict the language of new data, providing seamless language detection capabilities.",github:"https://github.com/RohanAcharV/language_detection",project:"abc.html"},
    {title:"Offline Store Management",desc:"The Offline Store Management project is a comprehensive solution designed to streamline and automate the operations of a physical retail store, similar to a supermarket. Built using HTML, CSS, JavaScript, PHP, and MySQL, the project offers a range of essential features. It enables the store owner to monitor and analyze total sales and profits through intuitive visualizations presented in pie charts. The system provides detailed insights into individual product categories, including the quantity of products sold, remaining stock, and the profit gained. Additionally, the project offers daily and monthly reports to track sales performance over time. Store management tasks such as adding stocks and new items are seamlessly handled within the system. It also provides the functionality to store customer information and generate bills, facilitating smooth checkout processes. The ability to add products to a cart and print bills further enhances the overall shopping experience. With its user-friendly interface and robust functionality, the Offline Store Management project empowers store owners to efficiently manage inventory, track sales, and provide exceptional customer service.",github:"https://github.com/RohanAcharV/store",project:"abc.html"},
    {title:"Interactive Learning Platform",desc:"The Interactive Learning Platform is a web-based application built with React, Express, and MongoDB Atlas, aimed at enhancing the learning experience for students and fostering effective communication between students and teachers. The project focuses on two main objectives: improving learning outcomes and facilitating communication. The platform offers interactive quizzes and topic-wise practice sessions to engage students actively and consolidate their knowledge. It also enables seamless communication through features like group formation, quiz events, and score monitoring. Teachers can provide personalized guidance, while students can ask questions and seek clarifications. The platform visualizes students' progress, motivating them by highlighting their strengths and areas for improvement. With its comprehensive quiz functionality, targeted practice sessions, and two-way communication capabilities, the Interactive Learning Platform empowers students to enhance their skills and knowledge in a collaborative learning environment.",github:"abc.html",project:"abc.html"}]
    
    const [readmore,setreadmore]=useState(projects.map((p)=>true))

    const togglepara=(bool,index)=>{
        const newreadmore=[...readmore]
        newreadmore[index]=bool
        setreadmore(newreadmore)
    }
    
    const paragraph=(para,index)=>{
        if(readmore[index]===false){
            return <p>{para} <span><button class="readmore" onClick={()=>togglepara(true,index)}>show less..</button></span></p>
        }
        else{
            const shorttext = para.split(' ').slice(0, 20).join(' ');
            return <p>{shorttext} <span><button class="readmore" onClick={()=>togglepara(false,index)}>read more...</button></span></p>
        }
    }
    return(
        <div id="projects">
            {
                projects.map((p,index)=>(
                    <div class="proj">
                        <h1 class="p_tit">{p.title}</h1>
                        {/* <p>{p.desc}</p> */}
                        {paragraph(p.desc,index)}
                        <a href={p.github} class="githublink">View code on Github</a>
                        <a href={p.project} class="projectlink">View project</a>
                    </div>
                ))
            }
        </div>
    )
}

export default Projects;

