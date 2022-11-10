import React from "react";
import { View, Text, StyleSheet } from "react-native";
import State from "../components/State";

// COMPONENTE UTILIZANDO PROPS
const Header = () => {

    return (
        <View style={estilo.size}>
            <Text>Header</Text>
            <State contador={"CLIQUE AQUI"} />
        </View>
    )

}

const estilo = StyleSheet.create({

    // OBJETO CENTRAL : { PROPRIEDADES (ESCRITA PADRÃO CamelCase) }
    size: {
        flex: 2,
        width: "100%",
        borderWidth: 1,
        borderColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    }

})


export default Header;
