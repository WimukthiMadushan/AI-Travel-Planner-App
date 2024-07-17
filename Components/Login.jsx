import React from "react";
import { Image, View, Text, TextInput, Button } from "react-native";
import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

function Login() {
  return (
    <View>
      <Image
        source={require("./../assets/images/login.png")}
        style={{
          width: "100%",
          height: 550,
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 28,
            fontFamily: "outfit-bold",
            textAlign: "center",
          }}
        >
          AI Travel Planner
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 17,
            textAlign: "center",
            color: Colors.GRAY,
          }}
        >
          Discover your next adventure effortlessly. Personalized itineraries at
          your fingertips. Travel smarter with Al-driven insights."
        </Text>
        <View style={styles.button}>
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
            }}
          >
            Get Started
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    height: "100%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 15,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    color: Colors.WHITE,
    padding: 10,
    borderRadius: 99,
    textAlign: "center",
    marginTop: "20%",
  },
});

export default Login;
