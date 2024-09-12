import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TextInput } from "react-native-paper";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function Screen1() {
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");

  const [isVisible, setVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "#F0C201", padding: 20 }}>
      <View style={{ flex: 0.5, justifyContent: "center" }}>
        <Text
          style={{
            fontWeight: 700,
            fontSize: 35,
          }}
        >
          LOGIN{" "}
        </Text>{" "}
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#DDBE3B",
            justifyContent: "flex-start",
            flexDirection: "row",
            marginBottom: 35,
          }}
        >
          <FontAwesome
            name="user"
            size={34}
            color="black"
            style={{ alignSelf: "center", marginLeft: 10 }}
          />{" "}
          <TextInput
            placeholder="Name"
            onChange={(text) => setName(text)}
            style={{ backgroundColor: "#DDBE3B", flex: 1 }}
          />{" "}
        </View>{" "}
        <View
          style={{
            backgroundColor: "#DDBE3B",
            justifyContent: "flex-start",
            flexDirection: "row",
            marginBottom: 35,
          }}
        >
          <Fontisto
            name="locked"
            size={34}
            color="black"
            style={{ alignSelf: "center", marginLeft: 10 }}
          />{" "}
          <TextInput
            placeholder="Password"
            style={{ backgroundColor: "#DDBE3B", flex: 1 }}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!isVisible}
          />{" "}
          <TouchableOpacity
            style={{ alignSelf: "center", marginRight: 20 }}
            onPress={() => setVisible(!isVisible)}
          >
            <FontAwesome5
              name={isVisible ? "eye" : "eye-slash"}
              size={24}
              color="black"
            />
          </TouchableOpacity>{" "}
        </View>{" "}
        <View style={{ flex: 1 }}>
          <Button title="LOGIN" color={"#000"} />{" "}
          <TouchableOpacity>
            <Text
              style={{
                fontWeight: 700,
                fontSize: 20,
                textAlign: "center",
                marginTop: 20,
              }}
            >
              CREATE ACCOUNT{" "}
            </Text>{" "}
          </TouchableOpacity>{" "}
        </View>{" "}
      </View>{" "}
    </View>
  );
}
