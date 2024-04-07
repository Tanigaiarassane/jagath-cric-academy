import React from "react";
import Gallery1 from './../utils/img/1.jpg';
import Gallery2 from './../utils/img/2.jpg';
import Gallery3 from './../utils/img/3.jpg';
import Gallery4 from './../utils/img/4.jpg';
import Gallery5 from './../utils/img/5.jpg';
import Gallery6 from './../utils/img/6.jpg';
import Gallery7 from './../utils/img/7.jpg';
import Gallery8 from './../utils/img/8.jpg';


export function ImageGallery(){ 
    return(
<div className="container py-5">

<h2 className="text-center fs-1 mb-5 text-uppercase fw-bold">Image Gallery</h2>    
<div className="row">
    <div className="col-md-3 px-2">
        <div className="my-3">
            <img src={Gallery1} className="img-fluid"
            alt="" />
        </div>
    </div>

    <div className="col-md-3 px-2">
        <div className="my-3">
            <img src={Gallery2} className="img-fluid"
            alt="" />
        </div>
    </div>

    <div className="col-md-3 px-2">
        <div className="my-3">
            <img src={Gallery3} className="img-fluid"
            alt="" />
        </div>
    </div>    
 </div>
</div>
)}
