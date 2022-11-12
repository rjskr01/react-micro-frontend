
import React from "react";

type ContainerAppProps = {
  CounterAppOne: React.LazyExoticComponent<React.ComponentType<{}>>;
  CounterAppTwo: React.LazyExoticComponent<React.ComponentType<{}>>;
  CounterAppThree: React.LazyExoticComponent<React.ComponentType<{}>>;
  CounterAppFour: React.LazyExoticComponent<React.ComponentType<{}>>;
};

export const ContainerApp = ({
  CounterAppOne,
  CounterAppTwo,
  CounterAppThree,
  CounterAppFour
}: ContainerAppProps) => {
  return (
    <>
    <CounterAppOne/>
    <CounterAppTwo/>
    <CounterAppThree/>
    <CounterAppFour/>
    </>
  );
};
