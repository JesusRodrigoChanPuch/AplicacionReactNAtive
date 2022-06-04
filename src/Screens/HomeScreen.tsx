import React from 'react';
import { Image, ScrollView, Text, Button, TouchableOpacityBase, View } from 'react-native';
import { Bottons } from '../conponents/Bottons';
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: 19, textAlign: 'center' }}>
        Programa Realizdo con React Natie
        Codificado por: Rodrigo Chan Puch
        Activades Realizadas en Clase
      </Text>
      <Button
        title='1-Timer'
        onPress={() => { navigation.navigate('Timer') }}
      />
      <Button
        title='2-BOMS'
        onPress={() => { navigation.navigate('BOMS') }}
      />
      <Button
        title='3-Dimensiones Screen'
        onPress={() => { navigation.navigate('DimensionesScreen') }}
      />
      <Button
        title='4-Position Screen'
        onPress={() => { navigation.navigate('PositionScreen') }}
      />
      <Text>
        Ejemplos de la plataforque de React Native
      </Text>
      <Button
        title='1-Flex'
        onPress={() => { navigation.navigate('Flex') }}
      />
      <Button
        title='2-Flex Direction Basics'
        onPress={() => { navigation.navigate('FlexDirectionBasics') }}
      />
      <Button
        title='3-Direction Layout*'
        onPress={() => { navigation.navigate('DirectionLayout') }}
      />
      <Button
        title='4-Justify Content Basics'
        onPress={() => { navigation.navigate('JustifyContentBasics') }}
      />
      <Button
        title='5-Align Items Layout'
        onPress={() => { navigation.navigate('AlignItemsLayout') }}
      />
        <Button
          title='6-Align Self Layout'
          onPress={() => { navigation.navigate('AlignSelfLayout') }}
        />
      <Button
        title='7-Align Content Layout'
        onPress={() => { navigation.navigate('AlignContentLayout') }}
      />
        <Button
          title='8-Flex Wrap Layout'
          onPress={() => { navigation.navigate('FlexWrapLayout') }}
        />
      <Button
        title='9-Box Example*'
        onPress={() => { navigation.navigate('BoxExample') }}
      />
        <Button
          title='10-Width Height Basics'
          onPress={() => { navigation.navigate('WidthHeightBasics') }}
        />
      <Button
        title='11-Position Layout'
        onPress={() => { navigation.navigate('PositionLayout') }}
      />
    </View>
  );
};
export default HomeScreen;
