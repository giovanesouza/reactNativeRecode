import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Main from './layout/Main';

export default function App() {
  return (
    <View style={styles.container}>
<Header />
<Main />
<Footer />

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
