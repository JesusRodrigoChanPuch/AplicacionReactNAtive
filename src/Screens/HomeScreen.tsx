import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import { Bottons } from '../conponents/Bottons';
export const HomeScreen = ({navigation }) => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{fontSize: 25, textAlign: 'center'}}>
        Programa Realizdo con React Natie
      </Text>
      <Bottons
      title=''
      onPress={()=>navigation.push('Timer')} position='bl'
      />
    </View>
  );
};
