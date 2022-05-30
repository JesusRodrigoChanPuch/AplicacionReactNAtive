import React from "react";
import { Image, ScrollView, Text, View } from 'react-native';
import { Bottons } from '../conponents/Bottons';
export const ProfileScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontSize: 25, textAlign: 'center' }}>
                Vista del perfil de usuario
            </Text>
            <Bottons
                title=''
                onPress={() => navigation.push('BOMS')} position='bl'
            />
            <Bottons title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
};
