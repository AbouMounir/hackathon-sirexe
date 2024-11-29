import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import { ScrollView } from 'react-native-virtualized-view';
import CheckBoxCustom from "../compoments/Checkbox.js";
import { CalendarDays } from "lucide-react-native";
import ListsVentes from "../compoments/ListsSales.js";

export default function SalesLists({navigation}) {

  return (
    <View style={styles.safeContainer}>
      <ScrollView>
        <View style={styles.containerTop}>
          <CalendarDays size={32} color='#78350f'/>
          <CheckBoxCustom status='En attente'></CheckBoxCustom>
          <CheckBoxCustom status='En cours'></CheckBoxCustom>
          <CheckBoxCustom status='Validée'></CheckBoxCustom>
        </View>
        <View style={{padding:10}}>
          {/*<ListsDeclarations></ListsDeclarations>*/}
          <ListsVentes onPress={() => navigation.navigate("Détails de la vente")}></ListsVentes>
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
});
