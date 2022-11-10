// REFERÊNCIA P/ CONSULTA: https://reactnative.dev/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import Ex1 from './components/Ex1';
import Ex2 from './components/ex2';
import Ex3 from './components/Ex3';

export default function App() {
  return (
    <View style={styles.container}>
      <Comp1 />
      <Comp2 />
      <Ex1 />
      <Ex2 />
      <Ex3 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
