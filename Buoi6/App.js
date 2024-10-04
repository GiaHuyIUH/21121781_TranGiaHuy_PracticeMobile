import { View, TouchableOpacity, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { AntDesign, FontAwesome, Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Fontisto from "@expo/vector-icons/Fontisto";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomHeader = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#1BA9FF",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <TouchableOpacity>
        <AntDesign
          name="arrowleft"
          size={24}
          color="white"
          style={{ padding: 10 }}
        />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          width: "60%",
          backgroundColor: "#fff",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <FontAwesome name="search" size={24} color="black" />
        </TouchableOpacity>
        <TextInput style={{ marginVertical: 7 }}></TextInput>
      </View>
      <TouchableOpacity>
        <AntDesign name="shoppingcart" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Entypo name="dots-three-horizontal" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  const data = [
    {
      id: "01",
      name: "Football",
      price: 1200,
      description: "Course teach student to play football advanced",
    },
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Welcome",
            header: () => <CustomHeader />,
          }}
        ></Stack.Screen>
      </Stack.Navigator>

      {/* <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#1BA9FF",
          tabBarStyle: { backgroundColor: "#1BA9FF" },
        }}
      >
        <Tab.Screen
          name="Menu"
          component={{}}
          options={{
            tabBarIcon: () => {
              <Entypo name="menu" size={24} color="black" />;
            },
          }}
        />

        <Tab.Screen
          name="Menu"
          component={{}}
          options={{
            tabBarIcon: () => {
              <Entypo name="home" size={24} color="black" />;
            },
          }}
        />
        <Tab.Screen
          name="Menu"
          component={{}}
          options={{
            tabBarIcon: () => {
              <Fontisto name="arrow-return-left" size={24} color="black" />;
            },
          }}
        />
      </Tab.Navigator> */}
    </NavigationContainer>

    // <SafeAreaView style={styles.container}>
    //   <FlatList data={data}>

    //   </FlatList>
    // </SafeAreaView>
  );
}
