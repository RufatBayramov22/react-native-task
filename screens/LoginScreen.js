import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (text) => {
    if (/^\d*$/.test(text)) {
      setPhoneNumber(text);
    }
  };

  const onSubmit = async () => {
    setError(null);
    try {
      const res = await axios.post("http://localhost:3000/login", { phoneNumber });
      console.log("Response", res);
      if (res.status === 200) {
        Alert.alert("Welcome Back");
        
        navigation.navigate('WelcomePage');
      } else {
        Alert.alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Error:", error);
      
      setError(error.response?.data?.message || "An error occurred");
      Alert.alert("Error", error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.loginText}>Welcome to App</Text>
        <Text style={styles.loginInfo}>Please enter your details.</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="+33 222 111 2222"
          keyboardType="numeric"
          maxLength={15}
          value={phoneNumber}
          onChangeText={handleChange}
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={onSubmit}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 50,
  },
  loginText: {
    color: "#344054",
    fontWeight: "600",
    fontSize: 24,
  },
  loginInfo: {
    color: "#667085",
    fontSize: 16,
    fontWeight: "400",
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 5,
    color: "#344054",
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  loginButton: {
    backgroundColor: "#30B0C7",
    width: '100%',
    paddingVertical: 18,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  footerText: {
    fontSize: 14,
    color: "#727477",
    fontWeight: "400",
  },
  registerLink: {
    fontSize: 14,
    color: "#00D1AC",
    textDecorationLine: "underline",
    fontWeight: '600',
  },
});

export default LoginScreen;
