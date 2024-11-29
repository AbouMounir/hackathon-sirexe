// App.js
import React, { useEffect, useState } from 'react';
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
  ActivityIndicator,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ExploitantCard from '../compoments/ExploitantCard';
import { exploitantsData } from '../datas';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExploitants } from '../store/exploitantSlice';



export default function Operators() {

  const dispatch = useDispatch()

  // Sélectionner l'état des exploitants à partir du Redux Store
  const { exploitants, loading, error } = useSelector((state) => state.exploitants);
  
  useEffect(() => {
    dispatch(fetchExploitants()); // Appeler l'API pour récupérer les exploitants
  }, [dispatch]);
  
  
  const [searchTerm, setSearchTerm] = useState('');
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
    let filtered = exploitantsData.filter(exploitant => {
      const matchesSearch = 
        exploitant.entreprise.toLowerCase().includes(term.toLowerCase()) ||
        exploitant.numeroAutorisation.toLowerCase().includes(term.toLowerCase()) ||
        exploitant.localite.toLowerCase().includes(term.toLowerCase()) ||
        exploitant.typeExploitation.toLowerCase().includes(term.toLowerCase());

      const matchesType = !filters.typeExploitation || exploitant.typeExploitation === filters.typeExploitation;
      const matchesStatus = !filters.status || exploitant.status === filters.status;
      const matchesLocalite = !filters.localite || exploitant.localite === filters.localite;

      return matchesSearch && matchesType && matchesStatus && matchesLocalite;
    });
    
    setExploitants(filtered);
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
        {exploitants.map((exploitant) => (
          <ExploitantCard key={exploitant.id} exploitant={exploitant} />
        ))}
        
        {exploitants.length === 0 && (
          <View style={styles.emptyState}>
            {loading && <ActivityIndicator size="large" />}
            {error && <Text>Error: {error}</Text>}
            <Text style={styles.emptyStateText}>
              Aucun exploitant ne correspond à votre recherche
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
