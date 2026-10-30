import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable} from 'react-native';
import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <Pressable style={styles.button} onPress = {() => setCount(count + 1)}>
        <Text style={styles.buttonText}>Add one</Text>
      </Pressable>
      <Pressable style={styles.button} onPress = {() => setCount(0)}>
        <Text style={styles.buttonText}>Reset</Text>
      </Pressable>
      <Pressable style={styles.button} onPress = {() => setCount(count - 1)}>
        <Text style={styles.buttonText}>Subtract one</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  count: {countSize: 64, countWeight: '700'},
  button: {marginTop: 20, marginBottom: 20, backgroundColor: '#4f46e5', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 10},
  buttonText: {colour: '#fff', fontSize: 18, fontWeight: '600'}
});
