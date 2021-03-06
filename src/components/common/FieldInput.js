import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const FieldInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry
}) => {
  const { containerStyle, inputStyle, labelStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flexDirection: "row",
    alignItems: "center"
  }
});

export default FieldInput;
