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

const Screen1 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: 600 }}>
          A premium online store for sporter and their stylish choice
        </Text>

        <View
          style={{
            backgroundColor: '#E941411A',
            borderRadius: 30,
            marginTop: 30,
            height: '50%',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../bic1.png')}
            style={{ resizeMode: 'contain', width: '', marginHorizontal: 30 }}
          />
        </View>

        <Text
          style={{
            fontSize: 23,
            fontWeight: 600,
            textAlign: 'center',
            marginTop: 20,
          }}>
          POWER BIKE SHOP
        </Text>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: '#e94141',
            borderRadius: 30,
            marginTop: 30,
          }}
          onPress={()=>{navigation.navigate('List')}}>
          <Text style={{ color: '#fff', fontSize: 22, paddingVertical: 10 }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures SafeAreaView takes full height
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
    justifyContent: 'space-between',
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
    flex: 1, // Ensures the FlatList takes up the available space
  },
  row: {
    justifyContent: 'space-between',
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

export default Screen1;
