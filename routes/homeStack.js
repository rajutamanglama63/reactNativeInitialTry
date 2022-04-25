import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Header from '../shared/Header'
import Home from '../screens/Home';
import ReviewDetail from '../screens/ReviewDetail';

const HomeStack = createStackNavigator();

export default function HomeNavigator({navigation}) {
    return (
        <HomeStack.Navigator initialRouteName="Home" screenOptions={{
                headerStyle : { backgroundColor : '#4caf50'},
                headerTintColor : '#fff',
                headerTitleStyle : {fontWeight : 'bold'}
            }}
        >
            <HomeStack.Screen name="Home" component={Home} options={() => ({headerTitle : <Header  navigation={navigation} title='HOME' />})} />
            <HomeStack.Screen name="ReviewDetail" component={ReviewDetail}  />
        </HomeStack.Navigator>
    )
}



