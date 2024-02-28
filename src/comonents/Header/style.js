import React from "react";
import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView } from "react-native";

const style = StyleSheet.create({
    headerStyle: {
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
      height: 90,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      // Android Only
      elevation: 2,
    },
    headerImageStyle:{
      height:57,
      width:150,
    }
});

export default style;