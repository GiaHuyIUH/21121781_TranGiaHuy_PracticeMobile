import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ProductScreen = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const colors = ["#B3E5FC", "#F44336", "#000000", "#1E88E5"]; // Colors displayed

  return (
    <View style={styles.container}>
      <View style={styles.productInfo}>
        <Image
          source={require("../assets/images/image.png")}
          style={styles.productImage}
        />
        <View style={styles.productDescription}>
          <Text style={styles.productTitle}>Điện Thoại Vsmart Joy 3</Text>
          <Text style={styles.productSubtitle}>Hàng chính hãng</Text>
        </View>
      </View>

      <View style={styles.colorSection}>
        <Text style={styles.colorText}>Chọn một màu bên dưới:</Text>
        <View style={styles.colorOptions}>
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.colorBox,
                {
                  backgroundColor: color,
                  borderWidth: selectedColor === color ? 3 : 1,
                },
              ]}
              onPress={() => setSelectedColor(color)}
            />
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>XONG</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#E0E0E0",
  },
  productInfo: {
    flex: 0.5,
    flexDirection: "row",
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: "contain",
  },
  productDescription: {
    marginLeft: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productSubtitle: {
    fontSize: 14,
    color: "#777",
  },
  colorSection: {
    flex: 2,
    backgroundColor: "#C7C7C7",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  colorText: {
    fontSize: 16,
    marginBottom: 10,
  },
  colorOptions: {
    flexDirection: "column",
    alignItems: "center",
  },
  colorBox: {
    width: 50,
    height: 50,
    marginVertical: 5,
    borderColor: "#000",
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  submitButton: {
    backgroundColor: "#3F51B5",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  submitButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProductScreen;
