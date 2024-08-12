import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const SecureCode = ({navigation}) => {
  const [code, setCode] = useState(new Array(6).fill(''));
  const [focusedInput, setFocusedInput] = useState(null);

  const handleChange = (text, index) => {
    if (/^\d$/.test(text) || text === '') {
      const newCode = [...code];
      newCode[index] = text;
      setCode(newCode);

    
      if (text !== '' && index < 5) {
        inputs[index + 1].focus();
      }
    }
  };

  const inputs = [];

  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.title}>Welcome to App</Text>
        <Text style={styles.info}>Enter the confirmation code that will be sent to you by SMS</Text>
      </View>

      <View style={styles.secureCodeContainer}>
        <Text style={styles.secureCodeText}>Secure Code</Text>
      </View>

      <View style={styles.inputRow}>
        {code.slice(0, 3).map((num, index) => (
          <TextInput
            key={index}
            style={[
              styles.input,
              focusedInput === index && styles.inputFocused,
            ]}
            maxLength={1}
            keyboardType="numeric"
            value={num}
            placeholder='0'
            onChangeText={(text) => handleChange(text, index)}
            ref={(input) => { inputs[index] = input; }}
            onFocus={() => setFocusedInput(index)}
            onBlur={() => setFocusedInput(null)}
            selectionColor={num ? '#A180DC' : 'transparent'} // Daxil edilən rəqəmin rəngi
          />
        ))}

        <Text style={styles.separator}>-</Text>

        {code.slice(3).map((num, index) => (
          <TextInput
            key={index + 3}
            style={[
              styles.input,
              focusedInput === index + 3 && styles.inputFocused,
            ]}
            maxLength={1}
            keyboardType="numeric"
            value={num}
            placeholder='0'
            onChangeText={(text) => handleChange(text, index + 3)}
            ref={(input) => { inputs[index + 3] = input; }}
            onFocus={() => setFocusedInput(index + 3)}
            onBlur={() => setFocusedInput(null)}
            selectionColor={num ? '#30B0C7' : 'transparent'} // Daxil edilən rəqəmin rəngi
          />
        ))}
      </View>

      <TouchableOpacity style={styles.resendCode}>
        <Text style={styles.resendText}>Resend the Code</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signBtn} onPress={()=>navigation.navigate("Login")}>
        <Text style={{ textAlign: "center", color: "#fff", fontSize: 16, fontWeight: "600" }}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop:200,
    paddingHorizontal: 20,
  },
  info: {
    width: 330,
    fontSize: 16,
    textAlign: "center",
    color: "#667085",
  },
  textBox: {
    marginBottom: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: "#14171D",
  },
  secureCodeContainer: {
    alignSelf: 'flex-start',
    marginLeft: 5,
  },
  secureCodeText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#344054',
    marginBottom: 10,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
  },
  separator: {
    fontSize: 40,
    fontWeight: '600',
    color: '#D0D5DD',
    marginHorizontal: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    width: 52,
    height: 64,
    color: "#C4C5C6",
    fontSize: 40,
    fontWeight: '600',
    lineHeight: 48,
  },
  inputFocused: {
    borderColor: '#A180DC',
  },
  resendCode: {
    marginTop: 30,
  },
  resendText: {
    color: "#00D1AC",
    fontSize: 14,
    fontWeight: "600",
    textDecorationLine: "underline"
  },
  signBtn: {
    width: 358,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 18,
    marginTop: 40,
    backgroundColor: "#30B0C7",
    borderColor: "transparent",
    borderRadius: 8,
  }
})

export default SecureCode
