import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, extendTheme } from 'native-base';

// Redux 
import { Provider } from 'react-redux';
import store from './Redux/store';


// Themes
const newColorTheme = {
  brand: {
    900: '#5B8DF6',
    800: '#ffffff',
    700: '#cccccc',
  },
};

const theme = extendTheme({
colors: newColorTheme,
});

// Navigators
import Main from './Navigators/Main'

// Screens
import ProductContainer from './Screens/Products/ProductContainer';
import Header from './Shared/Header';

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
      <NavigationContainer>
      <Header />
      <Main />
      </NavigationContainer>
    </NativeBaseProvider>
    </Provider>
  );
}
