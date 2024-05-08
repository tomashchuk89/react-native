import { StyleSheet } from "react-native";
import { colors } from '../Colors';


export const styles = StyleSheet.create({

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },

  modalView: {
    backgroundColor: colors.modalView,
    borderRadius: 8,
    padding: 50,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: 300,
    height:300,
  },
  button: {
    borderRadius: 7,
    padding: 2,
    elevation: 2,
 

  },
  buttonOpen: {
    
  },
  buttonClose: {
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: colors.modalBtnClose,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop:'0%',
    padding: 10,
    
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

});