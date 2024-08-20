import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "./../../../constants/Colors";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View
      style={{
        padding: 25,
        marginTop: 10,
        backgroundColor: Colors.WHITE,
        height: "100%",
        paddingTop: 50,
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back-circle" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 28,
          fontFamily: "outfit-bold",
          textAlign: "center",
        }}
      >
        Let's Sign In
      </Text>
      <Text
        style={{
          fontSize: 28,
          fontFamily: "outfit",
          textAlign: "center",
          color: Colors.GRAY,
        }}
      >
        Welcome Back
      </Text>
      <Text
        style={{
          fontSize: 28,
          fontFamily: "outfit",
          textAlign: "center",
          color: Colors.GRAY,
        }}
      >
        You've been missed
      </Text>
      {/* Email */}
      <View
        style={{
          marginTop: 50,
          fontFamily: "outfit-regular",
        }}
      >
        <Text>Email</Text>
        <TextInput style={styles.input} placeholder="Enter your email" />
      </View>
      {/* password */}
      <View
        style={{
          marginTop: 20,
          fontFamily: "outfit-regular",
        }}
      >
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry={true}
        />
      </View>
      {/* Sign in button */}
      <View
        style={{
          marginTop: 20,
          backgroundColor: Colors.PRIMARY,
          padding: 15,
          borderRadius: 15,
          textAlign: "center",
          fontFamily: "outfit-bold",
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            textAlign: "center",
            fontFamily: "outfit-bold",
            fontSize: 17,
          }}
        >
          Sign In
        </Text>
      </View>
      {/* create account button */}
      <TouchableOpacity
        onPress={() => router.replace("/auth/sign-up")}
        style={{
          marginTop: 20,
          borderWidth: 1,
          padding: 15,
          borderRadius: 15,
          textAlign: "center",
          fontFamily: "outfit-bold",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "outfit-regular",
            fontSize: 17,
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    fontFamily: "outfit-regular",
  },
});
