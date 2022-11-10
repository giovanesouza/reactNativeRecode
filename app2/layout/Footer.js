import React from "react";
import { View, Text, StyleSheet } from "react-native";

// COMPONENTE UTILIZANDO PROPS
const Footer = () => {

    return (
        <View style={estilo.size}>
            <Text>Footer</Text>
        </View>
    )

}

export default Footer;

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