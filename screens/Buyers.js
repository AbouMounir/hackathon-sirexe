// App.js
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Platform,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { buyersData } from '../datas';
import BuyerCard from '../compoments/BuyerCard';

export default function BuyersScreen() {

  const [searchTerm, setSearchTerm] = useState('');
  const [buyers, setbuyers] = useState(buyersData);
  const [activeFilters, setActiveFilters] = useState({
    typeExploitation: '',
    status: '',
    localite: ''
  });

  const handleFilterChange = (filterType, value) => {
    const newFilters = {
      ...activeFilters,
      [filterType]: value
    };
    setActiveFilters(newFilters);
    applyFilters(searchTerm, newFilters);
  };

  const applyFilters = (term, filters) => {
    let filtered = buyersData.filter(buyer => {
      const matchesSearch = 
        buyer.entreprise.toLowerCase().includes(term.toLowerCase()) ||
        buyer.numeroAutorisation.toLowerCase().includes(term.toLowerCase()) ||
        buyer.localite.toLowerCase().includes(term.toLowerCase()) ||
        buyer.typeExploitation.toLowerCase().includes(term.toLowerCase());

      const matchesType = !filters.typeExploitation || buyer.typeExploitation === filters.typeExploitation;
      const matchesStatus = !filters.status || buyer.status === filters.status;
      const matchesLocalite = !filters.localite || buyer.localite === filters.localite;

      return matchesSearch && matchesType && matchesStatus && matchesLocalite;
    });
    
    setbuyers(filtered);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher par nom, numéro, localité..."
          value={searchTerm}
          onChangeText={(text) => {
            setSearchTerm(text);
            applyFilters(text, activeFilters);
          }}
        />
      </View>

      <ScrollView 
        style={styles.cardList}
        contentContainerStyle={styles.cardListContent}
      >
        {buyers.map((buyer) => (
          <BuyerCard key={buyer.id} buyer={buyer} />
        ))}
        
        {buyers.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>
              Aucun buyer ne correspond à votre recherche
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffbeb',
  },
  searchContainer: {
    marginTop:5,
    backgroundColor: '#fffbeb',
    marginHorizontal: 8,
  },
  searchInput: {
    height: 44,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 6,
    paddingHorizontal: 16,
    backgroundColor: '#f9fafb',
    marginBottom: 12,
  },
  cardList: {
    flex: 1,
  },
  cardListContent: {
    padding: 16,
    gap: 12,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  emptyState: {
    padding: 28,
    alignItems: 'center',
  },
  emptyStateText: {
    fontSize: 14,
    color: '#6b7280',
  },
});

{/*import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { buyersData } from '../datas';

const AcheteurCard = ({ acheteur }) => {
  const getTypeColor = (nature) => {
    switch (nature) {
      case 'Permanent':
        return { backgroundColor: '#dbeafe', color: '#1d4ed8' };
      case 'Temporaire':
        return { backgroundColor: '#fef3c7', color: '#b45309' };
      default:
        return { backgroundColor: '#dcfce7', color: '#15803d' };
    }
  };

  const typeStyle = getTypeColor(acheteur.natureAutorisation);

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View>
          <Text style={styles.acheteurName}>{acheteur.nom}</Text>
          <Text style={styles.autorisationNumber}>{acheteur.numeroAutorisation}</Text>
        </View>
        <View style={[styles.badge, { backgroundColor: typeStyle.backgroundColor }]}>
          <Text style={[styles.badgeText, { color: typeStyle.color }]}>
            {acheteur.natureAutorisation}
          </Text>
        </View>
      </View>

      <View style={styles.cardBody}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Localité:</Text>
          <Text style={styles.infoValue}>{acheteur.localite}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>N° Arrêté:</Text>
          <Text style={styles.infoValue}>{acheteur.numeroArrete}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Lieu Arrêté:</Text>
          <Text style={styles.infoValue}>{acheteur.lieuArrete}</Text>
        </View>
      </View>
    </View>
  );
};

const FilterPicker = ({ label, options, value, onChange }) => {
  return (
    <View style={styles.pickerContainer}>
      <TouchableOpacity
        style={styles.picker}
        onPress={() => {
          const nextIndex = options.indexOf(value) + 1;
          onChange(options[nextIndex % options.length] || '');
        }}
      >
        <Text style={styles.pickerText}>
          {value || label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default function BuyersScreen() {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [acheteurs, setAcheteurs] = useState(buyersData);
  const [activeFilters, setActiveFilters] = useState({
    natureAutorisation: '',
    localite: '',
    lieuArrete: ''
  });

  const uniqueNatures = [...new Set(buyersData.map(e => e.natureAutorisation))];
  const uniqueLocalites = [...new Set(buyersData.map(e => e.localite))];
  const uniqueLieux = [...new Set(buyersData.map(e => e.lieuArrete))];

  const handleFilterChange = (filterType, value) => {
    const newFilters = {
      ...activeFilters,
      [filterType]: value
    };
    setActiveFilters(newFilters);
    applyFilters(searchTerm, newFilters);
  };

  const applyFilters = (term, filters) => {
    let filtered = buyersData.filter(acheteur => {
      const matchesSearch = 
        acheteur.nom.toLowerCase().includes(term.toLowerCase()) ||
        acheteur.numeroAutorisation.toLowerCase().includes(term.toLowerCase()) ||
        acheteur.localite.toLowerCase().includes(term.toLowerCase()) ||
        acheteur.natureAutorisation.toLowerCase().includes(term.toLowerCase());

      const matchesNature = !filters.natureAutorisation || acheteur.natureAutorisation === filters.natureAutorisation;
      const matchesLocalite = !filters.localite || acheteur.localite === filters.localite;
      const matchesLieu = !filters.lieuArrete || acheteur.lieuArrete === filters.lieuArrete;

      return matchesSearch && matchesNature && matchesLocalite && matchesLieu;
    });
    
    setAcheteurs(filtered);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Registre des Acheteurs d'Or</Text>
        <Text style={styles.subtitle}>
          Système de traçabilité de l'or - Gestion des acheteurs
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher par nom, numéro, localité..."
          value={searchTerm}
          onChangeText={(text) => {
            setSearchTerm(text);
            applyFilters(text, activeFilters);
          }}
        />

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.filtersScroll}
          contentContainerStyle={styles.filtersContainer}
        >
          <FilterPicker
            label="Nature autorisation"
            options={uniqueNatures}
            value={activeFilters.natureAutorisation}
            onChange={(value) => handleFilterChange('natureAutorisation', value)}
          />
          <FilterPicker
            label="Localité"
            options={uniqueLocalites}
            value={activeFilters.localite}
            onChange={(value) => handleFilterChange('localite', value)}
          />
          <FilterPicker
            label="Lieu arrêté"
            options={uniqueLieux}
            value={activeFilters.lieuArrete}
            onChange={(value) => handleFilterChange('lieuArrete', value)}
          />
        </ScrollView>
      </View>

      <ScrollView 
        style={styles.cardList}
        contentContainerStyle={styles.cardListContent}
      >
        {acheteurs.map((acheteur) => (
          <AcheteurCard key={acheteur.id} acheteur={acheteur} />
        ))}
        
        {acheteurs.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>
              Aucun acheteur ne correspond à votre recherche
            </Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Affichage de {acheteurs.length} acheteur(s) sur {buyersData.length}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 4,
  },
  searchContainer: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  searchInput: {
    height: 44,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 6,
    paddingHorizontal: 16,
    backgroundColor: '#f9fafb',
    marginBottom: 12,
  },
  filtersScroll: {
    flexGrow: 0,
  },
  filtersContainer: {
    paddingVertical: 8,
    gap: 8,
    flexDirection: 'row',
  },
  pickerContainer: {
    marginRight: 8,
  },
  picker: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 6,
    backgroundColor: '#ffffff',
  },
  pickerText: {
    fontSize: 14,
    color: '#374151',
  },
  cardList: {
    flex: 1,
  },
  cardListContent: {
    padding: 16,
    gap: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  acheteurName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  autorisationNumber: {
    fontSize: 14,
    color: '#6b7280',
    fontFamily: Platform.select({
      ios: 'Courier',
      android: 'monospace',
    }),
  },
  cardBody: {
    gap: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginRight: 8,
    width: 100, // Largeur fixe pour aligner les valeurs
  },
  infoValue: {
    fontSize: 14,
    color: '#6b7280',
    flex: 1,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '500',
  },
  emptyState: {
    padding: 48,
    alignItems: 'center',
  },
  emptyStateText: {
    fontSize: 14,
    color: '#6b7280',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  footerText: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
});*/}

