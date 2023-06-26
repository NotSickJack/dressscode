import { createStackNavigator } from "@react-navigation/stack";
import { SplashScreen } from "../screens/SplashScreen";
import { Home } from "../screens/Home";
import { Demo } from "../screens/Demo";
import { DemoTwo } from "../screens/SecondDemo";
import { DemoThird } from "../screens/ThirdDemo";
import { Result } from "../screens/Result";
import { Welcome } from "../screens/Welcome";
import { Media } from "../screens/Camera";
import { Thanks } from "../screens/Thanks";
import Auth from "../screens/Login";
import Register from "../screens/Register";

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Auth}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
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
      <Stack.Screen
        name="Result"
        component={Result}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Media"
        component={Media}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Thanks"
        component={Thanks}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };
