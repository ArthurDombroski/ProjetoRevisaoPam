import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require("../imagens/casual_dog.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Ótimo dia!</Text>
      <Text style={styles.subtitle}>Como deseja acessar?</Text>

      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={require("../imagens/Google.png")}
          style={styles.googleIcon}
        />
        <Text style={styles.googleText}>Entrar com Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.otherButton} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.otherText}>Outras opções</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1C1C1C",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 30,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#34A853",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: "100%",
    justifyContent: "center",
    marginBottom: 15,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    backgroundColor: "#f9f9f9",
  },
  googleText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  otherButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  otherText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "600",
  },
});