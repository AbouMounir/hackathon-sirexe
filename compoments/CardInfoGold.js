import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function CardInfoGold({title, number, unit, backgroundColorStyle}) {

  return (
      <View style={[styles.containerCardinfogold, backgroundColorStyle]}>
        <Text style={{fontSize: 15, color:'white'}}>
            {title}
        </Text>
        <Text style={{color:"white", fontWeight:"bold", fontSize:20}}>
            {number} {unit}
        </Text>
      </View>
  );
}

const styles = StyleSheet.create({
    containerCardinfogold: {
    width : '45%',
    height : 100,
    padding : 15,
    borderRadius : 10,
  },
});
