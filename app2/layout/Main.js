import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Botao from "../components/Botao";
import Contador from "../components/Contador";

// COMPONENTE UTILIZANDO PROPS
const Main = () => {

    return (
        <View style={estilo.size}>
            <Text>Main</Text>
            <Botao valor={"SALVAR"} />
            <Botao valor={"DELETAR"} />
            <Botao valor={"ATUALIZAR"} />
            <Contador valor={1} />
        </View>
    )

}

export default Main;

const estilo = StyleSheet.create({

    // OBJETO CENTRAL : { PROPRIEDADES (ESCRITA PADRÃO CamelCase) }
    size: {
        flex: 6,
        width: "100%",
        backgroundColor: '#ccc',
        borderWidth: 1,
        borderColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    }

})