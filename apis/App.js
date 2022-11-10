import React from 'react';
import { Button, Text, View, TextInput, StyleSheet } from 'react-native';

class UsuarioGithub extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dados: {},
     // id:0
    }
    this.fetchDados = this.fetchDados.bind(this);

  }

  fetchDados() {
    fetch('http://localhost:8080/api/atores')
      .then(response => response.json())
      .then(json => this.setState({ dados: json }))
      .catch(err => this.setState({ dados: { err } }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(this.state.dados)}</Text>

        {/* <View>
          <TextInput
            styles={styles.input}
            onChangeText={id => { this.setState({ id }) }}
            value={this.state.id} >
          </TextInput>
        </View> */}

        <View>
          <Button
            onPress={this.fetchDados}
            title="Buscar	Dados"       
          />
        </View>

      </View>
    )
  }
}
export default UsuarioGithub;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
});


