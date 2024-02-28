import React from "react";
import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView } from "react-native";
import styles from "./style";

const Header = () => {
    return (
        <View style={styles.headerStyle}>
          <Image
          style={styles.headerImageStyle}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Viviz_logo.svg/2560px-Viviz_logo.svg.png"
          }}
        />
      </View>
    );
}

export default Header;