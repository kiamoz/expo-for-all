import * as React from 'react';
import { StyleSheet, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import avis_instance from "../components/AVIS";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, } from '../components/Themed';
import { Picker } from '@react-native-picker/picker';
import SegmentedControl from '@react-native-community/segmented-control';




export default function TabOneScreen({
  navigation,
}) {
  //const { navigate } = this.props.navigation;

 
  function check_mtn_mci(){
    if(B1==2){
      return "mci";
    }else{
      return "mtn";
    }
  }

  function get_antena(){
    
      avis_instance.send_sms("AN");
    
  }




  return (
    <View style={styles.container}>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={{

        width: '100%',
        height: 200,
        justifyContent: 'center',
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#FFF",
      }}>
        <TouchableOpacity
          style={styles.main_btn}
          onPress={() =>
            get_antena()
          }>
    
      
            <Image style={styles.mianimg} source={require('../assets/icons/s5.png')} />
          

        </TouchableOpacity>
        

      </View>


      

      
      




    </View>

  );
}

const styles = StyleSheet.create({
  segment__: {
    margin: 1,


  },
  main_btn: {
    margin: 5,
  },
  container: {
    backgroundColor: "#FFF",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    padding: 30,
    paddingBottom: 10,
    backgroundColor: '#2bb9ec',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },

  btn: {
    backgroundColor: '#2bb9ec',
  },

  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  input: {
    width: '80%',
    height: 44,
    padding: 10,
    borderWidth: 2,
    borderColor: '#2bb9ec',
    marginBottom: 10,
  },

  mianimg: {
    width: 100, height: 100
  },
});

