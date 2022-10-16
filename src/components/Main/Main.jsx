import React from 'react'
import "./Main.css";
import Card from "../Card/Card";
import data from "../../assests/data";

const Main = () => {
  return (
<div className="container-main">
 { data.map((a) => <Card {...a}/>) }  
</div>
  
)
  
}

export default Main 

//!datayi aldik obje olarak card a göndercez.nereye firlatcağimi yazdim-Card.