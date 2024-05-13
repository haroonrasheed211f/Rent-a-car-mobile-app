import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

function SignupScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleSignup = () => {
    // Implement your signup logic here
    console.log("Signup pressed");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/logincar.jpg")}
        style={styles.background}
      >
        <View style={styles.overlay} />
        <View style={styles.content}>
          <Text style={styles.title}>Signup</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity onPress={handleSignup} style={styles.signupButton}>
            <Text style={styles.signupButtonText}>Signup</Text>
          </TouchableOpacity>
          <View style={styles.signinContainer}>
            <Text style={styles.signinTextdes}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.signinText}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
    textTransform: "capitalize",
  },
  input: {
    backgroundColor: "#fff",
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  signupButton: {
    backgroundColor: "#28a745",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  signupButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  signinContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  signinText: {
    color: "#007bff",
    marginLeft: 5,
    textDecorationLine: "underline",
  },
  signinTextdes: {
    color: "#fff",
    marginLeft: 5,
    textDecorationLine: "underline",
  },
});

export default SignupScreen;
