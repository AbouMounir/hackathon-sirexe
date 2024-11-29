import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export default function CustomButton({icon, onPress, buttonText,fontSize = 16, backgroundColorStyle = '#007BFF', textColor = '#FFFFFF', width = 200, height = 50, borderRadius = 10, buttonStyle}) {
  return (
      <Pressable
        style={[
          styles.button,
          { backgroundColor: backgroundColorStyle, width, height, borderRadius, buttonStyle },
        ]}
        onPress={onPress}
      >
        {icon}
        <Text style={[styles.buttonText, { color: textColor,fontSize: fontSize }]}>{buttonText}</Text>
      </Pressable>
  );
}

const styles = StyleSheet.create({
    button: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
    buttonText: {
      fontWeight: 'bold',
      marginLeft:5,
    },
  });
