import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Camera, CloudUpload } from 'lucide-react-native';

export default function ImagePickerCard(images, onPressUpload, onPressCamera) {

  return (
    <View style={{padding: 5, width:'100%' }}>
      <Text style={{fontSize: 16, fontWeight: 'bold', color: '#8B4513'}}> Photos de l'or</Text>
      <View style={{ flexDirection: 'row',justifyContent:'center',marginTop: 8, marginBottom: 20 }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 8,
            paddingVertical: 8,
            backgroundColor: '#f59e42',
            borderRadius: 8,
            marginRight: 10,
          }}
          onPress={onPressUpload}
        >
          <CloudUpload size={20} color="white" />
          <Text style={{ color: 'white', marginLeft: 8 }}>Charger des images</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 8,
            paddingVertical: 8,
            backgroundColor: '#f59e42',
            borderRadius: 8,
          }}
          onPress={onPressCamera}
        >
          <Camera size={20} color="white" />
          <Text style={{ color: 'white', marginLeft: 8 }}>Prendre une photo</Text>
        </TouchableOpacity>
      </View>

      {/* Affichage des images sélectionnées */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {images.length > 0 && images.map((imageUri, index) => (
          <Image
            key={index}
            source={{ uri: imageUri }}
            style={{ width: 80, height: 80, borderRadius: 8, marginRight: 10 }}
          />
        ))}
      </ScrollView>
    </View>
  );
}
