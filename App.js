import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import {MainStackNavigator} from "./components/MainStackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}