import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
export const BoxObjectModelScreen =({navigation})=> {
    return(
        <View style={styles.constainer}>
            <Text style={styles.title}>
                Box Objet Model Screen
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    constainer:{
        flex:1,
        backgroundColor: 'red',
    },
    title:{
        fontSize: 20,
        borderWidth: 10,
        paddingHorizontal:100,
        paddingVertical:20,
        marginHorizontal:20,
        marginVertical:20,
    }

})