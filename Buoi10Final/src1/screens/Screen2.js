// Screen2.js
import React, { useContext, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity, Image, ActivityIndicator, FlatList, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest, deleteItemRequest, updateItemRequest } from '../redux/todos/todoActions';
import { UserContext } from '../context/UserContext';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Screen2 = ({ navigation }) => {
  const { userName } = useContext(UserContext);
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state);

  const [selectedItem, setSelectedItem] = useState(null);

  // Fetch data on mount
  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteItemRequest(id));
  };

  const handleUpdate = (id, updatedName) => {
    dispatch(updateItemRequest(id, updatedName));
    setSelectedItem(null); // Clear selected item after updating
  };

  const itemRender = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity>
          {item.status === true ? (
            <Fontisto name="checkbox-active" size={24} color="#379f5b" />
          ) : (
            <Fontisto name="checkbox-passive" size={24} color="#379f5b" />
          )}
        </TouchableOpacity>
        {selectedItem?.id === item.id ? (
          <TextInput
            style={{ fontWeight: '700', fontSize: 22, flex: 1, marginRight: 10 }}
            value={selectedItem.name}
            onChangeText={(text) => setSelectedItem((prev) => ({ ...prev, name: text }))}
          />
        ) : (
          <Text style={{ fontWeight: '700', fontSize: 22 }}>{item.name}</Text>
        )}
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => (selectedItem?.id === item.id ? handleUpdate(item.id, selectedItem.name) : setSelectedItem(item))}>
            <FontAwesome5 name={selectedItem?.id === item.id ? 'check' : 'pencil-alt'} size={24} color={selectedItem?.id === item.id ? '#379f5b' : '#e06f70'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(item.id)}>
            <MaterialIcons name="delete" size={24} color="#e06f70" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Image source={{ uri: 'https://example.com/user.png' }} style={{ width: 50, height: 50, borderRadius: 40 }} />
        <View>
          <Text style={{ fontWeight: '700' }}>Hi {userName}</Text>
          <Text style={{ color: '#696b6f', marginVertical: 10 }}>Have a great day ahead</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', width: '100%', borderWidth: 1, borderColor: '#000' }}>
        <TouchableOpacity style={{ paddingVertical: 10, marginHorizontal: 10 }}>
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
        <TextInput placeholder="Search" style={{ paddingVertical: 10, width: '90%' }} />
      </View>
      <View style={{ flex: 1, marginTop: 10, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList data={data} keyExtractor={(item) => item.id.toString()} renderItem={itemRender} />
        )}
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Add')}>
          <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', backgroundColor: '#ecf0f1', alignItems: 'center', padding: 8, margin: 10 },
  addButton: { backgroundColor: '#2196f3', padding: 15, borderRadius: 40, position: 'absolute', bottom: 20, right: 20 },
  itemContainer: { flexDirection: 'row', padding: 15, alignItems: 'center', borderBottomWidth: 1, borderColor: '#ccc' },
});

export default Screen2;
