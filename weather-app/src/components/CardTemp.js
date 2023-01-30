import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <h5 className="card-header">{props.heading}</h5>
      <div className="card-body">
        {/* <h5 className="card-title">Special title treatment</h5> */}
        <div className="d-flex flex-row justify-content-center ">
        <div className="card-title " style={{fontSize:"35px", marginTop:"10px"}}>{props.ip2}</div>
        <img src={props.ip1} style={{width:"20%"}} alt="degree"></img>
        </div>
        <div >
            <div>Temperature is : {props.ip2}</div>
            <div> Temperature in celcius is : {props.ip3}</div>
            <div>Temperature in fahrenheit is : {props.ip4}</div>
        </div>
        <div href="#" className="btn btn-primary" style={{width:"100%"}}>
          {props.btn_text}
        </div>
      </div>
    </div>
  );
}
