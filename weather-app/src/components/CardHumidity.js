import React from "react";

export default function Card(props) {
  return (
    <div className="card" >
      <h5 className="card-header">{props.heading}</h5>
      <div className="card-body">
        {/* <h5 className="card-title">Special title treatment</h5> */}
        <div className="card-title mx-1" style={{fontSize:"35px", marginTop:"10px"}}>{props.ip2} %</div>
        <div>
            <div>Humidity : {props.ip2}</div>
            <div>Feels like in C: {props.ip3}</div>
            <div>Feels like in F: {props.ip4}</div>
        </div>
        <div href="#" className="btn btn-primary" style={{width:"100%"}}>
          {props.btn_text}
        </div>
      </div>
    </div>
  );
}
