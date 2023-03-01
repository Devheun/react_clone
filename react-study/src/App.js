
import Button from "./Button";
import styles from "./App.module.css";
import {useState,useEffect} from "react";

function App() {
	const [value,setValue] = useState(0);
	const [key,setKey]=useState("");
	const onClick=()=>setValue((prev)=>prev+1);
	const onChange=(event)=>setKey(event.target.value);

	useEffect(()=>{
		console.log("I run only once");
	},[]);
	useEffect(()=>{
		console.log("I run when 'key' changes");
	},[key]);
	useEffect(()=>{
		console.log("I run when 'value' changes");
	},[value]);
  return (
    <div>
		 <input 
			 value={key}
			 type="text" 
			 placeholder="Search"
			 onChange={onChange}></input>
		<h1 id={styles.title}>{value}</h1>
		<Button text={"Click"} onClick={onClick}></Button>
	</div>
  );
}

export default App;
