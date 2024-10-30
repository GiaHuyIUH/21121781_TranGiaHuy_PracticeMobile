import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Image
  } from 'react-native';
  import {useContext, useState} from 'react';
  import Fontisto from '@expo/vector-icons/Fontisto';
  import {UserContext} from '../context/UserContext'
  
  
  
  const Screen1 = ({navigation}) => {
    const { setUserName } = useContext(UserContext); 
    const [name, setName] = useState(''); // Local state for the input
  
    const handleNameChange = (e) => {
      e.preventDefault();
  
      setName(e.target.value);
      setUserName(e.target.value);
    }
  
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            width: 200,
            height: 200,
          }}>
          <Image source={require("../assets/logo.png")} style={{resizeMode: 'cover', width: '100%', height: '100%'}}>
  
          </Image>
          </View>
        <View>
          <Text
            style={{
              textTransform: 'uppercase',
              fontWeight: 800,
              color: 'purple',
            }}>
            Manage your task
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            justifyContent: 'space-around',
            width: '80%',
            borderRadius: 5,
            padding: 5
          }}>
          <Fontisto name="email" size={24} color="black" />
          <TextInput value={name} placeholder="Enter your name" onChange={handleNameChange}></TextInput>
        </View>
        <View style={{  width: '100%', alignItems: 'center' }}>
          <TouchableOpacity
            style={{ backgroundColor: '#00bdd6', borderRadius: 5, width: '40%', padding: 10  }} onPress={()=>navigation.navigate('Detail')}>
            <Text style={{ color: 'white', textAlign: 'center' }}>Get started</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      padding: 8,
      margin: 10,
    },
    
  });
  
  export default Screen1;