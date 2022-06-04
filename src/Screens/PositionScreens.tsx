import React from "react";
import { View, StyleSheet, Text } from 'react-native';


export const PositionScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.caja1} >
                <Text>
                    Caja 1
                </Text>
            </View>
            <View style={styles.caja2} >
                <Text>
                    Caja 2
                </Text>
            </View>
            <View style={styles.caja3} >
                <Text>
                    Caja 3
                </Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#61E8A9",
        flexDirection: 'row'
       //justifyContent:'space-around'
       //alignItems:'center'
       //alignSelf:'stretch' 
       //flexWrap:'wrap'  //para que se puedan colocar varias cajas en una fila
    },
    caja1: {
        flex: 2,
        width: 100,
        height: 100,
        backgroundColor: "#FF7F6B",
        borderWidth: 2,
        borderColor: "white",
        fontSize:30,
        position: "absolute",
        top: 0,
        right: 0,
    },
    caja2: {
        flex:2,
        fontSize: 30,
        width: 100,
        height: 100,
        backgroundColor: "#DDFF85",
        borderWidth: 2,
        borderColor: "white",
        position: "absolute",
        top: 100,
        bottom:0,
        right:0,
    },
    caja3: {
        flex: 2,
        fontSize: 30,
        width: 100,
        height: 100,
        backgroundColor: "#95B34B",
        borderWidth: 2,
        borderColor: "white",
        position: "absolute",
        top: 0,
        right: 0,
        ...StyleSheet.absoluteFillObject
    }
})
