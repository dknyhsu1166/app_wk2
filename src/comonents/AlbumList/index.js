import React from "react";
import { StyleSheet, Text, View, Image, StatusBar, SafeAreaView,ScrollView} from "react-native";
import albumJson from "../../json/album.json";
import songJson from "../../json/song.json";
import AlbumDetail from "../AlbumDetail";
import SongDetail from "../SongDetail";

const AlbumList = () => {

    console.log('rendering AlbumList...');

    return (
    <ScrollView>
      <AlbumDetail album = {albumJson[0]} />
      <AlbumDetail album = {albumJson[1]} />
      <AlbumDetail album = {albumJson[2]} />
      <AlbumDetail album = {albumJson[3]} />
      <AlbumDetail album = {albumJson[4]} />
      <Text style={styles.titleStyle}>熱門歌曲</Text>
      <View style={styles.cardContainerStyle}>
      <SongDetail song = {songJson[0]} />
      <SongDetail song = {songJson[1]} />
      <SongDetail song = {songJson[2]} />
      </View>
      <Text style={styles.fontStyle}>Made by 許宸瑋</Text>

    </ScrollView>
    );
}
const styles = StyleSheet.create({
  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "black",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 17,
  },
  titleStyle:{
    marginTop: 15,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: "bold",
  },
  fontStyle:{
    marginTop: 10,
    marginBottom: 15,
    fontWeight: "bold",
    textAlign: 'center',
    color: "gray",
  },
});
export default AlbumList;