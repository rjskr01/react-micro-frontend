import {
  Center,
  Box,
  Flex,
  Heading,
  Spinner,
  Button,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

var version = process.env.BUILD_DATE;

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
