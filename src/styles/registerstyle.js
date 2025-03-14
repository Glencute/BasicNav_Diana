import { StyleSheet } from "react-native";

export const registerstyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
 
    width: "100%",
    top: 150,
    
  },
  innerContainer: {
    width: "100%",
    height:"100%",
    maxWidth: 400,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0)",
    borderRadius: 15,   
    borderTopRightRadius:50,
    borderTopLeftRadius:50,
    top:70,
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
    marginTop:15,
    elevation:10,

  },
  button: {
    backgroundColor: "#9bf28f",
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