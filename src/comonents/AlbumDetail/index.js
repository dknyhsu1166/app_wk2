import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const AlbumDetail = (props) => {
  const { thumbnail_image, title, artist, image } = props.album;
  return (
    <View style={styles.cardContainerStyle}>
      <View style={styles.cardSectionStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: image
          }}
        />
      </View>
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
  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "black",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 12,
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

export default AlbumDetail;