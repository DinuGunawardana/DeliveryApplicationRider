import '@azure/core-asynciterator-polyfill'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import awsconfig from './src/aws-exports';
import AuthContextProvider from "./src/contexts/AuthContext";
import OrderContextProvider from "./src/contexts/OrderContext";

import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();//Hide all warning notifications on front-end

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});

function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AuthContextProvider>
          <OrderContextProvider>
            <Navigation />
          </OrderContextProvider>
        </AuthContextProvider>     
      </GestureHandlerRootView>
        <StatusBar style="auto" />
    </NavigationContainer>

  );
}

export default withAuthenticator(App);