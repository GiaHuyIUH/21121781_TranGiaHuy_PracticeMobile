import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TextInput } from "react-native-paper";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function EighthScreen() {
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");

  const [isVisible, setVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      <View
        style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}
      >
        <FontAwesome6 name="eye" size={64} color="black" />
      </View>

      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#fff",
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
          />
          <TextInput
            placeholder="Name"
            onChange={(text) => setName(text)}
            style={{ backgroundColor: "#fff", flex: 1 }}
          />
        </View>
        <View
          style={{
            backgroundColor: "#fff",
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
          />
          <TextInput
            placeholder="Password"
            style={{ backgroundColor: "#fff", flex: 1 }}
            secureTextEntry={!isVisible}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            style={{ alignSelf: "center", marginRight: 20 }}
            onPress={() => {
              setVisible(!isVisible);
            }}
          >
            <FontAwesome5
              name={isVisible ? "eye" : "eye-slash"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <Button title="LOGIN" color={"#386FFC"} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <TouchableOpacity>
              <Text>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Forgot Password</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "#000", // Color of the line
              marginHorizontal: 5,
              alignSelf: "center",
            }}
          />
          <Text style={{}}>Other Login Methods</Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "#000", // Color of the line
              marginHorizontal: 5,
              alignSelf: "center",
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 10,
          }}
        >
          <TouchableOpacity>
            <FontAwesome name="facebook-official" size={30} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="instagram-square" size={30} color="pink" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="google-plus-square" size={30} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
