import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal } from 'react-native';

import { Title } from './src/componentes/Title';
import { Week } from './src/telas/Week';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Week/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#4A73FC',
  }
});
