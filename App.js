import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RcHome from "./components/receptionist/rcHome";
import LoginAs from "./components/loginAs";
import Register from "./components/register";
import nurseLogin from "./components/nurse/nurseLogIn";
import NurseHome from "./components/nurse/nurseHome";
import DoctorLogin from "./components/doctor/doctorLogin";
import DcHome from "./components/doctor/dcHome";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="loginAs"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="loginAs" component={LoginAs} />
        <Stack.Screen name="doctorLogin" component={DoctorLogin} />
        <Stack.Screen name="nurseLogIn" component={nurseLogin} />
        
        <Stack.Screen name="rcHome" component={RcHome} />
        <Stack.Screen name="nurseHome" component={NurseHome} />
        <Stack.Screen name="dcHome" component={DcHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
