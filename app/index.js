
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import {createDrawerNavigator} from "@react-navigation/drawer"
import {createStackNavigator} from "@react-navigation/stack"
import About from "../screens/about";
import CustomHeader from "../shared/customHeader";



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
     name="HomeScreen"
      component={Home} 
      options={{header: ({navigation}) => <CustomHeader title='GameZone' navigation={navigation} />}}
      />
    <Stack.Screen name="Details" component={ReviewDetails}  />
  </Stack.Navigator>
);

const App = () => {


  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen name="Home" component={HomeStack}  options={{ headerShown: false }}/>
        <Drawer.Screen name="About" component={About} options={{header: ({navigation}) => <CustomHeader title=' About GameZone' navigation={navigation} />}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};


export default App;
