import React from "react";
import { StyleSheet } from "react-native";

// EXERCÍCIO 3 - CRIAR UM BOTÃO COM TEXTO 'REACT NATIVE'.
const Ex3 = () => {

    return (
        <a href="#" style={estilo.botao}> 
            React Native.
        </a>
    )

}

const estilo = StyleSheet.create({
    botao: {
        backgroundColor: '#ff0000',
        color: '#fff',
        textDecorationColor: 'transparent',
        marginBottom: '1rem',
        padding: '1rem',
        borderRadius: '1rem',
        marginTop: '1rem',
    }
});

export default Ex3;