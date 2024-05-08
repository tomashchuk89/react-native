import React from 'react';
import {SafeAreaView, TextInput, View, Pressable} from 'react-native';
import { styles } from "./InputStyles";
import  { useState } from 'react';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Modals from '../Modal/Modal';
import CustomPressable from '../CustomPressable/CustomPressable';

const InputElement = ({setData, data, searchValue, setSearchValue, handleSearch }) => {
    const [searchVisible, setSearchVisible] = useState(false);
    
    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
        setSearchValue('');
        setData(data);
      };


    const handleChangeText = (text) => {
        setSearchValue(text);
        handleSearch(text);
      
    };


  return (
    <SafeAreaView>
      <View style={styles.inputBlock}>
        {searchVisible && (
          <TextInput
            style={styles.input}
            onChangeText={handleChangeText}
            value={searchValue}
            placeholder="Ведіть назву піци"

          />
        )}
        <View style={styles.blocksBtn}>
          <Modals />
          <CustomPressable  onPress={toggleSearch}>
            <EvilIcons name="search" size={32} color="black" />
          </CustomPressable>
        </View>
      </View>
    </SafeAreaView>
  );
};


  
  export default InputElement;