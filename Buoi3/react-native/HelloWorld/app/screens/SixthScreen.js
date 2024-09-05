import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TextInput,
  Button,
} from "react-native";
import { RadioButton } from "react-native-paper";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function SixthScreen() {
  const [isVisible, setVisible] = useState(false);

  const [password, setPassword] = useState("");

  const [value, setValue] = useState("male");
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
          <TextInput placeholder="Name" style={styles.textInput}></TextInput>
          <TextInput
            placeholder="Phone"
            keyboardType="numeric"
            style={styles.textInput}
          />
          <TextInput
            keyboardType="email-address"
            placeholder="Email"
            style={styles.textInput}
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
          <TextInput placeholder="Birthday" style={styles.textInput} />

          <View style={{ marginBottom: 20 }}>
            <RadioButton.Group
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <RadioButton value="male" />
                  <Text>Male</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <RadioButton value="female" />
                  <Text>Female</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>
          <Button title="REGISTER" color={"#C34E3B"} />
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            When you agree to terms and conditions
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    backgroundColor: "#CAE1D1",
    marginBottom: 25,
  },
});
