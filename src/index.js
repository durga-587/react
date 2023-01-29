import React from "react";
import ReactDOM from "react-dom";
import Heading from "./heading";
import Para from "./paragraph";
import img from "./google.jpg";
import img1 from "./sves.jpg";
//import  { useState } from 'react';
const Greeting = () => {
  let message="welcome page";
  let message1="This is the page all about ReactJs";
    return (
    <div>
      <Heading banana={message}></Heading>
      <Para example={message1} />
      <ol>
        <li>WEBPAGE CONTENTS-1</li>
        <li>WEBPAGE CONTENTS-2</li>
        <li>WEBPAGE CONTENTS-3</li>
      </ol>
      <h2>GOOGLE WEBSITE..</h2>
      <img src={img} alt="nothing" width="150" height="150"/><br/>
      <button><a href ="https://www.google.com/" >google</a></button><br/>
      <h2>SVEC COLLEGE WEBSITE..</h2>
      <img src={img1} alt="nothing" width="150" height="150"/><br/>
      <button><a href ="https://sves.org.in/">svec</a></button>
    </div>
    );
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting/>);