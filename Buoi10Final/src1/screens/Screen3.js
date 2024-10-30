import React, { useState, useContext } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { UserContext } from '../context/UserContext';
import { addTodoRequest } from '../redux/actions';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

const Screen3 = ({ navigation }) => {
  const { userName } = useContext(UserContext);
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state);

  const handleFinish = () => {
    dispatch(addTodoRequest(todo));
    navigation.navigate("Detail");
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
          <Text style={{ fontWeight: 'bold' }}>Hi {userName}</Text>
          <Text style={{ color: '#696b6f', marginVertical: 10 }}>
            Have a great day ahead
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Add Your Job</Text>
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.icon}>
            <Entypo name="menu" size={24} color="#1dd75b" />
          </TouchableOpacity>
          <TextInput
            placeholder="Input your Job"
            onChangeText={setTodo}
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleFinish}
          disabled={loading}
        >
          <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 34,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    marginVertical: 20,
  },
  icon: {
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  input: {
    paddingVertical: 10,
    width: '90%',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#26c3d9',
    flexDirection: 'row',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default Screen3;
