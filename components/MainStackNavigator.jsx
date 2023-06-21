import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { Demo } from "../screens/Demo";

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
    </Stack.Navigator>
  );
}

export { MainStackNavigator };
