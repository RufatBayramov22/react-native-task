import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    setError(null);
    try {
      const res = await axios.post("http://localhost:3000/register", {
        name,
        lastName,
        phoneNumber,
      });

      console.log("Response", res);
      if (res.status === 200) {
        Alert.alert("Registration Successful");
        navigation.navigate('SecureCode');
      } else {
        Alert.alert("Registration Failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.response?.data?.message || "An error occurred");
      Alert.alert("Error", error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome to App</Text>
        <Text style={styles.subtitle}>Please enter your details.</Text>
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your first name"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your last name"
          value={lastName}
          onChangeText={setLastName}
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          keyboardType="numeric"
          maxLength={10}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

        <TouchableOpacity style={styles.buttonContainer} onPress={handleRegister}>
          <Text style={styles.btn}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D0D5DD',
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
    color: "#667085",
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: "#30B0C7",
    paddingHorizontal: 10,
    paddingVertical: 18,
    borderRadius: 8,
  },
  btn: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: '600',
  },
});

export default RegisterScreen;
