import React from "react";
import { StyleSheet, View, ScrollView } from 'react-native';

export const DimensionesScreen = ({ navigation }) => {
    return(
        <ScrollView >
            <View style={styles.container}>
                <View style={styles.cajaMorado}/>
                <View style={styles.cajaNaranja}/>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: 1000,
        backgroundColor: "red",
        flexDirection:'row'
    },
    cajaMorado:{
        backgroundColor:'#DB3AE8',
        width: '50%',
        height: '50%',
    },
    cajaNaranja:{
        backgroundColor:'#FF5757',
        width: '80%',
        height: '10%',
        
    }
})