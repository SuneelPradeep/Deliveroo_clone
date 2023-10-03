
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import { NativeWindStyleSheet } from "nativewind";
import 'react-native-url-polyfill/auto';
import Restaurant from './Screens/Restaurant';
import { Provider } from 'react-redux';
import { store } from './store';
import Basket from './Screens/Basket';
import PreparingOrderScreen from './Screens/PreparingOrderScreen';
import Delivery from './Screens/Delivery';


const Stack = createNativeStackNavigator()
NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {


  return (
    <NavigationContainer>
      <Provider store={store}>
       <Stack.Navigator>
    <Stack.Screen name='Home' component={Home} />
    <Stack.Screen name='Restaurant' component={Restaurant}  />
    <Stack.Screen name='Basket' component={Basket} options={{presentation:'modal',headerShown:false}} />
    <Stack.Screen name='PreparingOrderScreen' component={PreparingOrderScreen} options={{presentation: "fullScreenModal", headerShown:false}} />
     <Stack.Screen name='Delivery' component={Delivery} options={{presentation:'fullScreenModal',headerShown: false}} />
     </Stack.Navigator>
     </Provider>
     </NavigationContainer>
    
  )
}

