import React from 'react';
import { Text, StyleSheet, FlatList,View } from 'react-native';

export default function DetailsCard({cardTitle, childrenKey,childrenValue, icon}) {
  
  return (
    <View style={styles.card}>
        <View style={styles.cardHeader}>
            {icon}
            <Text style={styles.cardHeaderText}>{cardTitle}</Text>
        </View>
        
        <View style={styles.cardContent}>
            <FlatList 
                data={childrenKey}
                renderItem={
                    ({item, index}) => (
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>{item}</Text>
                            <Text style={styles.infoValue}>{childrenValue[index]}</Text>
                        </View>
                    )
                }
            />
        </View>
    </View>
    
)};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0E68C',
  },
  cardHeaderText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#8B4513',
  },
  cardContent: {},
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  infoLabel: {
    color: '#A0522D',
    fontSize: 14,
  },
  infoValue: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
  },
});
