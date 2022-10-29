import {
  faUser,
  faLock,
  faFingerprint,
  faMailBulk,
  faUnlock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Register = ({ navigation }) => {
  const [id, setId] = useState("ID No or Employee No");
  const [email, setEmail] = useState("Email");
  const [pass, setPass] = useState("Password");
  const [cPass, setCpass] = useState("Confirm Password");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.circle1}></View>
      <View style={styles.circle2}></View>
      <View style={styles.circle3}>
        <Text
          style={{color: "white", fontSize: 24, fontWeight: "bold",marginTop:300}}
        >
          Create Account
        </Text>
      </View>

      <View style={styles.circle4}></View>
      <View style={styles.circle5}></View>
      <View style={styles.circle6}></View>
      
      <View style={styles.empNo}>
        <FontAwesomeIcon icon={faUser} size={25} style={{ color: "#ECECEC" }} />
        <TextInput
          onChangeText={setId}
          style={{
            color: "#ECECEC",
            width: "90%",
            paddingLeft: 70,
            height: 40,
          }}
          placeholder={id}
          placeholderTextColor="#ECECEC"
        />
      </View>
      <View style={styles.email}>
        <FontAwesomeIcon
          icon={faMailBulk}
          size={25}
          style={{ color: "#ECECEC" }}
        />
        <TextInput
          onChangeText={setEmail}
          style={{
            color: "#ECECEC",
            width: "90%",
            paddingLeft: 120,
            height: 40,
          }}
          placeholder={email}
          placeholderTextColor="#ECECEC"
        />
      </View>
      <View style={styles.password}>
        <FontAwesomeIcon icon={faLock} size={25} style={{ color: "#ECECEC" }} />
        <TextInput
          onChangeText={setPass}
          style={{
            color: "#ECECEC",
            width: "90%",
            paddingLeft: 110,
            height: 40,
          }}
          placeholder={pass}
          placeholderTextColor="#ECECEC"
        />
      </View>
      <View style={styles.cPassword}>
        <FontAwesomeIcon
          icon={faUnlock}
          size={25}
          style={{ color: "#ECECEC" }}
        />
        <TextInput
          onChangeText={setCpass}
          style={{
            color: "#ECECEC",
            width: "90%",
            paddingLeft: 80,
            height: 40,
          }}
          placeholder={cPass}
          placeholderTextColor="#ECECEC"
        />
      </View>
      <View>
      <Text
        style={{ color: "#ECECEC", marginTop: 20 }}
        onPress={() => {navigation.navigate("rcLogin");}}> Already have an account?</Text>

      </View>
      
      <TouchableOpacity
        style={styles.finger}
        onPress={() => {
          navigation.navigate("rclogin");
        }}
      >
        <FontAwesomeIcon
          icon={faFingerprint}
          size={55}
          style={{ color: "#ECECEC" }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#2827D3",
    overflowX: "hidden",
  },
  circle1: {
    position: "absolute",
    width: 508,
    height: 508,
    left: -50,
    top: -290,
    opacity: 0.25,
    backgroundColor: "#5060F0",
    borderRadius: 254,
  },
  circle2: {
    position: "absolute",
    width: 410,
    height: 410,
    left: 0,
    top: -250,
    opacity: 0.35,
    backgroundColor: "#5060F0",
    borderRadius: 205,
  },
  circle3: {
    position: "absolute",
    width: 300,
    height: 300,
    left: 55,
    top: -200,
    backgroundColor: "#5060F0",
    borderRadius: 150,
    alignItems: "center",
  },
  circle4: {
    position: "absolute",
    width: 508,
    height: 508,
    left: -50,
    top: 290,
    opacity: 0.25,
    backgroundColor: "#5060F0",
    borderRadius: 254,
  },
  circle5: {
    position: "absolute",
    width: 410,
    height: 410,
    left: 0,
    top: 340,
    opacity: 0.35,
    backgroundColor: "#5060F0",
    borderRadius: 205,
  },
  circle6: {
    position: "absolute",
    width: 300,
    height: 300,
    left: 55,
    top: 396,
    opacity: 0.55,
    backgroundColor: "#5060F0",
    borderRadius: 150,
    alignItems: "center",
  },

  empNo: {
    marginTop: 350,
    borderBottomWidth: 2,
    borderBottomColor: "#ECECEC",
    width: "85%",
    paddingLeft: 8,
    color: "#ECECEC",
    height: 40,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    backgroundColor: "#3939d7",
    borderRadius: 10,
    height: 50,
  },
  email: {
    marginTop: 30,
    borderBottomWidth: 2,
    borderBottomColor: "#ECECEC",
    width: "85%",
    paddingLeft: 8,
    color: "#ECECEC",
    height: 40,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    backgroundColor: "#3939d7",
    borderRadius: 10,
    height: 50,
  },
  cPassword: {
    marginTop: 30,
    borderBottomWidth: 2,
    borderBottomColor: "#ECECEC",
    width: "85%",
    paddingLeft: 8,
    color: "#ECECEC",
    height: 40,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    backgroundColor: "#3939d7",
    borderRadius: 10,
    height: 50,
  },
  password: {
    marginTop: 30,
    borderBottomWidth: 2,
    borderBottomColor: "#ECECEC",
    width: "85%",
    paddingLeft: 8,
    color: "#ECECEC",
    height: 40,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    backgroundColor: "#3939d7",
    borderRadius: 10,
    height: 50,
  },
  finger: {
    width: 90,
    height: 130,
    alignItems: "center",
    justifyContent: "center",
    // border:" #ECECEC",
    borderWidth: 1,
    borderColor: "#ECECEC",
    borderRadius: 8,
    backgroundColor: "#3939d7",
    marginTop: 40,
    marginLeft: 200,
  },
});

export default Register;
