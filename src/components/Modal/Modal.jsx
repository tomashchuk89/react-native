import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./ModalStyle";
import CustomPressable from '../CustomPressable/CustomPressable';

const Modals = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(!modalVisible);
  };


  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
          style={styles.centeredView}
          activeOpacity={1}
          onPress={() => closeModal()}
        >
          <View style={styles.centeredView}>
              <TouchableOpacity
                style={styles.modalView}
                onPress={() => setModalVisible(true)}
                activeOpacity={1}
              >
                <CustomPressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => closeModal()}
                >
                  <Text style={styles.textStyle}>Close Modal</Text>
                </CustomPressable>
           
           
              </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      <CustomPressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <AntDesign name="heart" size={24} color="red" />
      </CustomPressable>
    </View>
  );
};


export default Modals;
