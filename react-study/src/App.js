import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App(){
	return (
		<Router>
			<Switch>
				<Route path="/heun">
					<h1>You can do it !</h1>
				</Route>
				
				<Route path="/movie">
					<Detail />
				</Route>
				
				<Route path="/">
					<Home/>
				</Route>
			</Switch>
		</Router>
	)
}

export default App;