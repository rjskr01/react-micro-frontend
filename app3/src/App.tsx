
import React from "react";
import CounterAppThree from "./components/CounterAppThree";
import CounterAppFour from "./components/CounterAppFour";

const CounterAppTwo = React.lazy(() => import("app2/CounterAppTwo"));

const App = () => (
	<>
			<CounterAppTwo />
			<CounterAppThree />
			<CounterAppFour />
			</>	
);

export default App;
