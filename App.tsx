import { useState } from "react";
import { StyleSheet, View, Text, FlatList, Pressable, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';

type Habit = {id: string, habitString: string, habitSubstring: string, isCompleted: boolean};

const demo: [Habit] = [
    { id: '1', habitString: 'Drink water',   habitSubstring: '5', isCompleted: true  },
    { id: '2', habitString: 'Read 20 pages', habitSubstring: '2', isCompleted: true  },
    { id: '3', habitString: 'Go for a walk', habitSubstring: '0', isCompleted: false },
    { id: '4', habitString: 'Meditate',      habitSubstring: '3', isCompleted: false },
  ];

export default function App() {
  const [habitInput, setInput] = useState('');
  const [habits, setNewHabit] = useState<Habit[]>(demo); 
  const addHabit = () => {
    if (habitInput.trim() === '') return
    const newHabit: Habit = {id: Date.now().toString(), habitString: habitInput.trim(), habitSubstring: '0', isCompleted: false};
    setNewHabit([...habits, newHabit]);
    setInput('');
  };
  const toggleHabit = (id: string) => {
    setNewHabit(
      habits.map((h) => 
        h.id === id ? {...h, isCompleted: !h.isCompleted} : h
     )
    );
  };

  return(
    <View style={styles.contentView}>

      <View style={styles.headingView}>
        <Text style={styles.headingText}>
          Habit Tracker
        </Text>

        <Text style={styles.subHeadingText}>
          2 of 4 done today
        </Text>

      </View>

      <View style={styles.addHabitView}>
        <TextInput style={styles.inputField} placeholder="New habit..." placeholderTextColor={colors.textMuted} value={habitInput} onChangeText={setInput}/>
      
        <Pressable style={styles.buttonContainer} onPress={addHabit}>
          <Text style={styles.addButtonText}>
            Add
          </Text>
        </Pressable>
      </View>

      <Text style={styles.sectionText}>
        My habits
      </Text>

      <FlatList data={habits} keyExtractor={(item) => item.id} renderItem={({item}) => (
        <View style={styles.habitCardView}>

          <Pressable style={(item.isCompleted) ? styles.checkBoxFilled : styles.checkBoxEmpty} onPress={() => toggleHabit(item.id)} hitSlop={10}>
            {item.isCompleted && (<Ionicons name="checkmark" size={14} color={colors.doneTick}/>)}
          </Pressable>

          <View style={styles.textColumn}>
            <View>
              <Text style={(item.isCompleted) ? styles.completedHabitText : styles.habitText}>
                {item.habitString}           
              </Text>

              <Text style={styles.subStrigText}>
                {item.habitSubstring} day streak
              </Text>
            </View>
          </View>
          <Ionicons name="trash-outline" size={20} color={colors.danger}/>
        </View>
      )}/>
      
    </View>
  );
}

const colors = {
  pageBg:        '#FFFFFF',
  cardBg:        '#F5F5F4',
  cardBorder:    '#E5E5E3',
  textPrimary:   '#1A1A1A',
  textSecondary: '#6B6B6B',
  textMuted:     '#9A9A9A',
  inputBorder:   '#CFCFCF',
  addBg:         '#E6F1FB',
  addText:       '#185FA5',
  doneBg:        '#EAF3DE',
  doneTick:      '#3B6D11',
  circleBorder:  '#B4B2A9',
  danger:        '#A32D2D',
};

const styles = StyleSheet.create({
  contentView: {flex: 1, backgroundColor: colors.pageBg, paddingTop: 70, paddingHorizontal: 16, alignContent: 'center'},
  headingView: {gap: 4},
  headingText: {alignSelf: 'center', fontSize: 20, fontWeight: '600', color: colors.textPrimary},
  subHeadingText: {alignSelf: 'center', fontSize: 12, color: colors.textSecondary, marginBottom: 8},
  addHabitView: {flexDirection: 'row', gap: 8, marginBottom: 18},
  inputField: {flex: 1, minHeight: 44, paddingHorizontal: 12, fontSize: 14, color: colors.textPrimary, borderWidth: 1, borderColor: colors.inputBorder, borderRadius: 10},
  buttonContainer: {minHeight: 44, paddingHorizontal: 16, backgroundColor: colors.addBg, borderRadius: 10, justifyContent: 'center'},
  addButtonText: {fontSize: 14, fontWeight: '600', color: colors.addText},
  sectionText: {flexDirection: 'row', alignSelf: 'flex-start', fontSize: 13, fontWeight: '600', marginBottom: 8, color: colors.textSecondary},
  habitCardView: {flexDirection: 'row', alignItems: 'center', gap: 12, padding: 12, backgroundColor: colors.cardBg, borderWidth: StyleSheet.hairlineWidth, borderColor: colors.cardBorder, borderRadius: 12, marginBottom: 8},
  habitText: {fontSize: 15, color: colors.textPrimary},
  completedHabitText: {fontSize: 15, textDecorationLine: 'line-through', color: colors.textSecondary},
  subStrigText: {fontSize: 12, color: colors.textMuted, marginTop: 2},
  textColumn: {flex: 1},
  checkBoxEmpty: {width: 22, height: 22, borderRadius: 11, borderWidth: 1.5, color: colors.circleBorder},
  checkBoxFilled: {justifyContent: 'center', alignItems: 'center', width: 22, height: 22, borderRadius: 11, backgroundColor: colors.doneBg, borderWidth: 1.5}
});