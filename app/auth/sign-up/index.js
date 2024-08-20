import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { Colors } from "../../../constants/Colors";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../../Configs/FirebaseConfig";

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const OnCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    return (
      <View
        style={{
          padding: 25,
          marginTop: 50,
          backgroundColor: Colors.WHITE,
          height: "100%",
          paddingTop: 40,
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back-circle" size={24} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 28,
            marginTop: 20,
          }}
        >
          Create New Account
        </Text>

        <View
          style={{
            marginTop: 20,
            fontFamily: "outfit-regular",
          }}
        >
          <Text>Full Name</Text>
          <TextInput style={styles.input} placeholder="Enter Full Name" />
        </View>

        {/* Email */}
        <View
          style={{
            marginTop: 20,
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
        <TouchableOpacity
          onPress={() => router.replace("/auth/sign-in")}
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
            Sign In
          </Text>
        </TouchableOpacity>

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
            Create Account
          </Text>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    input: {
      padding: 15,
      borderWidth: 1,
      borderRadius: 15,
      borderColor: Colors.GRAY,
      fontFamily: "outfit-regular",
    },
  });
}
