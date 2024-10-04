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
} from 'react-native';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Screen2 = ({ navigation }) => {
  const { userName } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [status, setStatus] = useState(true);

  useEffect(() => {
    fetch('https://66ff62072b9aac9c997f1c11.mockapi.io/api/v1/todos')
      .then((response) => response.json())
      .then((json) => {
        setData(json); // Store data in state
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  });

  console.log(data);

  const itemRender = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          backgroundColor: '#d3d5d8',
          padding: 15,
          borderRadius: 30,
          marginVertical: 10,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity>
          {item.status === true ? (
            <Fontisto name="checkbox-active" size={24} color="#379f5b" />
          ) : (
            <Fontisto name="checkbox-passive" size={24} color="#379f5b" />
          )}
        </TouchableOpacity>
        <Text style={{ fontWeight: 700, fontSize: 22 }}>{item.name}</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <FontAwesome5 name="pencil-alt" size={24} color="#e06f70" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="delete" size={24} color="#e06f70" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
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
            Have agrate day ahead
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          borderWidth: 1,
          borderColor: '#000',
        }}>
        <TouchableOpacity style={{ paddingVertical: 10, marginHorizontal: 10 }}>
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
        <TextInput
          placeholder="Search"
          style={{ paddingVertical: 10, width: '90%' }}></TextInput>
      </View>

      <View
        style={{
          flex: 1,
          marginTop: 10,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" /> // Show loading spinner
        ) : (
          <FlatList
            style={{ flex: 1, marginTop: 10, width: '100%' }}
            data={data} // Data from API
            keyExtractor={(item) => item.id} // Unique key for each item
            renderItem={itemRender} // Render each item using renderItem function
          />
        )}
        <View
          style={{
            width: '100%',
            height: '100%',
            flex: 0.5,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#26c3d9',
              flexDirection: 'row',
              width: '10%',
              height: '20%',
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}
            onPress={()=>navigation.navigate('Add')}>
            <AntDesign name="plus" size={24} color="white" />
          </TouchableOpacity>
        </View>
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
    margin: 15,
  },
});

export default Screen2;
