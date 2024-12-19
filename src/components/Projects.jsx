import './project.css';
import React from 'react';
import timeline from '../assets/upcoming.gif';
import betting from '../assets/betting.png';
import snake from '../assets/snake.png';
import pong from '../assets/pong.png';
import cmsats from '../assets/cmsats.png';
import icar from '../assets/icar.jpg';
import lawyer from '../assets/lawyer.jpg';
import calc from '../assets/calc.png';
import file from '../assets/file.png';
import bmi from '../assets/bmi.png';
import chatapp from  '../assets/chatapp.png';
import acct from '../assets/acct.jpg';
function Project() {
    return (
        <div className='Projects'>
            <div className="cover">
                <h1>Timeline</h1>
                <img src={timeline}></img>
            </div>

            <div className="Timeline">
                <div className="container left-container">
                <div className="border"></div>
                </div>
                <div className="container left-container">
                    <div className="pointer">
                    </div>
                    
                    <div className="card">
                        <div className="title">Betting Game</div>
                        <div className="date">Nov. 2023</div>
                    </div>
                    <div className="content">
                        <div className="description">
                            <p>Simple Python Game using Tkinter and Turtle</p>
                        </div>
                        <div className="picture">
                            <img src={betting}></img>
                        </div>
                    </div>  
                </div>
                
                <div className="container right-container">
                    <div className="pointer">
                    </div>
                    
                    <div className="card">
                        <div className="title">Snake Game</div>
                        <div className="date">Nov. 2023</div>
                    </div>
                    <div className="content">
                        <div className="description">
                        <p>A Python Game made using concepts of Tkinter OOP and Turtle</p>
                        </div>
                        
                        <div className="picture">
                            <img src={snake}></img>
                        </div>
                    </div>
                </div>
                <div className="container left-container">
                    <div className="pointer">    
                    </div>
                    
                    <div className="card">
                        
                        <div className="title">Pong Game</div>
                        <div className="date">Dec. 2023</div>
                    
                    </div>
                    <div className="content">
                        <div className="description">
                        <p>A Python Game made using concepts of Tkinter OOP and Turtle</p>
                        </div>
                        <div className="picture">
                            <img src={pong}></img>
                        </div>
                    </div>  
                </div>
                <div className="container right-container">
                    <div className="pointer">
                    </div>
                    
                    <div className="card">
                        
                        <div className="title">CMSATS</div>
                        <div className="date">May 2024</div>
                    </div>
                    <div className="content">
                        <div className="description">
                            <p>A website made using holistic approach for club management & student achievement tracking built-on HTML CSS JS PHP</p>
                        </div>
                        <div className="picture">
                            <img src={cmsats}></img>
                        </div>
                    </div>
                </div>
                <div className="container left-container" id='internship'>
                    <div className="pointer">    
                    </div>
                    
                    <div className="card">
                        
                        <div className="title">INTERNSHIP ICAR</div>
                        <div className="date">June. 2024</div>
                    
                    </div>
                    <div className="content">
                        <div className="description">
                        <p>Developed a Multilingual AI based Chatbot to assist Farmers across the country.</p>
                        </div>
                        <div className="picture">
                            <img src={icar}></img>
                        </div>
                    </div>  
                </div>
                <div className="container right-container">
                    <div className="pointer">
                    </div>
                    
                    <div className="card">
                        
                        <div className="title">Virtual Lawyer</div>
                        <div className="date">Oct. 2024</div>
                    </div>
                    <div className="content">
                        <div className="description">
                            <p>A system that uses web scraping + EDA + Machine Learning to work as an infopedia for Lawyers.</p>
                        </div>
                        <div className="picture">
                            <img src={lawyer}></img>
                        </div>
                    </div>
                </div>
                <div className="container left-container">
                    <div className="pointer">    
                    </div>
                    
                    <div className="card">
                        
                        <div className="title">Graphing Calculator</div>
                        <div className="date">Nov. 2024</div>
                    
                    </div>
                    <div className="content">
                        <div className="description">
                        <p>A Graphing Calculator made using YACC and LEX.</p>
                        </div>
                        <div className="picture">
                            <img src={calc}></img>
                        </div>
                    </div>  
                </div>
                <div className="container right-container">
                    <div className="pointer">
                    </div>
                    
                    <div className="card">
                        
                        <div className="title">File Manager</div>
                        <div className="date">Nov. 2024</div>
                    </div>
                    <div className="content">
                        <div className="description">
                            <p>A file Manager for Ubuntu that uses Socket programming and process synchronisation with custom GUI.</p>
                        </div>
                        <div className="picture">
                            <img src={file}></img>
                        </div>
                    </div>
                </div>
                <div className="container left-container">
                    <div className="pointer">    
                    </div>
                    
                    <div className="card">
                        
                        <div className="title">Chat Application</div>
                        <div className="date">Nov. 2024</div>
                    
                    </div>
                    <div className="content">
                        <div className="description">
                        <p>Designed a real time chat application that uses websockets and P2P communication.</p>
                        </div>
                        <div className="picture">
                            <img src={chatapp}></img>
                        </div>
                    </div>  
                </div>
                <div className="container right-container">
                    <div className="pointer">    
                    </div>
                    
                    <div className="card">
                        
                        <div className="title">BMI Predictor</div>
                        <div className="date">Dec. 2024</div>
                    
                    </div>
                    <div className="content">
                        <div className="description">
                        <p>Fine Tuned MobileNetV2 Model on about 65K multi-sided images to predict BMI and Gender</p>
                        </div>
                        <div className="picture">
                            <img src={bmi}></img>
                        </div>
                    </div>  
                </div>
                <div className="container left-container" id='internship'>
                    <div className="pointer">    
                    </div>
                    
                    <div className="card">
                        
                        <div className="title">INTERNSHIP ACCENTURE</div>
                        <div className="date">May 2025</div>
                    
                    </div>
                    <div className="content">
                        <div className="description">
                        <p>Upcoming</p>
                        </div>
                        <div className="picture">
                            <img src={acct}></img>
                        </div>
                    </div>  
                </div>
            </div>


        </div>
    )
};
export default Project;