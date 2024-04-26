import {View, Text, Image} from "react-native";
import { styles } from "./styles";
import FastImage from 'react-native-fast-image';
import { AntDesign } from '@expo/vector-icons';


 
const Card = ({ itemData }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.imgBox}>
          <Image
            source={{
              uri: itemData.image,
              priority: FastImage.priority.high,
            }}
            style={styles.image}
          />
        </View>

        <View style={styles.mainCard}>
          <View style={styles.containerDescript}>
            <Text style={styles.title}>{itemData.title}</Text>
            <AntDesign name="heart" size={24} color="red" />
          </View>

          <View>
            {itemData.isNew ? (
              <Text>
                <Text style={styles.priseNew}>New price </Text>
                <Text style={styles.oldPrice}>Older price</Text>
              </Text>
            ) : (
              <Text>Old price</Text>
            )}
          </View>

          <View style={styles.descripBuy}>
            <Text style={styles.description}>{itemData.descript}</Text>
            <Text style={styles.buy}>
              Buy
              <AntDesign name="shoppingcart" size={34} color="black" />
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;