import React  from "react";
import { Link } from "react-router-dom";

export function MenuBtn(){
    return(
        <div>
            <Link to="/accomplishment">
            <button type="button" className="btn 
            btn-success btn-lg" >Our Lauerls</button>
            </Link>
        </div>
    )
}