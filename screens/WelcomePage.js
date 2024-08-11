import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";

const WelcomePage = ({navigation}) => {
  return (
    <View style={styles.contanier}>
      <View>
        <Image source={require("../assets/welcome.png")} />
      </View>
      <View style={{ marginTop: 40 ,}}>
        <Text
          style={{
            color: "#14171D",
            fontWeight: 600,
            fontSize: 32,
            marginBottom: 10,
          }}
        >
          Welcome To Page
        </Text>
        <Text style={{ color: "#14171D", fontWeight: 400, fontSize: 16  }}>
          Lorem ipsum dolor sit amet consectetur. A ut pellentesque amet
          phasellus augue. Neque at felis pulvinar malesuada varius egestas dis
          cras.
        </Text>
      </View>
      <View style={{flex:1, gap:10,}}>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Login')
        
        }>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerBtn} onPress={()=> navigation.navigate("Register")}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop:130,
  },
  loginBtn: {
    backgroundColor: "#30B0C7",
    width: 370,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight: 18,
    borderRadius:8,
    marginTop:20,
  },
  loginText:{
    fontSize:16,
    color:"#fff",
    textAlign:"center"
  },
  registerBtn:{
    width:370,
    borderWidth:1,
    borderColor:"#C4C5C6",
    paddingTop:10,
    paddingBottom:10,
    paddingRight:18,
    paddingLeft:18,
    borderRadius:8,
  },
  registerText:{
    color:"#14171D",
    textAlign:"center",
    fontSize:16,
  }
});

export default WelcomePage;
