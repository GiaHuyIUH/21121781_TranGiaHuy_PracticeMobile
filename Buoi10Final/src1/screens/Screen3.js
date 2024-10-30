import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../context/UserContext";
import { addTodo } from "../redux/todos/todoSlice";
import AntDesign from "@expo/vector-icons/AntDesign";

const Screen3 = ({ navigation }) => {
  const { userName } = useContext(UserContext);
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.todos);

  const handleFinish = () => {
    dispatch(addTodo(todo));
    navigation.navigate("Detail");
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontWeight: "bold" }}>Hi {userName}</Text>
        <Text style={{ color: "#696b6f", marginVertical: 10 }}>
          Have a great day ahead
        </Text>
      </View>
      <View>
        <Text style={styles.title}>Add Your Job</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Input your Job"
            onChangeText={setTodo}
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleFinish}
          disabled={loading}
        >
          <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    </View>
  );
};
