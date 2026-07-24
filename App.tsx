/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './src/views/Home';
import { Profile } from './src/views/Profile';

function App() {

  return (
    <SafeAreaProvider>
      <StatusBar/>
      <AppContent />
    </SafeAreaProvider>
  );
}

type RootTabParamsList = {
  Home: undefined;
  Profile: undefined;
};

function AppContent() {
  const Tab = createBottomTabNavigator<RootTabParamsList>();

  return (
      <NavigationContainer >
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarInactiveTintColor: '#818181',
            tabBarActiveTintColor: '#119B4A',
            tabBarStyle: {  height: 60, },
          }}
        >
          <Tab.Screen
            options={{
              tabBarLabel: 'Accueil',
            }}
            name="Home"
            component={Home}
          />
          <Tab.Screen
            options={
              { tabBarLabel: 'Profil' }
            }
            name="Profile"
            component={Profile}
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
