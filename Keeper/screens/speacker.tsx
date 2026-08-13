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

  const [B2, setB2] = useState(11);
  const [main_device, setMain_dev] = useState('');

  avis_instance.load_data('main_device').then((ret_val: string) => {
    setMain_dev(ret_val);
    //console.log("hiii>>> "+ret_val);

  })

  avis_instance.load_data(main_device + 'serect_report').then((ret_val: number) => {
    if (!ret_val)
      ret_val = 11;
    setB2(ret_val);
  })


  function secret(){
    var current_b1;
      if(B2==11){
        setB2(2);
        current_b1 = 2;
        avis_instance.save_data(main_device + "serect_report", current_b1);
        avis_instance.send_sms("SC--passON",true);
        
      }else{ 
        setB2(11);
        current_b1 = 11;
        avis_instance.save_data(main_device + "serect_report", current_b1);
        avis_instance.send_sms("SC--passOFF",true);
       
      }
     
    
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
            secret()
          }>
    
    {B2 == 11 &&
            <Image style={styles.mianimg} source={require('../assets/icons/speaker1.png')} />
          }
          {B2 == 2 &&
            <Image style={styles.mianimg} source={require('../assets/icons/speaker.png')} />
          }
           
          

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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFF",
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

