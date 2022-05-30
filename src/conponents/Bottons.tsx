import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  position?: 'br' | 'bl';
}

export const Bottons = ({title, position = 'br', onPress}: Props) => {
  return (
    <TouchableOpacity
      //para para poder validar carias opciones
        style={
        position === 'br' ? styles.ButtonLocationBL : styles.ButtonLocationBR
    }
      onPress={onPress}>
      <View style={styles.bottons}>
        <Text style={styles.ButtonsText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bottons: {
    backgroundColor: '#9C44FA',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  ButtonsText: {
    color: '#F9F2F3',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ButtonLocationBR: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  ButtonLocationBL: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
});
