import React from "react";
import { MenuBtn } from "../components/MenuBtn";
import './Home.css';
import './About.css';

import  Carousel from 'react-bootstrap/Carousel'
import image1 from './../utils/img/1.jpeg'
function Home(){
    return(
        <>            
       
        <div className="home-page">
        <header className="h-100 min-vh-100
            d-flex align-items-center text-light
            shadow">
                <div className="container">
                <div className="row">
                <div className="col-sm-12">
                <p className="d-block p-2  text-black">Our endeavout is to impart quality cricket coaching through proper techniqe
                Our endeavout is to impart quality cricket coaching through proper techniqe
                Our endeavout is to impart quality cricket coaching through proper techniqe
                Our endeavout is to impart quality cricket coaching through proper techniqe
                Our endeavout is to impart quality cricket coaching through proper techniqe</p>
                    </div>
                 </div>   
                    <div className="row">
                        <div className="col-sm-6">
                            <h2 className="mb-0
                            text-black text-left
                            fw-bold">Welcome To</h2>
                            <h1 className="mb-5
                            text-black fw-bold
                            text-left
                            text-sm-smart">Jagat Cricket Academy</h1>
                            <MenuBtn/>
            
                        </div>

                        <div className="col-sm-6
                        d-flex d-sm-block
                        flex-column
                        align-items-center">
                            <div className="d-block p-2 bg-success text-white">Recent Event</div>

                             <Carousel class="border border-primary"> 
                                <Carousel.Item interval={1500}> 
                                <img className="d-block w-400" src={image1}></img>
    
                            <Carousel.Caption> 
                            <h4>2023 Summer Camp Kickstarted</h4> 
                        </Carousel.Caption> 
                    </Carousel.Item> 
                    <Carousel.Item interval={1500}> 
                                <img className="d-block w-400" src={image1}></img>
                        <Carousel.Caption> 
                            <h4>2023 Summer Camp Kickstarted</h4> 
                        </Carousel.Caption> 
                    </Carousel.Item> 
                </Carousel> 
                </div>



                    </div>
                 
            
                </div>

                </header>
    
        </div>

        <div className="about-page">
        <header className="h-75 min-vh-100
            d-flex  text-light
            shadow">
        <div className="container my-5">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column">
                        <h2 className="text-black">About US</h2>
                    </div>
                </div>
            </div>
        </header>
        </div>
        </>
    )
}

export default Home;