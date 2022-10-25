import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import logo from './images/real.png'

const LoginAs = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.circle1,{ opacity: "25%",borderRadius: "50%",}]}></View>
      <View style={[styles.circle2,{opacity: "35%", borderRadius: "50%",}]}></View>
      <View style={[styles.circle3,{ borderRadius: "50%",borderRadius: "50%",opacity: "35%",}]}></View>

      <View style={[styles.circle4,{opacity: "25%",borderRadius: "50%"}]}></View>
      <View style={[styles.circle5,{borderRadius: "50%",opacity: "35%",}]}></View>
      <View style={[styles.circle6,{borderRadius: "50%",}]}></View>

      <TouchableOpacity style={[styles.circle7,{borderRadius: "50%",}]}>
        <Text
          style={{
            color: "#ECECEC",
            fontSize: 18,
            fontWeight: 600,
            marginTop: 23,
          }}
        >
          Close
        </Text>
      </TouchableOpacity>

      <Image source={logo} style={{width:300,height:250,marginTop:"25%"}}/>

      {/* <TouchableOpacity
        style={[styles.recep,{width: "84%",height:"6%",marginTop: "20%",}]}
        onPress={() => {
          navigation.navigate("login");
        }}
      >
        <Text style={{ color: "#ECECEC", fontSize: 15, fontWeight: 400,textAlign:"center" }}>
          Receptionist
        </Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={[styles.nurse,{ width: "84%",height:"6%",marginTop: "30%",}]} 
       onPress={() => {
        navigation.navigate("nurseLogIn");
      }}>
        <Text style={{ color: "#ECECEC", fontSize: 15, fontWeight: 400,textAlign:"center" }}>
          Nurse
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.doctor,{width: "84%",height:"6%",marginTop: "7%",}]}
      onPress={()=>{
        navigation.navigate('doctorLogin')
      }}>
        <Text style={{ color: "#ECECEC", fontSize: 15, fontWeight: 400,textAlign:"center" }}>
          Doctor
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#2827D3",
    overflow: "hidden",
  },
  circle1: {
    position: "absolute",
    width: 300,
    height: 300,
    right: -110,
    top: -60,
    backgroundColor: "#5060F0",
  },
  circle2: {
    position: "absolute",
    width: 230,
    height: 230,
    right: -80,
    top: -30,
    backgroundColor: "#5060F0",
  },
  circle3: {
    position: "absolute",
    width: 140,
    height: 140,
    right: -35,
    top: 15,
    backgroundColor: "#5060F0",
    alignItems: "center",
    justifyContent: "center",
  },
  circle4: {
    position: "absolute",
    width: 240,
    height: 240,
    left: -110,
    bottom: 87,
    backgroundColor: "#5060F0",
    
  },
  circle5: {
    position: "absolute",
    width: 160,
    height: 160,
    left: -60,
    bottom: 125,
    backgroundColor: "#5060F0",
    alignItems: "center",
    justifyContent: "center",
  },
  circle6: {
    position: "absolute",
    width: 100,
    height: 100,
    left: -35,
    bottom: 155,
    backgroundColor: "#5060F0",
    alignItems: "center",
    justifyContent: "center",
  },

  circle7: {
    position: "absolute",
    width: 200,
    height: 200,
    left: 103,
    bottom: -130,
    backgroundColor: "#5060F0",
    alignItems: "center",
  
  },
  recep: {
    borderBottomWidth: 2,
    borderBottomColor: "#ECECEC",
    color: "#ECECEC",
    alignItems: "center",
    backgroundColor: "#3939d7",
    borderRadius: 7,
    justifyContent:"center"
  },
  nurse: {
    borderBottomWidth: 2,
    borderBottomColor: "#ECECEC",
    color: "#ECECEC",
    alignItems: "center",
    backgroundColor: "#3939d7",
    borderRadius: 7,
    justifyContent:"center"
  },
  doctor: {
    borderBottomWidth: 2,
    borderBottomColor: "#ECECEC",
    color: "#ECECEC",
    alignItems: "center",
    backgroundColor: "#3939d7",
    borderRadius: 7,
    justifyContent:"center"
  },
});
export default LoginAs;
