import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import cover from "../images/image.png";
import decrease from "../images/decrease.png";
import increase from "../images/increase.png";

const Screen3 = () => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(141.8);

  const handleClickIncrease = () => {
    setCount(count + 1);
    setPrice(price + 141.8);
  };

  const handleClickDecrease = () => {
    setCount(count - 1 >= 1 ? count - 1 : 1);
    if (count - 1 >= 1) {
      setPrice(price - 141.8);
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#fff", padding: 20 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Image source={cover} style={styles.image} />
          <View>
            <Text style={styles.label}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={styles.label}>Cung cấp bởi Tiki Trading</Text>
            <Text style={{ color: "red", fontSize: 18, fontWeight: 600 }}>
              {price} đ
            </Text>
            <Text
              style={{
                textDecorationLine: "line-through",
                color: "#ccc",
                fontWeight: 600,
                marginTop: 5,
              }}
            >
              141.000 đ
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity onPress={handleClickDecrease}>
                  <Image source={decrease} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, marginHorizontal: 15 }}>
                  {count}
                </Text>
                <TouchableOpacity onPress={handleClickIncrease}>
                  <Image source={increase} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Text style={{ color: "blue" }}>Mua sau</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ marginRight: 30 }}>Mã giảm giá đã lưu</Text>
          <TouchableOpacity>
            <Text style={{ color: "blue" }}>Xem tại đây</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <TextInput
            placeholder="Mã giảm giá"
            style={{
              flex: 2,
              borderWidth: 0.5,
              marginRight: 10,
              fontSize: 16,
            }}
          />
          <TouchableOpacity style={[styles.button1, { flex: 1 }]}>
            <Text style={styles.buttonText}>Áp dụng</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?{" "}
          <Text style={styles.linkText}>Nhập tại đây?</Text>
        </Text>
      </View>
      {/* Subtotal */}
      <View style={styles.row}>
        <Text style={styles.label}>Tạm tính</Text>
        <Text style={styles.price}>{price} đ</Text>
      </View>
      {/* Gray Box */}
      <View style={styles.grayBox}></View>
      {/* Total */}
      <View style={{ backgroundColor: "#fff" }}>
        <View style={styles.row}>
          <Text style={styles.label}>Thành tiền</Text>
          <Text style={styles.price}>{price} đ</Text>
          {/* Order Button */}
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
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
    backgroundColor: "#ccc",
    padding: 0,
    margin: 0,
    justifyContent: "space-between",
  },
  image: {
    width: 130,
    height: 150,
    marginBottom: 20,
    resizeMode: "cover",
    marginRight: 10,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  label: { marginTop: 5, marginBottom: 5, fontWeight: "bold" },
  button1: {
    backgroundColor: "#007BFF",
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    margin: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  header: {
    marginBottom: 20,
    backgroundColor: "#fff",
    width: "100%",
    padding: 20,
  },
  headerText: {
    fontSize: 14,
    color: "#000",
  },
  linkText: {
    color: "#007BFF",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#fff",
    width: "100%",
  },

  price: {
    fontSize: 16,
    color: "#E91E63",
  },
  grayBox: {
    height: 100,
    backgroundColor: "#D3D3D3",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "red",
    paddingVertical: 10,
  },
});

export default Screen3;
