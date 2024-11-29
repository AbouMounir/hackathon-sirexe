import { React} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { ShoppingCart, MapPin, CreditCard, Tag } from 'lucide-react-native';
import {recentActivities} from '../datas';

export default function ListsActivities() {
    return ( 
    <View style={styles.recentActivityCard}>
        <View style={styles.recentActivityHeader}>
            <Text style={styles.title}>Activités Récentes</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Voir tout</Text>
            </TouchableOpacity>
        </View>
        
        <View 
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}
        >      
            <FlatList
                data={recentActivities}
                renderItem={({ item }) => {
                    return (
                <View key={item.id} style={styles.activityItem}>
                    <View style={styles.activityHeader}>
                        <Text style={styles.activityType}>{item.type}</Text>
                        <Text style={styles.activityAmount}>{item.amount}</Text>
                    </View>
                    {
                        item.type === 'Déclaration' ? (
                            <>
                                <View style={styles.row}>
                                    <MapPin color="#4B5563" size={16} style={styles.icon} />
                                    <Text style={[styles.detailText,styles.activityLocation]}>{item.location}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Tag color="#4B5563" size={16} style={styles.icon} />
                                    <Text style={[styles.detailText,styles.activityQuality]}>{item.quality}</Text>
                                </View>
                                <View style={styles.row}>
                                    <CreditCard color="#4B5563" size={16} style={styles.icon} />
                                    <Text style={[styles.detailText,styles.activityDeclarationId]}>{item.declarationId}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.label}> Valeur estimée : </Text>
                                    <Text>{item.estimatedValue}</Text>
                                </View>
                            </>
                        ) : (
                            <>
                                <View style={styles.row}>
                                    <ShoppingCart color="#4B5563" size={16} style={styles.icon} />
                                    <Text style={[styles.detailText,styles.activityLocation]}>{item.location}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Tag color="#4B5563" size={16} style={styles.icon} />
                                    <Text style={[styles.detailText,styles.activityQuality]}>{item.quality}</Text>
                                </View>
                                <View style={styles.row}>
                                    <CreditCard color="#4B5563" size={16} style={styles.icon} />
                                    <Text style={[styles.detailText,styles.activitySaleId]}>{item.declarationId}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.label}> Prix total : </Text>
                                    <Text>{item.totalPrice}</Text>
                                </View>
                            </>
                        )}
                    <View style={styles.footer}>
                        <Text style={[styles.activityStatus, getStatusStyle(item.status)]}>
                        {item.status}
                        </Text>
                        <Text style={styles.date}>{item.date}</Text>
                    </View>
                </View>
        );
    }}
/>

        </View>
    </View>
)}

const getStatusStyle = (status) => {
    switch (status) {
      case 'Validée':
        return styles.statusValid;
      case 'En cours':
        return styles.statusInProgress;
      default:
        return styles.statusError;
    }
  };

const styles = StyleSheet.create({
    recentActivityCard: {
        backgroundColor: 'white',
        marginBottom: 16,
    },
    recentActivityHeader: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#FFB74D',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#9E7A3D',
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: 'transparent',
    },
    buttonText: {
        fontSize: 14,
        color: '#FFB74D',
    },
    activityStatus:{
        padding:5,
        borderRadius:8,
    },
    activityItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#FFB74D',
    },
    activityHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
      },
    activityType: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1F2937',
      },
    activityAmount: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FF7A00',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    icon:{marginRight:8},
    detailText: {
        fontSize: 14,
        color: '#4B5563',
    },
    label: {
        fontSize: 14,
        color: '#6B7280',
      },
      estimatedValue: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1F2937',
      },
      totalPrice: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1F2937',
      },
      footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
      },
      status: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 16,
        fontSize: 12,
        fontWeight: '500',
      },
      statusValid: {
        backgroundColor: '#D1FAE5',
        color: '#10B981',
      },
      statusInProgress: {
        backgroundColor: '#FEF3C7',
        color: '#F59E0B',
      },
      statusError: {
        backgroundColor: '#FEE2E2',
        color: '#EF4444',
      },
      date: {
        fontSize: 12,
        color: '#6B7280',
      },
})