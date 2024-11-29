import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Accueil';
import GoldDeclaration from './screens/GoldDeclaration';
import DeclarationsLists from './screens/ListsDeclarationsScreen';
import DeclarationDetailsScreen from './screens/DeclarationDetails';
import SalesLists from './screens/ListsSalesScreen';
import GoldSaleDetails from './screens/SaleDetails';
import TopBarScreen from './compoments/TopBarScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Operators from './screens/Operators';
import BuyersScreen from './screens/Buyers';
import { store } from './store/store';
import { Provider } from 'react-redux';
import QrCodeScreen from './screens/QrCodeScreen';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <stack.Navigator initialRouteName='Home'>
          <stack.Screen name='Home' component={Home} options={{ header: () => (<SafeAreaView><TopBarScreen></TopBarScreen></SafeAreaView>),}}/>
          <stack.Screen name="Fusion de l'or" component={QrCodeScreen} />
          <stack.Screen name="Déclaration de l'or" component={GoldDeclaration} />
          <stack.Screen name="QR code" component={QrCodeScreen} />
          <stack.Screen name='Déclarations' component={DeclarationsLists}/>
          <stack.Screen name='Détails de la déclaration' component={DeclarationDetailsScreen}/>
          <stack.Screen name='Ventes' component={SalesLists}/>
          <stack.Screen name='Détails de la vente' component={GoldSaleDetails}/>
          <stack.Screen name='Registre des exploitants' component={Operators}/>
          <stack.Screen name='Registre des acheteurs' component={BuyersScreen}/>
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}