import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import RootNavigator from './navigator/RootNavigator'

export default function App() {
  return (
  //   <SafeAreaView style={styles.container}>
  //     <View
  //       style={{
  //         borderWidth: 2,
  //         borderColor: 'purple',
  //         width: 200,
  //         height: 200,
  //       }}></View>
  //     <View>
  //       <Text
  //         style={{
  //           textTransform: 'uppercase',
  //           fontWeight: 800,
  //           color: 'purple',
  //         }}>
  //         Manage your task
  //       </Text>
  //     </View>
  //     <View
  //       style={{
  //         flexDirection: 'row',
  //         borderWidth: 1,
  //         justifyContent: 'space-around',
  //         width: '80%',
  //       }}>
  //       <Fontisto name="email" size={24} color="black" />
  //       <TextInput placeholder="Enter your name"></TextInput>
  //     </View>
  //     <View style={{  width: '100%', alignItems: 'center' }}>
  //       <TouchableOpacity
  //         style={{ backgroundColor: 'blue', borderRadius: 20, width: '30%', padding: 10  }}>
  //         <Text style={{ color: 'white', textAlign: 'center' }}>Get started</Text>
  //       </TouchableOpacity>
  //     </View>
  //   </SafeAreaView>

  <>
    <RootNavigator/>
  </>
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
