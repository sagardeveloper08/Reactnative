import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

const App = () => {
  const [entergoal, setEnterGaol] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = (e) => {
    setEnterGaol(e)
  }
  const addGaolHandler = () => {
    // goalsadded a variable used 
    setCourseGoals(goalsadded =>
      [...goalsadded,
      {
        key: Math.random().toString(),
        value: entergoal
      }])
  };

  
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Add Goals"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={entergoal}
        />
        <Button title="ADD"
          onPress={addGaolHandler}
        />
      </View>

      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <TouchableOpacity style={styles.touch} onPress={console.log("is it working")} >
            <View style={styles.liststyle}>
              <Text >{itemData.item.value}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      {/* <ScrollView>
        {courseGoals.map(goals =>(
        <View style={styles.liststyle}>
        <Text key={goals}>{goals}</Text>
        </View>
        ))}
      </ScrollView> */}
    </View>
  )
}



const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: "black",
    borderWidth: 1,
    padding: 10
  },
  liststyle: {
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: "grey",
    borderColor: 'black',
    borderWidth: 1
  },
  touch:{
    borderTopColor:"black",

  }
});


export default App