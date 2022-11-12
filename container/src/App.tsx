import React from "react";
import { ContainerApp } from "./components/ContainerApp";

const CounterAppOne = React.lazy(() => import("app1/CounterAppOne"));
const CounterAppTwo = React.lazy(() => import("app2/CounterAppTwo"));
const CounterAppThree = React.lazy(() => import("app3/CounterAppThree"));
const CounterAppFour = React.lazy(() => import("app3/CounterAppFour"));

const App = () => (
  
          <ContainerApp
            CounterAppOne={CounterAppOne}
            CounterAppTwo={CounterAppTwo}
            CounterAppThree={CounterAppThree}
            CounterAppFour={CounterAppFour}
          />
);

export default App;
