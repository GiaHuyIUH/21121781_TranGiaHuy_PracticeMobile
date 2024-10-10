import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Feather from "@expo/vector-icons/Feather";

// Tab Navigator
const Tab = createMaterialTopTabNavigator();

// Sample data for food items
const foodData = [
  {
    id: "1",
    name: "Tasty Donut",
    price: "$10.00",
    description: "Spicy tasty donut family",
    image: require("../assets/images/tastydonut.png"),
  },
  {
    id: "2",
    name: "Pink Donut",
    price: "$20.00",
    description: "Spicy tasty donut family",
    image: require("../assets/images/pink.png"),
  },
  {
    id: "3",
    name: "Floating Donut",
    price: "$30.00",
    description: "Spicy tasty donut family",
    image: require("../assets/images/floating.png"),
  },
  {
    id: "4",
    name: "Tasty Donut",
    price: "$10.00",
    description: "Spicy tasty donut family",
    image: require("../assets/images/tastydonut.png"),
  },
  {
    id: "5",
    name: "Tasty Donut",
    price: "$10.00",
    description: "Spicy tasty donut family",
    image: require("../assets/images/tastydonut.png"),
  },
  {
    id: "6",
    name: "Tasty Donut",
    price: "$10.00",
    description: "Spicy tasty donut family",
    image: require("../assets/images/tasty.png"),
  },
];

function DonutScreen() {
  return (
    <FoodList data={foodData.filter((item) => item.name.includes("Donut"))} />
  );
}

function PinkDonutScreen() {
  return (
    <FoodList data={foodData.filter((item) => item.name.includes("Pink"))} />
  );
}

function FloatingDonutScreen() {
  return (
    <FoodList
      data={foodData.filter((item) => item.name.includes("Floating"))}
    />
  );
}

const FoodList = ({ data }) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.foodItem}>
          <Image source={item.image} style={styles.foodImage} />
          <View style={styles.foodInfo}>
            <Text style={styles.foodName}>{item.name}</Text>
            <Text style={styles.foodDescription}>{item.description}</Text>
            <Text style={styles.foodPrice}>{item.price}</Text>
          </View>
          <TouchableOpacity
            style={{ position: "absolute", bottom: 0, right: 0 }}
            onPress={() => {
              navigation.navigate("Screen2", { ...item });
            }}
          >
            <Feather name="plus-square" size={44} color="#f1b000" />
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default function Screen1() {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, Jala!</Text>
      <Text style={styles.headerText}>Choice your Best food</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search food"
        value={searchText}
        onChangeText={setSearchText}
      />

      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: "#f8f8f8" },
          tabBarIndicatorStyle: { backgroundColor: "#ffcc00" }, // Tab indicator styling
        }}
      >
        <Tab.Screen name="Donut" component={DonutScreen} />
        <Tab.Screen name="Pink Donut" component={PinkDonutScreen} />
        <Tab.Screen name="Floating Donut" component={FloatingDonutScreen} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  welcomeText: {
    fontSize: 16,
    color: "#ccc",
  },
  headerText: {
    fontWeight: "700",
    fontSize: 24,
    marginVertical: 8,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  foodItem: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8d8d8",
    padding: 10,
    borderRadius: 10,
    marginVertical: 8,
  },
  foodImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  foodInfo: {
    flex: 1,
    marginLeft: 16,
  },
  foodName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  foodDescription: {
    fontSize: 12,
    color: "#888",
  },
  foodPrice: {
    fontWeight: "bold",
    marginTop: 8,
  },
});
