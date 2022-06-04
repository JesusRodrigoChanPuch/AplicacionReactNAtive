import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TimerScreen } from '../Screens/TimerScreen';
import { ProfileScreen } from '../Screens/ProfileScreen';
import { BoxObjectModelScreen } from '../Screens/BoxObjectModelScreen';
import AlignContentLayout from "../Screens/AlignContentExample";
import BoxExample from "../Screens/BoxExample";
import { DimensionesScreen } from "../Screens/DimensioneScreen";
import DirectionLayout from "../Screens/DirectionExample";
import FlexDirectionBasics from "../Screens/FlexDirectionExample";
import FlexWrapLayout from "../Screens/FlexWrapExample";
import Flex from "../Screens/FlexExample";
import JustifyContentBasics from "../Screens/justifyContentExample";
import PositionLayout from "../Screens/PositionExample";
import { PositionScreen } from "../Screens/PositionScreens";
import WidthHeightBasics from "../Screens/WidthAndHeightExample";
import HomeScreen from "../Screens/HomeScreen";
import AlignSelfLayout from '../Screens/AlignSelfExample';
import AlignItemsLayout from '../Screens/AlignItemsExample';
const Stack = createNativeStackNavigator();

export default function StrackHome() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Timer" component={TimerScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="BOMS" component={BoxObjectModelScreen} />
                <Stack.Screen name="AlignContentLayout" component={AlignContentLayout} />
                <Stack.Screen name="BoxExample" component={BoxExample} />
                <Stack.Screen name="DimensionesScreen" component={DimensionesScreen} />
                <Stack.Screen name="DirectionLayout" component={DirectionLayout} />
                <Stack.Screen name="FlexDirectionBasics" component={FlexDirectionBasics} />
                <Stack.Screen name="FlexWrapLayout" component={FlexWrapLayout} />
                <Stack.Screen name="Flex" component={Flex} />
                <Stack.Screen name="JustifyContentBasics" component={JustifyContentBasics} />
                <Stack.Screen name="PositionLayout" component={PositionLayout} />
                <Stack.Screen name="PositionScreen" component={PositionScreen} />
                <Stack.Screen name="WidthHeightBasics" component={WidthHeightBasics} />
                <Stack.Screen name="AlignSelfLayout" component={AlignSelfLayout} />
                <Stack.Screen name="AlignItemsLayout" component={AlignItemsLayout} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}