import React from 'react';
import { Text, StyleSheet,View,TouchableOpacity,Image } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import {User,Gem,ChevronLeft,MapPin, Check} from 'lucide-react-native';
import DetailsCard from '../compoments/DetailsCard';

export default function DeclarationDetailsScreen() {
  
  return (
    <View style={styles.safeContainer}>
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Image de l'or */}
        <View style={styles.imageContainer}>
          <Image 
            source={require('../assets/icon.png')} // Remplacer par votre image
            style={styles.goldImage}
            resizeMode="cover"
          />
        </View>

        {/* Carte des Informations du Déclarant */}
        <DetailsCard
            cardTitle='Informations du Déclarant'
            icon={<User color="#8B4513" size={20} />}
            childrenKey={['Nom','Fonction','Site Minier']}
            childrenValue={['Issa Bah','Mineur Principal','Mine de tongon']}
        >

        </DetailsCard>

        {/* Carte des Détails de l'Or */}
        <DetailsCard
            cardTitle="Détails de l'Or"
            icon={<Gem color="#8B4513" size={20} />}
            childrenKey={['Poids','Titre','status']}
            childrenValue={['2,5 kg','24 Carats','En cours']}
        >

        </DetailsCard>

        {/* Carte de Localisation */}
        <DetailsCard
            cardTitle="Localisation"
            icon={<MapPin color="#8B4513" size={20} />}
            childrenKey={['Région','Date','Coordonnées GPS']}
            childrenValue={['Sud-Ouest','26 Novembre 2024','12.3456° N, 5.6789° O']}
        >

        </DetailsCard>

        {/* Bouton de Validation */}
        <TouchableOpacity style={styles.validateButton}>
          <Check color="white" size={20} />
          <Text style={styles.validateButtonText}>Valider la Déclaration</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
)};

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: "#fffbeb",
      },
      containerTop: {
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems:'center',
        width: '100%',
        padding:10,
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
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#FFF3D6',
        borderBottomWidth: 1,
        borderBottomColor: '#E6D2B5'
      },
      backButton: {
        marginRight: 15,
      },
      headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#8B4513', // Marron doré
      },
      scrollView: {
        flex: 1,
      },
      imageContainer: {
        height: 250,
        backgroundColor: '#F0E68C',
        marginBottom: 15,
      },
      goldImage: {
        width: '100%',
        height: '100%',
      },
      validateButton: {
        flexDirection: 'row',
        backgroundColor: '#DAA520', // Gold
        padding: 15,
        margin: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      validateButtonText: {
        color: 'white',
        marginLeft: 10,
        fontWeight: '600',
      },
});
