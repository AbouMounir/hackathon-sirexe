import React, {useEffect, useState} from "react";
import {
  View,Text,StyleSheet,
  Image,
  FlatList,
  Pressable
} from "react-native";


export default function QrCodeScreen({route}) {

  const { visuelUri } = route.params;  

  return (
    <View style={styles.safeContainer}>
        <View>
            <Image source={require('../assets/qrcode.png')} style={{height:250,width:250,marginBottom:36}}
            />
            <Pressable
              style={{
                width:150,
                backgroundColor: 'green',
                borderRadius:8,
                borderWidth:1,
                paddingVertical:10,
                alignSelf:'center'
              }}
              onPress={{}}
            >
                <Text> Imprimer le QR code </Text>
            </Pressable>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    padding:50,
    backgroundColor: "#fffbeb",
    alignContent:'center',
    justifyContent:'center'
  },
});
