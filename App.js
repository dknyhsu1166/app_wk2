import React from "react";
import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView } from "react-native";

import Header from "./src/comonents/Header";
import AlbumList from "./src/comonents/AlbumList";

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Header/>
      <AlbumList/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
