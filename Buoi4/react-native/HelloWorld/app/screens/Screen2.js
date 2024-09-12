import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
const Screen2 = () => {
  const [rating, setRating] = useState(0);

  const stars = [1, 2, 3, 4, 5];

  const renderRatingLabel = (rating) => {
    switch (rating) {
      case 1:
        return "Không hài lòng";
      case 2:
        return "Tạm chấp nhận";
      case 3:
        return "Bình thường";
      case 4:
        return "Hài lòng";
      case 5:
        return "Cực kỳ hài lòng";
      default:
        return "";
    }
  };

  const [feedback, setFeedback] = useState("");

  const handlePress = () => {
    console.log(feedback);
    alert("Feedback Sent!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{renderRatingLabel(rating)}</Text>

      <View style={styles.starsContainer}>
        {stars.map((star, index) => (
          <TouchableOpacity key={index} onPress={() => setRating(star)}>
            <Icon
              name={star <= rating ? "star" : "star-o"}
              size={40}
              color={star <= rating ? "#FFD700" : "#E0E0E0"}
            />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.camera}>
        <TouchableOpacity style={styles.touchCamera}>
          <Icon name="camera" size={40} color="#000" />
          <Text style={{ fontWeight: 600, alignSelf: "center" }}>
            Thêm hình ảnh
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
          placeholderTextColor="#A9A9A9"
          value={feedback}
          onChangeText={setFeedback}
          multiline={true}
        />

        <Text style={styles.link}>https://meet.google.com/nsj-ojwi-xpp</Text>
      </View>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text
          style={{
            color: "white",
          }}
        >
          Gửi
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 50,
    margin: 20,
  },
  labelText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  starsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  touchCamera: {
    flexDirection: "row",
    padding: 10,
  },
  camera: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "blue",
    padding: 10,
    marginTop: 20,
  },

  input: {
    width: "100%",
    height: 300,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  link: {
    color: "#007BFF",
    textDecorationLine: "underline",
    marginBottom: 20,
  },
  button: {
    width: "100%",
    padding: 10,
    backgroundColor: "blue",
    alignItems: "center",
    borderRadius: 15,
  },
});

export default Screen2;
