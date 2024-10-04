import { react } from "react";
import { Text, FlatList, View, Image, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const Item = ({ image, description, vote, price }) => {
  return (
    <View
      style={{
        flex: 1,
        margin: 30,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        style={{
          width: "100%",
          height: "100% ",
          marginVertical: 20,
        }}
        onPress={() => navigation.navigate("ChatScreen")}
      >
        <Image
          source={{
            uri: image,
          }}
          style={{ resizeMode: "contain", width: "70%", height: "70%" }}
        />
        <Text>{description}</Text>
        <View style={{ flexDirection: "row" }}>
          <AntDesign name="star" size={24} color="yellow" />
          <AntDesign name="star" size={24} color="yellow" />
          <AntDesign name="star" size={24} color="yellow" />
          <AntDesign name="star" size={24} color="yellow" />
          <AntDesign name="staro" size={24} color="grey" />
          <Text>({vote})</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "800" }}>{price}</Text>
          <Text style={{ textDecorationLine: "underline", color: "grey" }}>
            -39%
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const data = [
  {
    id: "01",
    img: "https://instructor-academy.onlinecoursehost.com/content/images/size/w2000/2023/05/6-Why-Create-Online-Courses-Top-10-Unexpected-Reasons.jpg",
    des: "Cáp chuyển từ cổng USB sang PS2...",
    price: "200.000 đ",
    vote: "25",
  },
  {
    id: "02",
    img: "https://instructor-academy.onlinecoursehost.com/content/images/size/w2000/2023/05/6-Why-Create-Online-Courses-Top-10-Unexpected-Reasons.jpg",
    des: "Cáp chuyển từ cổng USB sang PS2...",
    price: "200.000 đ",
    vote: "25",
  },
  {
    id: "03",
    img: "https://instructor-academy.onlinecoursehost.com/content/images/size/w2000/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg",
    des: "Cáp chuyển từ cổng USB sang PS2...",
    price: "200.000 đ",
    vote: "25",
  },
  {
    id: "04",
    img: "https://instructor-academy.onlinecoursehost.com/content/images/size/w2000/2023/05/6-Why-Create-Online-Courses-Top-10-Unexpected-Reasons.jpg",
    des: "Cáp chuyển từ cổng USB sang PS2...",
    price: "200.000 đ",
    vote: "25",
  },
  {
    id: "05",
    img: "https://instructor-academy.onlinecoursehost.com/content/images/size/w2000/2023/05/6-Why-Create-Online-Courses-Top-10-Unexpected-Reasons.jpg",
    des: "Cáp chuyển từ cổng USB sang PS2...",
    price: "200.000 đ",
    vote: "25",
  },
  {
    id: "06",
    img: "https://instructor-academy.onlinecoursehost.com/content/images/size/w2000/2023/05/6-Why-Create-Online-Courses-Top-10-Unexpected-Reasons.jpg",
    des: "Cáp chuyển từ cổng USB sang PS2...",
    price: "200.000 đ",
    vote: "25",
  },
];

const HomeScreen = ({ navigation }) => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Item image={item.img} description={item.des} price={item.price} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </View>
  );
};

export default HomeScreen;
