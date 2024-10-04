import React, { useState, useEffect, useContext } from 'react';
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
import Entypo from '@expo/vector-icons/Entypo';

const Screen3 = ({ navigation }) => {
  const { userName } = useContext(UserContext);

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
            Have agrate day ahead
          </Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            textTransform: 'uppercase',
            textAlign: 'center',
            fontWeight: 600,
            fontSize: 34,
          }}>
          add your job
        </Text>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            borderWidth: 1,
            borderColor: '#000',
            marginVertical: 20,
          }}>
          <TouchableOpacity
            style={{ paddingVertical: 10, marginHorizontal: 10 }}>
            <Entypo name="menu" size={24} color="#1dd75b" />
          </TouchableOpacity>
          <TextInput
            placeholder="Input your Job"
            style={{ paddingVertical: 10, width: '90%' }}></TextInput>
        </View>
      </View>
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
            onPress={()=>navigation.navigate('Detail')}>
            <AntDesign name="plus" size={24} color="white" />
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  
});

export default Screen3;
