import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import axios from 'axios';

export default function QRScannerScreen() {
  const [qrCodes, setQrCodes] = useState([]); // Liste des QR codes scannés
  const [isScanning, setIsScanning] = useState(true); // Si le scanner est actif ou non
  const [verifiedQrCodes, setVerifiedQrCodes] = useState([]); // QR codes validés

  // Fonction pour traiter un QR code scanné
  const handleQRCodeScanned = async (e) => {
    const scannedData = e.data;
    
    // Vérification du QR code
    const isValid = await verifyQRCode(scannedData);

    if (isValid) {
      // Ajout du QR code validé à la liste des QR codes vérifiés
      setVerifiedQrCodes((prevCodes) => [...prevCodes, scannedData]);
      Alert.alert('QR Code validé', `QR Code: ${scannedData} est valide`);
    } else {
      Alert.alert('QR Code invalide', `QR Code: ${scannedData} n'est pas valide`);
    }

    // Arrêter le scan après chaque QR code vérifié
    setIsScanning(false);
  };

  // Fonction pour vérifier si un QR code est valide (ex: appel API)
  const verifyQRCode = async (qrCode) => {
    try {
      // Exemple d'appel au backend pour vérifier le QR code
      const response = await axios.post('https://your-backend-url.com/verify', {
        qrCode
      });
      return response.data.isValid; // Suppose que le backend renvoie un champ 'isValid'
    } catch (error) {
      console.error('Erreur lors de la vérification du QR code', error);
      return false; // Si erreur, considérer comme invalide
    }
  };

  // Fonction pour envoyer les QR codes vérifiés au backend
  const sendVerifiedQrCodes = async () => {
    try {
      const response = await axios.post('https://your-backend-url.com/send-qr-codes', {
        qrCodes: verifiedQrCodes
      });
      if (response.data.success) {
        Alert.alert('Succès', 'QR codes vérifiés envoyés au backend');
      } else {
        Alert.alert('Erreur', 'Erreur lors de l\'envoi des QR codes');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi des QR codes', error);
      Alert.alert('Erreur', 'Erreur lors de l\'envoi des QR codes');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scanner des QR Codes</Text>

      {/* Affichage de la caméra pour scanner le QR code */}
      {isScanning && (
        <RNCamera
          style={styles.camera}
          type={RNCamera.Constants.Type.back}
          onBarCodeRead={handleQRCodeScanned}
        />
      )}

      {/* Liste des QR codes vérifiés */}
      <View style={styles.verifiedQrCodesContainer}>
        <Text style={styles.subtitle}>QR Codes Vérifiés :</Text>
        {verifiedQrCodes.length === 0 ? (
          <Text>Aucun QR code validé encore.</Text>
        ) : (
          verifiedQrCodes.map((code, index) => (
            <Text key={index}>{code}</Text>
          ))
        )}
      </View>

      {/* Bouton pour envoyer les QR codes validés */}
      {verifiedQrCodes.length > 0 && (
        <Button
          title="Envoyer les QR Codes Vérifiés"
          onPress={sendVerifiedQrCodes}
        />
      )}

      {/* Bouton pour redémarrer le scan */}
      {!isScanning && (
        <Button title="Scanner un autre QR Code" onPress={() => setIsScanning(true)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  camera: {
    width: '100%',
    height: 400,
    marginBottom: 20,
    borderRadius: 10,
  },
  verifiedQrCodesContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
