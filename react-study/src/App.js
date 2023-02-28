
import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
		<h1 id={styles.title}>Welcome back!</h1>
		<Button text={"Click"}></Button>
	</div>
  );
}

export default App;
