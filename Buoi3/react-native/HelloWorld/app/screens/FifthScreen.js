import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function FifthScreen() {
  const [password, setPassword] = useState("");

  const [isVisible, setVisible] = useState(false);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#D8EFDF", padding: 15 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ fontWeight: 800, fontSize: 35 }}>LOGIN</Text>
        </View>
        <View style={{ flex: 1 }}>
          <TextInput
            keyboardType="email-address"
            placeholder="Email"
            style={{
              padding: 10,
              backgroundColor: "#CAE1D1",
              marginBottom: 25,
            }}
          />
          <View
            style={{
              padding: 10,
              backgroundColor: "#CAE1D1",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              secureTextEntry={!isVisible}
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity onPress={() => setVisible(!isVisible)}>
              <FontAwesome5
                name={isVisible ? "eye" : "eye-slash"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Button title="LOGIN" color={"red"} />
        </View>
        <View style={{ flex: 1 }}></View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
