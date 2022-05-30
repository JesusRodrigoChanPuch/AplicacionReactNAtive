import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../Screens/HomeScreen';
import { TimerScreen } from '../Screens/TimerScreen';
import { ProfileScreen } from '../Screens/ProfileScreen';
import { BoxObjectModelScreen } from '../Screens/BoxObjectModelScreen';
const Stack = createNativeStackNavigator();

export default function StrackHome() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Timer" component={TimerScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="BOMS" component={BoxObjectModelScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}