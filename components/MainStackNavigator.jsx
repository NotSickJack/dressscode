import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { Demo } from "../screens/Demo";
import { DemoTwo } from "../screens/SecondDemo";
import { DemoThird } from "../screens/ThirdDemo";

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Demo"
        component={Demo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DemoTwo"
        component={DemoTwo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DemoThree"
        component={DemoThird}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };
