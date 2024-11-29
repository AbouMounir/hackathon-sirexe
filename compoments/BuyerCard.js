import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,Platform,
} from 'react-native';

export default function BuyerCard({ buyer }) {
    const getTypeColor = (status) => {
      return status === 'Bureau' 
        ? { backgroundColor: '#dcfce7', color: '#047857' }
        : { backgroundColor: '#fef3c7', color: '#374151' };
    };
  
    
  
    const typeStyle = getTypeColor(buyer.natureAutorisation);
  
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View>
            <Text style={styles.entrepriseName}>{buyer.nom}</Text>
            <Text style={styles.autorisationNumber}>{buyer.numeroAutorisation}</Text>
          </View>
          <View style={[styles.badge, { backgroundColor: typeStyle.backgroundColor }]}>
            <Text style={[styles.badgeText, { color: typeStyle.color }]}>
              {buyer.natureAutorisation}
            </Text>
          </View>
        </View>
  
        <View style={styles.cardBody}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Localité:</Text>
            <Text style={styles.infoValue}>{buyer.localite}</Text>
          </View>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>N° de l'arrêté:</Text>
            <Text style={styles.infoValue}>{buyer.numeroArrete}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Lieu de l'arrêt:</Text>
            <Text style={styles.infoValue}>{buyer.lieuArrete}</Text>
          </View>
        </View>
    );
  };

  const styles = StyleSheet.create({
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
    entrepriseName: {
      fontSize: 18,
      fontWeight: '600',
      color: '#8B4513',
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
        flexDirection:'row',
        flexWrap:'wrap',
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
    },
    infoValue: {
      fontSize: 14,
      color: '#6b7280',
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
  });