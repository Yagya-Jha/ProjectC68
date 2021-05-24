import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
export default class FaceBookScreen extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <Header
          backgroundColor="rgba(255,255,0,255)"
          centerComponent={{
            text: 'Buzz App',
            style: styles.textheader,
          }} />
     <View style={styles.textcontainer}>
    <Text style = {styles.appName}>FACEBOOK</Text>
    </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor:"rgba(245,245,245,255)"
  },
  textcontainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor:"rgba(245,245,245,255)"
  },
  textheader: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf:"center",
    alignItems:"center",
  },
  appName: {
    textAlign:"center",
    fontSize:55,
    fontWeight:"bold",
    color: "blue",
  },

});
