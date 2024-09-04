import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function FirstScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#00CCF9" }}>
      <View
        style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}
      >
        <View
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
            borderColor: "#000",
            borderWidth: "12px",
          }}
        ></View>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.h1}>GROW</Text>
        <Text style={styles.h1}>YOUR BUSINESS</Text>
      </View>
      <View style={{ flex: 1.5 }}>
        <Text style={styles.text}>
          We will help you to grow your business using
        </Text>
        <Text style={styles.text}>online server</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 40,
          }}
        >
          <TouchableOpacity style={styles.btn}>
            <Text>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = {
  h1: {
    fontWeight: 700,
    fontSize: 20,
    textAlign: "center",
  },
  text: {
    fontWeight: 700,
    textAlign: "center",
  },
  btn: {
    backgroundColor: "yellow",
    paddingHorizontal: 20,
    borderRadius: "10px",
    paddingVertical: 10,
    fontWeight: 600,
  },
};
