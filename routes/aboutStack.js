import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import About from '../screens/About';

const AboutStack = createStackNavigator();

export default function AboutNavigator() {
    return (
        <AboutStack.Navigator initialRouteName="About">
            <AboutStack.Screen name="About" component={About} />
        </AboutStack.Navigator>
    )
}



