
import 'react-native-gesture-handler'
import React from "react";

import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from "react-native";

import {Routs}  from '..src/pages/routs';


const Drawer = createDrawerNavigator();


function App (){

    return(

<NavigationContainer>
   <StatusBar hidden= {true} />

<Routs/>
</NavigationContainer>


    )


}

export default App;