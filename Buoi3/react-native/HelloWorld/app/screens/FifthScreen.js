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
import FontAwesome from "@expo/vector-icons/FontAwesome";

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
              marginBottom: 35,
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
          <Button title="LOGIN" color={"red"} />
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text>When you agree to terms and conditions</Text>
          <TouchableOpacity>
            <Text style={{ color: "blue" }}>Forgot Password?</Text>
          </TouchableOpacity>
          <Text>Or login with</Text>
          <View
            style={{
              flexDirection: "row",
              borderWidth: 2,
              borderColor: "blue",
              marginTop: 30,
            }}
          >
            <TouchableOpacity style={{ paddingHorizontal: 10 }}>
              <FontAwesome name="facebook-official" size={30} color="blue" />
            </TouchableOpacity>

            <TouchableOpacity style={{ paddingHorizontal: 10 }}>
              <FontAwesome5 name="instagram-square" size={30} color="pink" />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingHorizontal: 10 }}>
              <FontAwesome name="google-plus-square" size={30} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
