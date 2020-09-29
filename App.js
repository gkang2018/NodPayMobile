import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import {store, persistor} from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { useSelector } from 'react-redux'
import { Provider } from "react-redux";


// Screen Imports will come here 
import Home from './screens/Home';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
 

// initializes Stack Navigator to allow us to move between different screens
const Stack = createStackNavigator(); 


 export default function App() {
   
    return (
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        {/* <Stack.Navigator>
        {
          useSelector(state => state.user.user.loggedIn) === false ?  (
          <>
            <Stack.Screen name ="Home" component ={Home} />
            <Stack.Screen name ="Signup" component ={Signup} />
            <Stack.Screen name ="Login" component ={Login} /> 
          </>
          ) : ( 
          <Stack.Screen name ="Dashboard" component ={Dashboard} />)}
        </Stack.Navigator> */}
        <Stack.Navigator>       
          <Stack.Screen name ="Home" component ={Home} />
          <Stack.Screen name ="Signup" component ={Signup} />
          <Stack.Screen name ="Login" component ={Login} /> 
          <Stack.Screen name ="Dashboard" component ={Dashboard} />
        </Stack.Navigator>

      </NavigationContainer>
      </PersistGate>
      </Provider>
    )
}
