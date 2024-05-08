import React, { useState, useEffect } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Animated,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Keyboard,
  Button, 
  Platform,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaRegistro from './src/pages/TelaRegistro';
import Principal from './src/pages/Principal';


const Stack = createStackNavigator();


const HomeScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={styles.background}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.containerLogo}>
        <Animated.Image
          style={{
            width: 300,
            height: 200,
          }}
          source={require('./src/components/img/logo.png')}
        />
      </View>

      <Animated.View
        style={[
          styles.container,
          {
            opacity: 1,
            transform: [{ translateY: 95 }],
          },
        ]}
      >
        <Text style={styles.nomeLogin}>LOGIN</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          secureTextEntry={false}
        />

        <TextInput
          style={[styles.input, { marginTop: 20 }]}
          placeholder="Senha"
          autoCorrect={false}
          secureTextEntry
        />

        <TouchableOpacity 
        style={styles.btnSubmit}
        onPress={()=> navigation.navigate('Principal')}
        >
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnRegister}
          onPress={() => navigation.navigate('TelaRegistro')}
        >
          <Text style={styles.registerText}>Criar conta gratuita</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
};

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
        <Stack.Screen name="TelaRegistro" options={{headerShown:false}} component={TelaRegistro} />
        <Stack.Screen name="Principal" options={{headerShown:false}} component={Principal}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  containerLogo: {
    flex: 1,
    marginTop:80,
    justifyContent: 'center',
  },
  nomeLogin: {
    marginRight: 221,
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 160,
  },
  input: {
    backgroundColor: '#d3d3d3',
    width: 300,
    height: 50,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.75,
    shadowRadius: 3,
    elevation: 4,
  },
  btnSubmit: {
    backgroundColor: '#fafad2',
    width: '81%',
    height: 33,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#6b8e23',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.45,
    shadowRadius: 3,
    elevation: 4,
  },
  submitText: {
    color: '#6b8e23',
    fontSize: 18,
  },
  btnRegister: {
    marginTop: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerText: {
    color: '#000',
    textDecorationLine: 'underline',
  },
});
