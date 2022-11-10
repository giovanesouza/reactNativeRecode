import React from "react";
import { Text, StyleSheet } from "react-native";

// EXERCÍCIO 1 - CRIAR UM COMPONENTE TIPO FUNÇÃO QUE EXIBA A FRASE NA TELA 'Eu estou aprendendo React Native.'
const Ex1 = () => {

    return (
        <Text style={estilos.texto}>
            Eu estou aprendendo React Native.
        </Text>
    )

}

const estilos = StyleSheet.create({

    // OBJETO CENTRAL : { PROPRIEDADES (ESCRITA PADRÃO CamelCase) }
    texto: {

        marginTop: '1rem',

    }

}
)

export default Ex1;