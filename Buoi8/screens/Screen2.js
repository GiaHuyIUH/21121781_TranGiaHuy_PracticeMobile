import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Screen2 = ({ route }) => {
  const { name, description, price, image } = route.params;
  const [prices, setPrice] = useState(price);
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={image}
          style={{ width: "100%", height: 300, resizeMode: "cover" }}
        />
        <View>
          <Text>{name}</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>{description}</Text>
            <Text>{price}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Delivery in 30 min</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => {
                setQuantity(quantity - 1);
              }}
            >
              <Image source={require("../assets/images/dec.png")} />
            </TouchableOpacity>
            <Text>{quantity}</Text>
            <TouchableOpacity>
              <Image
                source={require("../assets/images/inc.png")}
                nPress={() => {
                  setQuantity(quantity + 1);
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{
            alignItems: "center",
            padding: 15,
            backgroundColor: "#f1b000",
          }}
        >
          <Text style={{ color: "#fff" }}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    margin: 0,
  },
});

export default Screen2;
