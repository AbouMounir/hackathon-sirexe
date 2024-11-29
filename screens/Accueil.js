import React, {useState} from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import { ScrollView } from 'react-native-virtualized-view';
import CardInfoGold from "../compoments/CardInfoGold.js";
import CustomButton from "../compoments/CustomButton.js";
import ListsActivities from "../compoments/ListsActivities.js";

export default function Home({navigation}) {
  
  const [userType, setUserType] = useState('miner');

  const renderContent = () => {
    switch (userType) {
      case 'miner':
        return <CustomButton
        buttonText="Déclarer l'or"
        onPress={() => navigation.navigate("Déclaration de l'or", {id:2})}
        backgroundColorStyle="#000000"
        textColor="#FFFFFF"
        width="100%"
      ></CustomButton>;
      case 'saler':
        return <CustomButton
        buttonText="Déclarer un achat"
        onPress={() => navigation.navigate("Déclaration un achat")}
        backgroundColorStyle="#000000"
        textColor="#FFFFFF"
        width="100%"
      ></CustomButton>;
      default:
        return <></>;
    }
  };

  return (
    <View style={styles.safeContainer}>
      <ScrollView>
        <View style={styles.containerTop}>
          <CardInfoGold
            title="Coût de l'or"
            number="58,800"
            unit="$/kg"
            backgroundColorStyle={{ backgroundColor: "#c46308" }}
          ></CardInfoGold>
          <CardInfoGold
            title="Or déclaré"
            number="12,5"
            unit="kg"
            backgroundColorStyle={{ backgroundColor: "#e38508" }}
          ></CardInfoGold>
        </View>
        <View style={styles.buttonsContainer}>
          {renderContent()}
          <CustomButton
            buttonText="Déclarations"
            onPress={() => navigation.navigate("Déclarations")}
            backgroundColorStyle="#FFFFFF"
            textColor="#78350f"
            width="30%"
          ></CustomButton>
          <CustomButton
            buttonText="Ventes"
            onPress={() => navigation.navigate("Fusion de l'or")}
            backgroundColorStyle="#FFFFFF"
            textColor="#78350f"
            width="30%"
          ></CustomButton>
          <CustomButton
            buttonText="Blockchain"
            onPress={() => navigation.navigate("Déclaration de l'or")}
            backgroundColorStyle="#FFFFFF"
            textColor="#78350f"
            width="30%"
          ></CustomButton>
          <View style={{flexDirection:'row', justifyContent:'center', flexWrap:'wrap', columnGap:15, width:'100%'}}>
            {userType === 'admin' && <CustomButton
              buttonText="Acheteurs"
              onPress={async () => { 
    

                navigation.navigate("Registre des acheteurs")}}
              backgroundColorStyle="#FFFFFF"
              textColor="#78350f"
              width="30%"
            ></CustomButton>}
            {userType === 'admin' && <CustomButton
              buttonText="Coopératives"
              onPress={ () => navigation.navigate("Registre des exploitants")}
              backgroundColorStyle="#FFFFFF"
              textColor="#78350f"
              width="30%"
            ></CustomButton>}
            {/*{userType === 'admin' && <CustomButton
              buttonText="Environnementales"
              onPress={() => navigation.navigate("Registre des exploitants")}
              backgroundColorStyle="#FFFFFF"
              textColor="#78350f"
              width="30%"
            ></CustomButton>}*/}
          </View>
        </View>
        <View>
          <ListsActivities></ListsActivities>
        </View>
      </ScrollView>
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
    justifyContent: 'space-between',
    height: 100,
    width: '100%',
    marginTop: 15,
    padding: 15,
    borderRadius: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 15,
    marginTop: 15,
    padding: 15,
  },
});
