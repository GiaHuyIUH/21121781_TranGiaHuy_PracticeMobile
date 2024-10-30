import React, { useEffect, useContext } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { UserContext } from '../context/UserContext';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRecoilState } from 'recoil';
import { todoAtom } from '../state/todoAtom'; // Import the todo atom

const Screen3 = ({ navigation }) => {
  const { userName } = useContext(UserContext);
  const [todo, setTodo] = useRecoilState(todoAtom); // Use Recoil state

  const handleFinish = async () => {
    try {
      const response = await fetch('https://66ff62072b9aac9c997f1c11.mockapi.io/api/v1/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: todo,
          status: false,
        }),
      });

      if (response.ok) {
        // Optionally update Recoil state or perform additional logic
        navigation.navigate("Detail");
      } else {
        console.error('Failed to create todo');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg?w=740&t=st=1728006622~exp=1728007222~hmac=8410192033cf723b3be5bd468309107eca30a8fc73e223845addf181b398db3f',
          }}
          style={{ width: 50, height: 50, borderRadius: 40 }}
        />
        <View style={{ justifyContent: 'space-between' }}>
          <Text style={{ fontWeight: 700 }}>Hi {userName}</Text>
          <Text style={{ color: '#696b6f', marginVertical: 10 }}>
            Have a great day ahead
          </Text>
        </View>
      </View>
      <TextInput
        placeholder="Enter your todo"
        value={todo} // Bind the value from Recoil state
        onChangeText={setTodo} // Update Recoil state on text change
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
          padding: 10,
          marginVertical: 20,
          width: '80%',
        }}
      />
      <TouchableOpacity
        style={{ backgroundColor: '#00bdd6', borderRadius: 5, width: '40%', padding: 10 }}
        onPress={handleFinish}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    padding: 8,
    margin: 15,
  },
});

export default Screen3;
