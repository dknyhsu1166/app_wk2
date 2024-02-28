import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const SongDetail = (props) => {
    const { thumbnail_image, title, artist } = props.song;
    return (
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.fontStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </View>
    );
  }
const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    margin: 5,
    borderRadius: 10,
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10
  },
  fontStyle:{
    fontSize: 16,
    fontWeight: "bold",
  },
  cardSectionStyle: {
    padding: 10,
    backgroundColor: "#fff",
    borderColor: "black",
    borderBottomWidth: 0.5,
    borderRadius: 20,
  },
  imageStyle: {
    height: 370,
    width: null,
    borderRadius: 15,
  }
});

export default SongDetail;