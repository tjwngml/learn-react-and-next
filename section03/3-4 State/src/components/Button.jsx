import { useState } from "react";
import  "./Button.css";



export default function Button(){

  const [light, setLight] = useState("OFF");



//  const { text, color } = props;

  // console.log(props);

  return(
    <>
    <div>{light}</div>
    <button onClick={()=>{setLight("ON")}} className="button">켜기</button>
    <button onClick={()=>{setLight("OFF")}} className="button">끄기</button>
    </>
  );
}