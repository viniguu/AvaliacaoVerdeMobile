import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, StyleSheet, TextInput, Animated, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator

export default function TelaRegistro({navigation}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  function handleSignIn() {
    if (username === '' || email === '' || password === '') {
      Alert.alert("PREENCHA OS CAMPOS!");
      return;
    }
    
    const data = {
      username,
      email,
      password,
    };
    console.log("Usuário Registrado:", data); 
  }

  return (
    
    
    <View style={styles.container}>
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
          source={require('../components/img/imgg/logo.png')}
        />
      </View>
      <Animated.View
        style={[
          styles.container,
          {
            opacity: 1,
            transform: [{ translateY: 50 }],
          },
        ]}
      >
      <Text style={styles.title}>Registrar-se</Text>
      <KeyboardAvoidingView
      style={styles.background}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    />
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Seu nome de usuário"
      />
      
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Digite seu Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Sua senha"
        secureTextEntry={false}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSignIn}>
        <Text style={styles.submitText}>Acessar</Text>
      </TouchableOpacity>
      </Animated.View>
      </KeyboardAvoidingView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom:169,
    backgroundColor: '#FFF',
  },
  containerLogo: {
    flex: 3,
    justifyContent: 'center',
    alignItems:'center'
  },
  title: {
    marginRight: 130,
    marginBottom: 20,
    fontSize: 29,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#d3d3d3',
    width: 300,
    height: 50,
    color: '#222',
    fontSize: 18,
    borderRadius: 7,
    padding: 17,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.75,
    shadowRadius: 3,
    elevation: 4,
  },
  submitButton: {
    backgroundColor: '#fafad2',
    width: '100%',
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
});
