import React, {useEffect, useState} from "react";
import {
  View,Text,StyleSheet,
  Image,
  FlatList
} from "react-native";
import {CloudUpload, Camera} from 'lucide-react-native';
import * as ImagePicker from 'expo-image-picker';
import TextInputCard from "../compoments/TextInputCard.js";
import TextPickerCard from "../compoments/TextPickerCard.js";
import CustomButton from "./../compoments/CustomButton.js";
import { useDispatch, useSelector } from "react-redux";
import { addDeclaration, fetchExploitant } from "../store/exploitantSlice.js";

const karats = [
  '18',
  '21',
  '22',
  '24'
];

export default function GoldDeclaration({navigation,route}) {

  const dispatch = useDispatch()
  const { id } = route.params;  

  const [formData, setFormData] = useState({
    goldWeight: '',
    karatValue: '',
    selectedSite: '',
    lotNumber: '',
    goldImages: '',
    estimatedValue: '',
    coordinates: { latitude: '', longitude: '' },
    additionalNotes: ''
  });
  const [data,setData] = useState('');

  const {exploitant,loading,error} = useSelector((state) => state.exploitants)

  useEffect(() => {
    if (!exploitant || exploitant.id !== id) {
      dispatch(fetchExploitant(id));
    }
  }, [dispatch, id]);

  const sites = [];
  if (exploitant && exploitant.length > 0 && exploitant[0].zoneExploitations) {
    exploitant[0].zoneExploitations.forEach((site) => sites.push(site.numeroAuthorisation));
  }
  
  const handleInputChange = (name, value) => {
    console.log(value);
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTakePhoto = async (name,value) => {
    // Demander les permissions pour la caméra
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access the camera is required!");
      return;
    }

    // Prendre une photo
    const result = await ImagePicker.launchCameraAsync({
      quality: 1,
    });

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (!result.canceled && result.assets.length > 0) {
      setFormData(prev => ({
        ...prev, 
        [name]: result.assets[0].uri  }));
    }
  };

  const submitDeclaration = () => {
    console.log('submitDeclaration');
    
    const formDatas = new FormData();

    // Ajouter l'image à FormData
    formDatas.append('photo', {
      uri: formData.goldImages,
      name: 'photo.jpg', // nom de l'image
      type: 'image/jpeg', // type MIME de l'image
    });

    formDatas.append('poids',formData.goldWeight)
    formDatas.append('carat',formData.karatValue)
    formDatas.append('exploitantId',2)

    console.log(formDatas);
    

    setData(dispatch(addDeclaration(formDatas)));
    
  }
  return (
    <View style={styles.safeContainer}>
        <View style={styles.containerTop}>
          <TextInputCard keyboardType="numeric" textCard='Poids(g)' placeholder='Poids' value={formData.goldWeight} onChangeText={(value) => handleInputChange('goldWeight', value)}></TextInputCard>
          <TextPickerCard keyboardType="numeric" textCard='Titre (Carats)' textLabel='Sélectionnez' karas=" carats" selectedData={formData.karatValue} onValueChange={(value) => handleInputChange('karatValue', value)} datas={karats}></TextPickerCard>
          <TextPickerCard textCard='Autorisation' textLabel='Sélectionnez une autorisation' selectedData={formData.selectedSite} onValueChange={(value) => handleInputChange('selectedSite', value)} datas={sites}></TextPickerCard>
        </View>
        <View style={{paddingHorizontal:15}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#8B4513'}}> Photos de l'or</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <CustomButton
              icon={<Camera size={20} color="white" />}
              buttonText="Prendre une photo"
              width='98%'
              fontSize={14}
              backgroundColorStyle="#f59e42"
              onPress={() => handleTakePhoto('goldImages',formData.goldImages)}
            >
            </CustomButton>
          </View>
        </View>
        <View style={{justifyContent:'center',borderRadius:8}}>
          {/* Affichage de l'image sélectionnée */}
          {formData.goldImages && <Image source={{ uri: formData.goldImages }} style={{width:150,height:150,borderRadius:8,alignSelf:'center'}} />}
        </View>
        <View style={{paddingHorizontal:10, position:'absolute',bottom:15, width:'100%'}}>
        <CustomButton onPress={() => {
          submitDeclaration()
          navigation.navigate('QR code', {visuelUri:data.visuelUri})
        }} 
          buttonText='Soumettre la déclaration' textColor="white" width='100%' borderRadius={8} backgroundColorStyle="#78350f">

        </CustomButton>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fffbeb",
  },
  containerTop: {
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal:15,
    marginTop: 15,
    columnGap: 15,
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 15,
    marginTop: 15,
    padding: 15,
  },
});
