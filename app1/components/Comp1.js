import React from "react";
import { View, Text, StyleSheet } from "react-native";

// COMPONENTE DO TIPO CLASS
// Necessário colocar o extends para funcionar
export default class Comp1 extends React.Component {

    // Função para renderizar
    render() {

        return (
            <View>
                <Text style={estilos.texto}>
                    Componente 01 - Usando componente do tipo Class
                </Text>
            </View>
        )
    }

}

const estilos = StyleSheet.create({

    // OBJETO CENTRAL : { PROPRIEDADES (ESCRITA PADRÃO CamelCase) }
    texto: {
        backgroundColor: '#0000ff',
        color: '#fff',
        marginBottom: '1rem',
        padding: '1rem',
        borderRadius: '1rem',
    }

}
)

