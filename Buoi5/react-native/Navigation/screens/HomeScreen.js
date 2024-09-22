import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({ route }) => {
  const navigation = useNavigation();
  const { selectedColor, source } = route.params;
  console.log(selectedColor, source);

  return (
    <View style={styles.container}>
      <View style={{ flex: 2, width: "100%", height: "100%" }}>
        <Image
          source={
            source === undefined
              ? require("../assets/images/image.png")
              : source
          }
          style={styles.image}
        />
      </View>
      <View style={{ flex: 1, width: "90%", justifyContent: "space-evenly" }}>
        <Text>Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <AntDesign name="star" size={24} color="yellow" />
            <AntDesign name="star" size={24} color="yellow" />

            <AntDesign name="star" size={24} color="yellow" />

            <AntDesign name="star" size={24} color="yellow" />

            <AntDesign name="star" size={24} color="yellow" />
          </View>
          <Text>(Xem 828 đánh giá)</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "red", marginRight: 20 }}>1.990.000đ</Text>
          <Text style={{ color: "#000", textDecorationLine: "line-through" }}>
            1.990.000đ
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              textTransform: "uppercase",
              color: "red",
              fontWeight: 600,
              fontSize: 10,
            }}
          >
            Ở đâu rẻ hơn hoàn tiền
          </Text>
          <TouchableOpacity style={{ marginLeft: 20 }}>
            <AntDesign name="questioncircleo" size={14} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            height: "15%",
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 5,
            position: "relative",
          }}
        >
          <TouchableOpacity
            style={{
              width: "100%",
            }}
            onPress={() => navigation.navigate("Details")}
          >
            <Text
              style={{
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              4 Màu-chọn màu
            </Text>
          </TouchableOpacity>
          <View style={{ position: "absolute", right: 20 }}>
            <FontAwesome5 name="greater-than" size={24} color="#ccc" />
          </View>
        </View>
      </View>
      <View style={{ flex: 1, width: "90%", position: "relative" }}>
        <TouchableOpacity
          style={{
            width: "100%",
            backgroundColor: "red",
            position: "absolute",
            bottom: 20,
            borderRadius: 5,
            height: "15%",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: 800,
              textAlign: "center",
            }}
          >
            CHỌN MUA
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    padding: 0,
    margin: 0,
  },
  text: {
    fontSize: 20,
    color: "#333",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default HomeScreen;
