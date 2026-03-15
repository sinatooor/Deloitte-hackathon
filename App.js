import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import SeasonalFoodScreen from './screens/SeasonalFoodScreen';
import ItemScannerScreen from './screens/ItemScannerScreen';
import ReceiptScannerScreen from './screens/ReceiptScannerScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#2e7d32',
          tabBarInactiveTintColor: '#999',
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 0,
            elevation: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            height: 85,
            paddingBottom: 20,
            paddingTop: 8,
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
          },
        }}
      >
        <Tab.Screen
          name="Seasonal"
          component={SeasonalFoodScreen}
          options={{
            tabBarLabel: 'Seasonal',
            tabBarIcon: ({ focused }) => (
              <Text style={{ fontSize: 24 }}>{focused ? '🌿' : '🌱'}</Text>
            ),
          }}
        />
        <Tab.Screen
          name="ItemScanner"
          component={ItemScannerScreen}
          options={{
            tabBarLabel: 'Scanner',
            tabBarIcon: ({ focused }) => (
              <Text style={{ fontSize: 24 }}>{focused ? '📦' : '📦'}</Text>
            ),
          }}
        />
        <Tab.Screen
          name="ReceiptScanner"
          component={ReceiptScannerScreen}
          options={{
            tabBarLabel: 'Receipts',
            tabBarIcon: ({ focused }) => (
              <Text style={{ fontSize: 24 }}>{focused ? '🧾' : '🧾'}</Text>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ focused }) => (
              <Text style={{ fontSize: 24 }}>{focused ? '👤' : '👤'}</Text>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
