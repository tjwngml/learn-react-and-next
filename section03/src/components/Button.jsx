import  "./Button.css";



export default function Button({ text, color}){
  console.log(text);
  console.log(color);


  return(
    <>
    <button className="button">{text}</button>
    </>
  );
}