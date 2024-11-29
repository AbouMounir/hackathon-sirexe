import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function TextPickerCard({textCard, textLabel, selectedData, onValueChange, karas ='', datas }) {
  return (
    <View style={{ marginVertical: 8, width:'100%' }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#8B4513' }}>{textCard}</Text>
        <View style={{ 
            height: 50,
            borderColor: '#FFA500',
            borderWidth: 2,
            borderRadius: 5,
            paddingLeft: 3,
            marginTop: 8 
        }} >
        <Picker 
        selectedValue={selectedData}
        onValueChange={onValueChange}
        
        >
        <Picker.Item style={{fontSize:12,textAlign:'left'}}  label={textLabel} value='' />
        {datas.map((data, index) => (
            <Picker.Item label={data +karas} value={data} key={index} />
        ))}
        </Picker>
        </View>
    </View>
  )
};
