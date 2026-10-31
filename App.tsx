import {useState} from 'react'
import { StyleSheet, View, Text, TextInput, Pressable, FlatList } from 'react-native';

type Habit = {id: string, habitString: string};

export default function App() {
  const [habitInput, setInput] = useState('');
  const [habits, setHabit] = useState<Habit[]>([]);

  const addHabit = () => {
    if (habitInput.trim() === '') return 
    const newHabit: Habit = {id: Date.now().toString(), habitString: habitInput.trim()};
    setHabit([...habits, newHabit]);
    setInput('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Habit Tracker</Text>

      <View style={styles.viewContainer}>
        <TextInput style={styles.input} value={habitInput} onChangeText={setInput} multiline textAlignVertical='top' placeholder="New Habbit..." />

        <Pressable style={styles.button} onPress={addHabit}>
          <Text>Save Habbit</Text>
        </Pressable>

      </View>

      <Text style={styles.text}>My Habits</Text>

      <FlatList 
        data={habits} 
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View>

          <Text style={styles.input}>
            {item.habitString}
          </Text>

          </View>
        )}/>

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