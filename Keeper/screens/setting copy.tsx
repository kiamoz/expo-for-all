import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import avis_instance from "../components/AVIS";
import { useState } from 'react';
import SegmentedControl from '@react-native-community/segmented-control';
import { MonoText } from '../components/StyledText';
import { RootStackParamList } from '../types';

export default function NotFoundScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {

 

  const [count, setCount] = useState(0);

 

  function go_to_screen(rout_name:string){

    navigation.navigate(rout_name);

  }

  return (

    <View style={styles.container}>

      <View style={{

        width: '100%',
        height: 200,
        justifyContent: 'center',
        flexDirection: "row",
        flexWrap: "wrap",
      }}>
      <TouchableOpacity
          style={styles.main_btn}
          onPress={() =>
            go_to_screen('Charge')
            //get_switch_command_main(0)
          }>

          <Image style={styles.mianimg} source={require('../assets/icons/simcart.png')} />
          <Text style={styles.text_in}>SIM</Text>
      </TouchableOpacity>
      <TouchableOpacity
          style={styles.main_btn}
          onPress={() =>
            go_to_screen('antena')
            //get_switch_command_main(0)
          }>

          <Image style={styles.mianimg} source={require('../assets/icons/signal.png')} />
          <Text style={styles.text_in}>Signal</Text>
      </TouchableOpacity>
      <TouchableOpacity
          style={styles.main_btn}
          onPress={() =>
            go_to_screen('setting_')
            //get_switch_command_main(0)
          }>

          <Image style={styles.mianimg} source={require('../assets/icons/setting.png')} />
          <Text style={styles.text_in}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
          style={styles.main_btn}
          onPress={() =>
            go_to_screen('contact')
            //get_switch_command_main(0)
          }>

          <Image style={styles.mianimg} source={require('../assets/icons/contact.png')} />
          <Text style={styles.text_in}>Contact</Text>
      </TouchableOpacity>
      <TouchableOpacity
          style={styles.main_btn}
          onPress={() =>
            go_to_screen('sms')
            //get_switch_command_main(0)
          }>

          <Image style={styles.mianimg} source={require('../assets/icons/text.png')} />
          <Text style={styles.text_in}>SMS</Text>
      </TouchableOpacity>
      <TouchableOpacity
          style={styles.main_btn}
          onPress={() =>
            go_to_screen('zone')
            //get_switch_command_main(0)
          }>

      

          <Image style={styles.mianimg} source={require('../assets/icons/output.png')} />
          <Text style={styles.text_in}>Output</Text>
      </TouchableOpacity>
      <TouchableOpacity
          style={styles.main_btn}
          onPress={() =>
            go_to_screen('lang')
            //get_switch_command_main(0)
          }>

          <Image style={styles.mianimg} source={require('../assets/icons/lang.png')} />
          <Text style={styles.text_in}>Lang</Text>
      </TouchableOpacity>

      <TouchableOpacity
          style={styles.main_btn}
          onPress={() =>
            go_to_screen('secret')
            //get_switch_command_main(0)
          }>

          <Image style={styles.mianimg} source={require('../assets/icons/secret.png')} />
          <Text style={styles.text_in}>Secret</Text>
      </TouchableOpacity>


      

      </View>







    </View>


  );
}



const styles = StyleSheet.create({
  main_btn: {
    margin: 5,
  },
  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 70,
    paddingTop: 10,
    padding: 30,
    paddingBottom: 10,
    backgroundColor: '#10416c',
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
  mianimg: {
    justifyContent: 'center',
    width: 100, height: 100
  },
  single_segment: {
    marginBottom: 20,
  },
  segment__: {
    margin: 1,


  },
  text_in:{

    textAlign:"center",
  },
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "#00649b",
    padding: 20,

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: "center",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
