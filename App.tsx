import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Contador from './components/counter/index'
import Relogio from './components/timer';


export default function App() {
  return (
  <>
    <View style={styles.container}>
      <Relogio></Relogio>
      <Contador></Contador>
    </View>
 </>
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
