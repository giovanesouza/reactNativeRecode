import React from "react";
import { Text, StyleSheet } from "react-native";

// EXERCÍCIO 2 - CRIAR UM COMPONENTE TIPO CLASS QUE EXIBA A FRASE NA TELA 'Eu estou aprendendo React Native cheio de classe.'
export default class Ex2 extends React.Component {

    // Função para renderizar
    render() {

        return (
                <Text style={estilos.texto}>
                Eu estou aprendendo React Native cheio de classe.
                </Text>
        )
    }

}

const estilos = StyleSheet.create({

    // OBJETO CENTRAL : { PROPRIEDADES (ESCRITA PADRÃO CamelCase) }
    texto: {
        border: '0.1rem solid #00ff00',
        padding: '1rem',
        marginTop: '1rem',
    }

}
)

