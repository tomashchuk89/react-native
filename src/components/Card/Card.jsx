import {View, Text, Image, Pressable} from "react-native";
import { styles } from "./styles";
import FastImage from 'react-native-fast-image';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import CustomPressable from '../CustomPressable/CustomPressable';

 
const Card = ({ cardItem }) => {
  const [heartColor, setHeartColor] = useState('black');

  const toggleHeartColor = () => {
    setHeartColor(heartColor === 'black' ? 'red' : 'black');
  };
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.imgBox}>
          <Image
            source={{
              uri: cardItem.image,
              priority: FastImage.priority.high,
            }}
            style={styles.image}
          />
        </View>

        <View style={styles.maincardItem}>
          <View style={styles.containerDescript}>
            <Text style={styles.title}>{cardItem.title}</Text>
            <CustomPressable onPress={toggleHeartColor}>
              <AntDesign name="heart" size={24} color={heartColor} />
            </CustomPressable>
          </View>

          <View>
            {cardItem.isNew ? (
              <Text>
                <Text style={styles.priseNew}>New price </Text>
                <Text style={styles.oldPrice}>Older price</Text>
              </Text>
            ) : (
              <Text>Old price</Text>
            )}
          </View>

          <View style={styles.descripBuy}>
            <Text style={styles.description} numberOfLines={1}>
              {cardItem.descript}
            </Text>
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