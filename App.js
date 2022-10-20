import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./components/login";
import RcHome from "./components/receptionist/rcHome";
import LoginAs from "./components/loginAs";
import Register from "./components/receptionist/register";
import RcPatientFile from "./components/receptionist/rcPatientFile";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="loginAs" component={LoginAs} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="rcHome" component={RcHome} />
        <Stack.Screen name="rcPatientFile" component={RcPatientFile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
