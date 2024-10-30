// Screen1.js
import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useRecoilState } from 'recoil';
import { userNameAtom } from '../store';

const Screen1 = ({ navigation }) => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useRecoilState(userNameAtom);

  const handleNameChange = (text) => {
    setName(text);
    setUserName(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: 200, height: 200 }}>
        <Image source={require("../assets/logo.png")} style={{ resizeMode: 'cover', width: '100%', height: '100%' }} />
      </View>
      <View>
        <Text style={{ textTransform: 'uppercase', fontWeight: '800', color: 'purple' }}>
          Manage your task
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Fontisto name="email" size={24} color="black" />
        <TextInput
          value={name}
          placeholder="Enter your name"
          onChangeText={handleNameChange}
          style={{ flex: 1 }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Detail')}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>Get started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    padding: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'space-around',
    width: '80%',
    borderRadius: 5,
    padding: 5,
  },
  buttonContainer: { width: '100%', alignItems: 'center' },
  button: { backgroundColor: '#00bdd6', borderRadius: 5, width: '40%', padding: 10 },
});

export default Screen1;
