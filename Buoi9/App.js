import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './screens/Screen1'
import Screen2 from './screens/Screen2'
import Screen3 from './screens/Screen3'



const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Screen1} options={{ headerShown: false }} />
                <Stack.Screen name="List" component={Screen2} options={{headerShown: false}} />
                <Stack.Screen name="Detail" component={Screen3} options={{headerShown: false}} />

            </Stack.Navigator>
        </NavigationContainer>
  );
}
