import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  StyleSheet 
} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import { SafeAreaView } from 'react-native-safe-area-context'
import { 
  MapPin, 
  User, 
  Weight, 
  Gem, 
  Check, 
  ChevronLeft,
  DollarSign,
  Calendar 
} from 'lucide-react-native';
import DetailsCard from './../compoments/DetailsCard';

export default function GoldSaleDetails(){
  return (
    <View style={styles.safeContainer}>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Image de l'or vendu */}
        <View style={styles.imageContainer}>
          <Image 
            source={require('../assets/icon.png')}
            style={styles.goldImage}
            resizeMode="cover"
          />
        </View>

        {/* Carte des Informations du Vendeur */}
        <DetailsCard
          cardTitle="Informations du Vendeur"
          icon={<User color="#8B4513" size={20} />}
          childrenKey={['Nom','Fonction','Coopérative']}
          childrenValue={['Moussa Yeo','Responsable Ventes','Or du Nord']}
        >

        </DetailsCard>

        {/* Carte des Détails de l'Or */}
        <DetailsCard
          cardTitle="Caractéristiques de l'Or"
          icon={<Gem color="#8B4513" size={20} />}
          childrenKey={['Poids','Titre','status']}
          childrenValue={['2,5 kg','24 Carats','En cours']}
        >

        </DetailsCard>

        {/* Carte des Informations Financières */}
        <DetailsCard
          cardTitle="Détails Financiers"
          icon={<DollarSign color="#8B4513" size={20} />}
          childrenKey={['Montant Total','Taxe (5%)','Montant Net','Mode de Paiement','Numéro Transaction']}
          childrenValue={['1 250 000 FCFA','62 500 FCFA','1 187 500 FCFA','Virement Bancaire','VTE-2024-0157']}
        >

        </DetailsCard>

        {/* Carte de Localisation et Temporelle */}
        <DetailsCard
          cardTitle="Localisation et Date"
          icon={<MapPin color="#8B4513" size={20} />}
          childrenKey={['Lieu de Vente','Date de Vente','Heure','Mode de Paiement']}
          childrenValue={['Siège Coopérative','26 Novembre 2024','14:35','Virement Bancaire']}
        >

        </DetailsCard>

        {/* Bouton de Validation de la Vente */}
        <TouchableOpacity style={styles.validateButton}>
          <Check color="white" size={20} />
          <Text style={styles.validateButtonText}>Valider la Vente</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

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

