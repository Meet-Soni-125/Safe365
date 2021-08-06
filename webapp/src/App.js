import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CustomerPage from "./Pages/CustomerPage";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" component={CustomerPage} exact={true} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
