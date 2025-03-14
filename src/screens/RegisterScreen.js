import React, { useState } from "react";
import { Text, View, TextInput, Button, Alert, ImageBackground } from "react-native";
import { registerstyle } from "../styles/registerstyle"; 
import  bg3 from "../assets/bg3.png"; 
const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [password, setPass] = useState("");
  const [conpass, setConPass] = useState("");
  const [email, setEmail] = useState("");

  const handlePress = () => {
    if (!username || !firstname || !email || !password || !conpass) {
      Alert.alert("Error", "All fields are required!", [{ text: "OK" }]);
      return;
    }

    if (password !== conpass) {
      Alert.alert("Error", "Passwords do not match!", [{ text: "OK" }]);
      return;
    }

    Alert.alert("Success", "Registration Successful!", [{ text: "OK" }]);
    console.log("Registration successful");
  };

  return (
    <ImageBackground source={bg3} style={registerstyle.background}>
    <View style={registerstyle.container}>
    
      <View style={registerstyle.innerContainer}>
        <Text style={registerstyle.title}>Create your own account</Text>

        <Text>First name</Text>
        <TextInput
          value={username}
          style={registerstyle.textinput}
          onChangeText={setUsername}
          placeholder="Enter your first name"
          placeholderTextColor="#999"
        />

        <Text>Surname</Text>
        <TextInput
          value={firstname}
          style={registerstyle.textinput}
          onChangeText={setFirstname}
          placeholder="Enter your surname"
          placeholderTextColor="#999"
        />

        <Text>Email</Text>
        <TextInput
          value={email}
          style={registerstyle.textinput}
          onChangeText={setEmail}
          placeholder="Enter your email"
          placeholderTextColor="#999"
          keyboardType="email-address"
        />

        <Text>Password</Text>
        <TextInput
          value={password}
          style={registerstyle.textinput}
          onChangeText={setPass}
          secureTextEntry={true}
          placeholder="Enter your password"
          placeholderTextColor="#999"
        />

        <Text>Confirm Password</Text>
        <TextInput
          value={conpass}
          style={[registerstyle.textinput, { marginBottom: 35 }]}
          onChangeText={setConPass}
          secureTextEntry={true}
          placeholder="Confirm your password"
          placeholderTextColor="#999"
        />

        <Button onPress={handlePress} title="Sign in" color="#78c66d" />
      </View>
    </View>
    </ImageBackground>
  );
};

export default RegisterScreen;