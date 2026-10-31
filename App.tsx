// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Pressable} from 'react-native';
// import { useState } from 'react'

// export default function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <View style={styles.container}>
//       <Text style={styles.count}>{count}</Text>
//       <Pressable style={styles.button} onPress = {() => {setCount(prev => prev + 1);
//         console.log(count);}
//       }>
//         <Text style={styles.buttonText}>Add one</Text>
//       </Pressable>
//       <Pressable style={styles.button} onPress = {() => setCount(0)}>
//         <Text style={styles.buttonText}>Reset</Text>
//       </Pressable>
//       <Pressable style={styles.button} onPress = {() => setCount(count - 1)}>
//         <Text style={styles.buttonText}>Subtract one</Text>
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//   },
//   count: {countSize: 64, countWeight: '700'},
//   button: {marginTop: 20, marginBottom: 20, backgroundColor: '#4f46e5', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 10},
//   buttonText: {colour: '#fff', fontSize: 18, fontWeight: '600'}
// });

import {useState} from 'react'
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';

export default function App() {
  // const [Habbit]
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Habit Tracker</Text>

      <View style={styles.viewContainer}>
        <TextInput style={styles.input} multiline textAlignVertical='top' placeholder="New Habbit..." />

        <Pressable style={styles.button}>
          <Text>Save Habbit</Text>
        </Pressable>

      </View>

      <Text style={styles.text}>My Habits</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, marginTop: 50, marginBottom: 50, backgroundColor: '#f0efbd', paddingHorizontal: 20},
  text: {color: '#01090e', fontSize: 20, fontWeight: '800', textAlign: 'center', margin: 15},
  viewContainer: {flexDirection: 'row', margin: 15, gap: 10, backgroundColor: '#e1d1e6', padding: 5, height: 100, borderWidth: 1, borderColor: '#000000', borderRadius: 8, marginHorizontal: 0},
  input: {fontSize: 15, flex: 1, alignContent: 'space-evenly', flexDirection: 'row' },
  button: {backgroundColor: '#9ce274', borderRadius: 8, padding: 10, height: 38, alignSelf: 'flex-end', borderColor: '#0000000', borderWidth: 1}
});