import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

export default function LoginScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acesse</Text>
      <Text style={styles.subtitle}>Digite seu e-mail e senha para continuar</Text>

      <Text style={styles.Texto}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
      />

      <Text style={styles.Texto}>Senha</Text>
      <View style={styles.passwordInputContainer}>

        <TextInput
          style={styles.passwordInput}
          placeholder="Digite sua senha"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.passwordToggle}
        >
          <Text style={styles.passwordToggleText}></Text>
        </TouchableOpacity>
      </View>

      <View style={styles.optionsContainer}>
        <View style={styles.checkboxContainer}>
          <View style={styles.checkbox}></View>
          <Text style={styles.optionsText}>Lembrar senha</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Esqueci a senha</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.orText}>ou continue com</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialGoogle}>
          <Image
            source={require("../imagens/Google.png")}
            style={styles.socialIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialFacebook}>
          <Image
            source={require("../imagens/Facebook.png")}
            style={styles.socialIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f7',
    padding: 24,
    justifyContent: 'center',
  },
  Texto: {
    color: "#8e8e93",
    marginBottom: 8,

  },
  title: {
    fontSize: 50,
    fontWeight: '700',
    alignSelf: 'top',
    color: '#111',
  },
  subtitle: {
    fontSize: 16,
    color: '#8e8e93',
    alignSelf: 'top',
    marginBottom: 40,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
    fontSize: 16,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    marginBottom: 16,
    paddingRight: 10,
  },
  passwordInput: {
    flex: 1,
    padding: 14,
    fontSize: 16,
  },
  passwordToggle: {
    padding: 8,
  },
  passwordToggleText: {
    fontSize: 20,
    color: '#8e8e93',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 8,
  },
  optionsText: {
    color: '#111',
    fontSize: 14,
  },
  forgotPasswordText: {
    color: '#34c759',
    fontSize: 14,
    fontWeight: '600',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  loginButton: {
    backgroundColor: '#34c759',
    paddingVertical: 14,
    borderRadius: 12,
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
  },
  registerButton: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    borderRadius: 12,
    flex: 1,
    marginLeft: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  registerButtonText: {
    color: '#111',
    fontWeight: '600',
    fontSize: 16,
  },
  orText: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#8e8e93',
    fontSize: 14,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  socialFacebook: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 12,
    marginHorizontal: 12,
  },
   socialGoogle: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 12,
    marginHorizontal: 12,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
});

