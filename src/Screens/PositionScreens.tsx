import React from "react";
import { View, StyleSheet } from 'react-native';


export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.caja1} />
            <View style={styles.caja2} />
            <View style={styles.caja3} />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#61E8A9"
    },
    caja1: {
        flex: 1,
        //width: 100,
        //height: 100,
        //backgroundColor: "#FF7F6B",
        borderWidth: 2,
        borderColor: "white",
        fontSize:30,
        //position: "absolute",
       // top: 0,
        //right: 0,
    },
    caja2: {
        flex:2,
        fontSize: 30,
        //width: 100,
        //height: 100,
        backgroundColor: "#DDFF85",
        borderWidth: 2,
        borderColor: "white",
        //position: "absolute",
        //top: 100,
        //bottom:0,
        //right:0,
    },
    caja3: {
        width: 100,
        height: 100,
        backgroundColor: "#95B34B",
        borderWidth: 10,
        borderColor: "white",
        position: "absolute",
        // top: 0,
        // right: 0,
        ...StyleSheet.absoluteFillObject
    }
})
