import { react } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const Item = ({ image, description, vote, price }) => {
  return (
    <TouchableOpacity style={{ flex: 1, margin: 30, alignItems: 'center' }}>
      <Image
        source={{
          uri: image,
        }}
        style={{ resizeMode: 'contain', width: '100%', height: '100%' }}
      />
      <Text>{description}</Text>
      <View style={{ flexDirection: 'row' }}>
        <AntDesign name="star" size={24} color="yellow" />
        <AntDesign name="star" size={24} color="yellow" />
        <AntDesign name="star" size={24} color="yellow" />
        <AntDesign name="star" size={24} color="yellow" />
        <AntDesign name="staro" size={24} color="grey" />
        <Text>({vote})</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontWeight: '800' }}>{price}</Text>
        <Text style={{ textDecorationLine: 'underline', color: 'grey' }}>
          -39%
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const data = [
  {
    id: '01',
    img: 'https://instructor-academy.onlinecoursehost.com/content/images/size/w2000/2023/05/6-Why-Create-Online-Courses-Top-10-Unexpected-Reasons.jpg',
    des: 'Cáp chuyển từ cổng USB sang PS2...',
    price: '200.000 đ',
    vote: '25',
  },
  {
    id: '02',
    img: 'https://instructor-academy.onlinecoursehost.com/content/images/size/w2000/2023/05/6-Why-Create-Online-Courses-Top-10-Unexpected-Reasons.jpg',
    des: 'Cáp chuyển từ cổng USB sang PS2...',
    price: '200.000 đ',
    vote: '25',
  },
  {
    id: '03',
    img: 'https://instructor-academy.onlinecoursehost.com/content/images/size/w2000/2023/05/How-to-Create-an-Online-Course-For-Free--Complete-Guide--6.jpg',
    des: 'Cáp chuyển từ cổng USB sang PS2...',
    price: '200.000 đ',
    vote: '25',
  },
  {
    id: '04',
    img: 'https://instructor-academy.onlinecoursehost.com/content/images/size/w2000/2023/05/6-Why-Create-Online-Courses-Top-10-Unexpected-Reasons.jpg',
    des: 'Cáp chuyển từ cổng USB sang PS2...',
    price: '200.000 đ',
    vote: '25',
  },
  {
    id: '05',
    img: 'https://instructor-academy.onlinecoursehost.com/content/images/size/w2000/2023/05/6-Why-Create-Online-Courses-Top-10-Unexpected-Reasons.jpg',
    des: 'Cáp chuyển từ cổng USB sang PS2...',
    price: '200.000 đ',
    vote: '25',
  },
  {
    id: '06',
    img: 'https://instructor-academy.onlinecoursehost.com/content/images/size/w2000/2023/05/6-Why-Create-Online-Courses-Top-10-Unexpected-Reasons.jpg',
    des: 'Cáp chuyển từ cổng USB sang PS2...',
    price: '200.000 đ',
    vote: '25',
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Item image={item.img} description={item.des} price={item.price} />
        )}
        keyExtractor={(item) => item.id}
         numColumns={2} 
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </View>
  );
};

export default HomeScreen;
