import React from "react";
import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      altura: 0,
      massa: 0,
      resultado: 0,
      resultTexto: "Digite os valores corretamente",      
    };
    
    this.calcular = this.calcular.bind(this);
  }

  calcular() {
    this.state.resultado =
      this.state.massa / (this.state.altura * this.state.altura);

    if (this.state.massa < 10 || this.state.massa > 200) {
      console.log(this.state.massa);
      Alert.alert("Erro!", "Verifique valor do peso.");
      this.state.resultTexto = "Verifique valor do peso.";
      this.state.resultado = 0;
    } else if (this.state.altura < 1 || this.altura > 3) {
      Alert.alert("Erro!", "Verifique valor da altura.");
      this.state.resultTexto = "Verifique valor da altura.";
      this.state.resultado = 0;
    } else if (isNaN(this.state.altura)) {
      Alert.alert("Erro!", "Altura deve ser separada por '.' \nEx: 1.56");
      this.state.resultTexto = "Verifique valor da altura.";
      this.state.resultado = 0;
    } else if (this.state.resultado < 16) {
      this.state.resultTexto = "Muito abaixo do peso!";
    } else if (this.state.resultado < 17) {
      this.state.resultTexto = "Moderadamente abaixo do peso!";
    } else if (this.state.resultado < 18.5) {
      this.state.resultTexto = "Abaixo do peso!";
    } else if (this.state.resultado < 25) {
      this.state.resultTexto = "Saudável!";
    } else if (this.state.resultado < 30) {
      this.state.resultTexto = "Sobrepeso!";
    } else if (this.state.resultado < 35) {
      this.state.resultTexto = "Obesidade Grau 1°!";
    } else if (this.state.resultado < 40) {
      this.state.resultTexto = "Obesidade Grau 2°!";
    } else {
      this.setState.resultTexto = "Obesidade Grau 3°";
    }
    this.setState(this.state);
  }
  // aqui estão os comandos do display informe seu peso e informe sua altura//
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entrada}>
          <TextInput
            autoCapitalize="none"
            placeholder="Informe seu peso:"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={massa => {
              this.setState({ massa });
            }}
          />

          <TextInput
            autoCapitalize="none"
            placeholder="Informe sua altura:"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={altura => {
              this.setState({ altura });
            }}
            // aqui as configuraçoes e funçoes do botão calcular//
          />
        </View>
        <Button onPress={this.calcular} title="Calcular" color="#00008B" />
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={styles.resultado}>{this.state.resultTexto}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5432",
    justifyContent: "center"
  },
  entrada: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    height: 50,
    textAlign: "center",
    width: "100%",
    fontSize: 25,
    marginTop: 10
  },
  resultado: {
    alignSelf: "center",
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    padding: 0
  }
});