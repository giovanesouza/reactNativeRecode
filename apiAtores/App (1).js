import React, { useState } from 'react';
import { Alert, View, ScrollView, Text, Image, Button, StyleSheet, } from 'react-native';

const cargosIniciais = [
  { id: 1, nome: "Dev"},
];

export default function App() {
  const [ cargoEscolhido, setCargoEscolhido ] = useState(null);

  const getCargoData = (idCargo) => {
    const endpoint = `http://localhost:8080/cargos/${idCargo}/`;

    fetch(endpoint)
      .then(resposta => resposta.json())
        .then( json => {
          const cargo = {
            nome: json.nome,
            id: json.id,
          };

          setCargoEscolhido(cargo);
        })
        .catch(() => {
          Alert.alert('Erro', 'Não foi possível carregar os dados do Cargo');
        });
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.topo}>
          <Text style={styles.topoTitulo}>ESCOLHA SEU CARGO</Text>
        </View>

        {cargoEscolhido != null && (
          <View style={styles.cargoBox}>
            <Text style={styles.cargoNome}>Nome: {cargoEscolhido.nome}</Text>
            <Text style={styles.cargoPeso}>Id: {cargoEscolhido.id}</Text>

            <Image resizeMode="stretch" source={{uri:cargoEscolhido.img}} style={styles.cargoImg} />
          </View>
        )}

        {cargosIniciais.map( cargo => (
          <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{cargo.nome}</Text>
            <Button title="Dados do pokémon" onPress={()=>getCargoData(cargo.id)}/>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  topo: { height: 80, padding: 20, paddingTop: 40, marginBottom: 20, backgroundColor: '#e73e33' },
  topoTitulo: { fontSize: 22, marginBottom: 10, color: '#fff', textAlign: 'center'},

  cardContainer: { borderWidth: 1, borderColor: '#d5d5d5', borderRadius: 4, marginBottom: 10, marginHorizontal: 20, padding: 10 },
  cardTitle: { fontSize: 22, marginBottom: 20, textAlign: 'center', color: '#656565' },

  cargoBox: { alignItems: 'center' },
  cargoNome: { fontSize: 22 },
  cargoPeso: { fontSize: 18 },
  cargoImg:{ width: 150, height: 150,}
});