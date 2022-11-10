import React from "react";
import { View, Text, Button } from "react-native";

const Contador = (props) => {

    return (
        <View>
            <Text>Contador 01</Text>
            <Text>{props.valor}</Text>
        </View>
    );

};


export default Contador;