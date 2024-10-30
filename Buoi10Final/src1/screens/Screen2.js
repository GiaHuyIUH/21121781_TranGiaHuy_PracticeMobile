import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, deleteTodo, updateTodo } from "../redux/todos/todoSlice";
import { UserContext } from "../context/UserContext";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Screen2 = ({ navigation }) => {
  const { userName } = useContext(UserContext);
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.todos);

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdate = (id, updatedName) => {
    dispatch(updateTodo({ id, updatedName }));
    setSelectedItem(null);
  };

  const itemRender = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity>
          {item.status === true ? (
            <Fontisto name="checkbox-active" size={24} color="#379f5b" />
          ) : (
            <Fontisto name="checkbox-passive" size={24} color="#379f5b" />
          )}
        </TouchableOpacity>
        {selectedItem?.id === item.id ? (
          <TextInput
            style={{
              fontWeight: "700",
              fontSize: 22,
              flex: 1,
              marginRight: 10,
            }}
            value={selectedItem.name}
            onChangeText={(text) =>
              setSelectedItem((prev) => ({ ...prev, name: text }))
            }
          />
        ) : (
          <Text style={{ fontWeight: "700", fontSize: 22 }}>{item.name}</Text>
        )}
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() =>
              selectedItem?.id === item.id
                ? handleUpdate(item.id, selectedItem.name)
                : setSelectedItem(item)
            }
          >
            <FontAwesome5
              name={selectedItem?.id === item.id ? "check" : "pencil-alt"}
              size={24}
              color={selectedItem?.id === item.id ? "#379f5b" : "#e06f70"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(item.id)}>
            <MaterialIcons name="delete" size={24} color="#e06f70" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Image
          source={{ uri: "https://example.com/user.png" }}
          style={{ width: 50, height: 50, borderRadius: 40 }}
        />
        <View>
          <Text style={{ fontWeight: "700" }}>Hi {userName}</Text>
          <Text style={{ color: "#696b6f", marginVertical: 10 }}>
            Have a great day ahead
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          marginTop: 10,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={itemRender}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
