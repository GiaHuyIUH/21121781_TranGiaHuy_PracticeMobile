import React, { useState, useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const Screen2 = ({navigation}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState('All'); 

  const ItemRendered = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => navigation.navigate('Detail', { item })}>
        <TouchableOpacity style={styles.heartIcon}>
          <AntDesign name="hearto" size={18} color="black" />
        </TouchableOpacity>
        <Image
          style={styles.itemImage}
          source={{ uri: item.avatar }}
        />
        <Text>{item.name}</Text>
        <Text>$ {item.price}</Text>
      </TouchableOpacity>
    );
  };

  const fetchData = async () => {
    await fetch('https://6705d09d031fd46a831103dd.mockapi.io/api/v1/bikes')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>The world's Best Bike</Text>
        <View style={styles.menu}>
          <TouchableOpacity style={styles.MenuItemCover}>
            <Text style={styles.MenuItem} onPress={() => setType('All')}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.MenuItemCover}>
            <Text style={styles.MenuItem} onPress={() => setType('Road')}>Road Bike</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.MenuItemCover}>
            <Text style={styles.MenuItem} onPress={() => setType('Mountain')}>Mountain</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.listContainer}>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            data={data.filter(bike =>
              type === 'All' || bike.name.toLowerCase().includes(type.toLowerCase())
            )}  
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ItemRendered item={item} />}
            numColumns={2}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    margin: 10,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 22,
    color: 'red',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  MenuItemCover: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'orange',
  },
  MenuItem: {
    color: 'grey',
    fontSize: 15,
    fontWeight: '600',
  },
  listContainer: {
    flex: 1,
  },
  itemContainer: {
    height: 150,
    width: 150,
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: '#F7BA8326',
    position: 'relative',
    margin: 10,
  },
  heartIcon: {
    position: 'absolute',
    top: 5,
    left: 5,
  },
  itemImage: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
  },
});

export default Screen2;
