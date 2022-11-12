import { Box } from "@chakra-ui/react";
import React from "react";
import CounterAppThree from "./components/CounterAppThree";
import CounterAppFour from "./components/CounterAppFour";

const CounterAppTwo = React.lazy(() => import("app2/CounterAppTwo"));

const App = () => (
	<Box margin="1.2rem">
		<Box>APP-2</Box>
		<Box>
			<CounterAppTwo />
			<CounterAppThree />
			<CounterAppFour />
		</Box>
	</Box>
);

export default App;
