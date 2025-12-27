import { use, useState } from "react";

function Ligthbulb({light}) {
  return ( 
   <>
    {light === "ON" ? (
      <div style={{backgroundColor: "orange"}}> ON</div>) : (
      <div style={{backgroundColor:"gray"}}> OFF </div>
    )}
  </>
  );
}


function StaticLightbulb(){
  return <div style={{backgroundColor:"gray"}}>OFF</div>;
}


export default function Body(){
  
  const [light, setLight] = useState("OFF");

  return(
    <div className="body">
      <Ligthbulb light={light}/>
      <StaticLightbulb/>
      <button onClick={()=>{setLight("ON");}}>켜기</button>
      <button onClick={()=>{setLight("OFF");}}>끄기</button>
      
    </div>
  );
}

