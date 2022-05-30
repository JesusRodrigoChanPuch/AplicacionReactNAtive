import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { } from 'react-native';
import { Bottons } from '../conponents/Bottons';

export const TimerScreen = ({ navigation }) => {
  //? Para crear un useState(una variable que puede cambiar)
  const [contador, setContador] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.mensaje}>
        ContadorNumeros: {contador}
      </Text>
      <Bottons
        title='-1'
        onPress={() => setContador(contador - 1)}
      />
      <Bottons
        title='+1'
        onPress={() => setContador(contador + 1)} position='bl'
      />
      <Bottons
        title='V'
        onPress={() => navigation.push('Profile')} position='bl' />
    </View>
  );
};
const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'powderblue'
    },
    mensaje: {
      fontSize: 35,
      fontWeight: 'bold',
      textAlign: 'center'
    },
  }
)
