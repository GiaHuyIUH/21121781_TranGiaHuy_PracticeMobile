import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";

export default function ForthScreen() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  // Refs to manage input focus
  const inputs = useRef([]);

  // Handle change for each input
  const handleChange = (text, index) => {
    // Lấy ra mảng newOtp từ mảng otp
    const [...newOtp] = otp;
    newOtp[index] = text;

    setOtp(newOtp);

    // Move to the next input if a number is entered
    if (text.length === 1 && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  return (
    <View style={{ flex: 1, margin: 15 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 60, fontWeight: 800 }}>CODE</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontWeight: 800, fontSize: 30 }}>VERIFICATION</Text>
        <Text style={{ fontSize: 18, fontWeight: 600, marginTop: 20 }}>
          Enter ontime password sent on
        </Text>
        <Text style={{ fontSize: 18, fontWeight: 600 }}>++849093606798</Text>
      </View>

      <View style={{ flex: 1.5 }}>
        <View style={styles.container}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              ref={(input) => (inputs.current[index] = input)} // Reference for focusing
              style={styles.input}
              keyboardType="numeric"
              maxLength={1} // Only allow one character per input
              value={value}
              onChangeText={(text) => handleChange(text, index)}
            />
          ))}
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "yellow",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Text style={{ color: "#000", fontWeight: 600 }}>VERIFY CODE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "#000",
    textAlign: "center",
    fontSize: 20,
    margin: 5, // Add margin between the input boxes
  },
});
