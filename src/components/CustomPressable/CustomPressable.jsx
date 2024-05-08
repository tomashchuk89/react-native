import React from "react";
import { Pressable} from "react-native";

const CustomPressable = ({ children, onPress, style }) => {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ 
        color: "rgba(0, 0, 0, 0.1)",
         borderless: true }}
      style={({ pressed }) => [
        style,
        {
          transform: pressed ? "scale(1.3)" : "scale(1)",
        },
      ]}
    >
    {children}
    </Pressable>
  );
};

export default CustomPressable;
