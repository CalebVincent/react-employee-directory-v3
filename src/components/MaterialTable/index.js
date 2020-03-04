import React, {useContext} from "react";
import "./style.css";

export default function Table(props) {
    
    return (
        <div>
            <div className="container">
                <div>{props.first} {props.last}</div>
                <div>{props.role}</div>
            </div>
        </div>
    )
}