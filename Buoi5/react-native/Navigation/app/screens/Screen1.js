import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../images/image.png")}
          style={{ width: 200, height: 200, resizeMode: "contain" }}
        />
        <Text>Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View>
          <View></View>
          <Text>(Xem 828 đánh giá)</Text>
        </View>
       <View style={{flexDirection: 'row'}}>
       <Text style={{ color: "red", marginRight: 20 }}>1.990.000đ</Text>
       <Text style={{ color: "#000", textDecorationLine: "line-through" }}>1.990.000đ</Text>
       </View>
       <Text style={{textTransform: "uppercase", color: "red", fontWeight: 600, fontSize: 10}}>Ở đâu rẻ hơn hoàn tiền</Text>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  text: {
    fontSize: 20,
    color: "#333",
  },
});

export default Screen1;
