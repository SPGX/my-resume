import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ Navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text >Home Screen</Text>
      <Button title="Go to Detail Screen" onPress={() => Navigation.navigate('Detail')} />
    </View>
  );
}

function DetailScreen({ Navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text >Detail Screen</Text>
      <Button title="Go to Home Screen" onPress={() => Navigation.navigate('Home')} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: 'Home' }} component={HomeScreen} />
        <Stack.Screen name="Detail" options={{ title: 'Detail' }} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;