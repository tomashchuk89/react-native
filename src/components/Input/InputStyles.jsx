import { StyleSheet } from "react-native";
import { colors } from '../Colors';


export const styles = StyleSheet.create({

  inputBlock: {
    width: '95%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  input: {
    width:280,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },

  blocksBtn: {
    height: 60,
    width: '20%',
    flexDirection: "row", 
    alignItems: "center",
  },

});