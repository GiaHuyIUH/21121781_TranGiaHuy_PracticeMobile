import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Fontisto from "@expo/vector-icons/Fontisto";

export default function ThirdScreen() {
  return (
    <View style={{ flex: 1, margin: 15 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <MaterialIcons name="lock" size={100} color="black" />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontWeight: 800, fontSize: 30 }}>FORGET</Text>
        <Text style={{ fontWeight: 800, fontSize: 30 }}> PASSWORD</Text>
        <Text style={{ fontSize: 18, fontWeight: 600, marginTop: 20 }}>
          Provide your account's email for which you
        </Text>
        <Text style={{ fontSize: 18, fontWeight: 600 }}>
          want to reset your password
        </Text>
      </View>

      <View style={{ flex: 1.5 }}>
        <View
          style={{
            marginBottom: 40,
            flexDirection: "row",
            padding: 10,
            backgroundColor: "grey",
          }}
        >
          <Fontisto
            name="email"
            size={24}
            color="black"
            style={{ margin: 5 }}
          />
          <TextInput placeholder="Email" />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "yellow",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Text style={{ color: "#000", fontWeight: 600 }}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
