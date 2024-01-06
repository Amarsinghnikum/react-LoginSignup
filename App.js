import React, {useState, useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
import Home from "./views/Home";

const Stack = createNativeStackNavigator()

const Navigator = () => {

    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
      </Stack.Navigator>
    );

  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
  );
};

const App = () => {
  return (
      <NavigationContainer>
        {/* <AuthProvider> */}
        <Navigator />
        {/* </AuthProvider> */}
      </NavigationContainer>
  )
};

export default App;


