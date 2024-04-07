import React from "react";
import { MenuBtn } from "../components/MenuBtn";
import './Home.css';
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
                        flex-c  olumn
                        align-items-center">
                            <h2>Recent Event</h2>
                    <Carousel class="border-left-0"> 
                        <Carousel.Item interval={1500}> 
                            <img className="d-block w-300" src={image1} height="300"></img>
    
                    <Carousel.Caption> 
                        <h3>2023 Summer Camp Kickstarted</h3> 
                    </Carousel.Caption> 
                    </Carousel.Item> 
                    <Carousel.Item interval={1500}> 
                    <img className="d-block w-300" src={image1} height="300"></img>

                    <Carousel.Caption> 
                        <h3>Label for second slide</h3> 
                        <p>Sample Text for Image Two</p> 
                    </Carousel.Caption> 
                    </Carousel.Item> 
                </Carousel> 
                        </div>

                        </div>


                    <div className="row">
                        <div className="col-sm-6
                        d-flex d-sm-block
                        flex-column
                        align-items-upper">
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
                            <h2>Recent Event</h2>
                    <Carousel class="border-left-0"> 
                        <Carousel.Item interval={500}> 
                            <img className="d-block w-300" src={image1} height="300"></img>
    
                    <Carousel.Caption> 
                        <h3>2023 Summer Camp Kickstarted</h3> 
                    </Carousel.Caption> 
                    </Carousel.Item> 
                    <Carousel.Item interval={500}> 
                    <img className="d-block w-300" src={image1} height="300"></img>

                    <Carousel.Caption> 
                        <h3>Label for second slide</h3> 
                        <p>Sample Text for Image Two</p> 
                    </Carousel.Caption> 
                    </Carousel.Item> 
                </Carousel> 
                        </div>
                    </div>
                </div>
            </header>
        </div>

        </>
    )
}

export default Home;