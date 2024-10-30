// Screen2.js
import React, { useEffect, useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  FlatList,
  Alert,
} from 'react-native';
import { useRecoilValue, useRecoilState } from 'recoil';
import { userNameAtom, todosAtom } from '../store';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Screen2 = ({ navigation }) => {
  const userName = useRecoilValue(userNameAtom);
  const [data, setData] = useRecoilState(todosAtom);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch('https://66ff62072b9aac9c997f1c11.mockapi.io/api/v1/todos')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    fetch(`https://66ff62072b9aac9c997f1c11.mockapi.io/api/v1/todos/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setData(data.filter((item) => item.id !== id));
        } else {
          Alert.alert('Error', 'Failed to delete the item.');
        }
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Error', 'An error occurred while deleting.');
      });
  };

  const handleUpdate = async (id, updatedName) => {
    fetch(`https://66ff62072b9aac9c997f1c11.mockapi.io/api/v1/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: updatedName }),
    })
      .then((response) => response.json())
      .then((updatedItem) => {
        const updatedData = data.map((item) => (item.id === id ? updatedItem : item));
        setData(updatedData);
        setSelectedItem(null);
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Error', 'An error occurred while updating.');
      });
  };

  // Render list items here (as in your code)
  // ...

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontWeight: '700' }}>Hi {userName}</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
    margin: 15,
  },
});

export default Screen2;
