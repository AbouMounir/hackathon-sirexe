import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default function TextInputCard({ textCard, value, onChangeText, placeholder, multiline=false,height=50, width='100%', numberOfLines, keyboardType="default",textAlignVertical='center', onBlur }) {
  return (
    <View style={{ marginVertical: 8, width }}>
    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#8B4513' }}>{textCard}</Text>
    <TextInput
      style={{
        height,
        borderColor: '#FFA500',
        borderWidth: 2,
        borderRadius: 5,
        paddingLeft: 8,
        marginTop: 8,
        textAlignVertical
      }}
      keyboardType={keyboardType}
      value={value}
      multiline={multiline}
      numberOfLines={numberOfLines}
      placeholder={placeholder}
      onChangeText={onChangeText}
      onBlur={onBlur}
    />
  </View>
  )
};

