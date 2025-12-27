import  "./Button.css";



export default function Button(props){

 const { text, color } = props;

  console.log(props);

  return(
    <>
    <button className="button">{text}</button>
    </>
  );
}