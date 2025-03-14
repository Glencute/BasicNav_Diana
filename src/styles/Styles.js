import { StyleSheet } from "react-native";

export const loginstyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  
  },
  innerContainer: {
    width: "90%",
    maxWidth: 400,
    padding: 20,
backgroundColor: "rgba(255, 255, 255, 0.01)",
    borderRadius: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    top:20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  textinput: {
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: "#f9f9f9",
    marginBottom: 10,
    color:"black",
  },
  button: {
    backgroundColor: "#841584",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop:30,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  background: {
    flex: 1,
    resizeMode:"center",
    justifyContent: "center",
  }
  

  
});