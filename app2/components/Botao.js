import React from "react";
import { View, Text, Button } from "react-native";

const Botao = (props) => {

    return (
        <View>
            <Button title={props.valor}></Button>
        </View>
    );

};


export default Botao;
