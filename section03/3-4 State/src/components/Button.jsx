import { useState } from "react";
import  "./Button.css";



export default function Button(){

  const [light, setLight] = useState("OFF");

  

//  const { text, color } = props;

  // console.log(props);

  return(
    <>
    <button onClick={()=>{setLight("ON")}} className="button">{light}</button>
    </>
  );
}