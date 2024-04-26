import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF8DC",
    borderColor: "gray",
    borderWidth: 1,
    height: 130,
    width: 380,
    borderRadius: 20,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },

  imgBox: {
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 100,
    height: 100,
    borderColor: "gray",
    borderRadius: 20,
    justifyContent: "space-between",
  },

  mainCard: {
    justifyContent: "space-between",
  },

  containerDescript: {
    flexDirection: "row",
    width: 240,
    justifyContent: "space-between",
  },

  title: {
    fontSize: "20",
    fontWeight: "500",
  },

  priseNew: {
    fontSize: "16",
    fontWeight: "700",
  },

  oldPrice: {
    textDecorationLine: "line-through",
    fontSize: "16",
    fontWeight: "400",
  },

  descripBuy: {
    flexDirection: "row",
    width: 240,
    justifyContent: "space-between",
    alignItems: "center",
  },

  description: {
    fontSize: "16",
    fontWeight: "400",
  },

  likeCart: {
    alignItems: "flex-start",
    justifyContent: "space-between",
  },

  buy: {
    fontSize: "16",
  },
});
