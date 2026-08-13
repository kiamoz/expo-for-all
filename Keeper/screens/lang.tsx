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

  const [B1, setB1] = useState(2);
  const [B2, setB2] = useState(11);

  
  const [m, set_m] = useState([]);
  const [picker_device, set_picker] = useState(0);

  const [main_device, setMain_dev] = useState('');

  avis_instance.load_data('main_device').then((ret_val: string) => {
    setMain_dev(ret_val);
    //console.log("hiii>>> "+ret_val);

  })


  React.useEffect(() => {
    async function fetchData() {
      console.log("load:"+main_device + 'out_1');
      avis_instance.load_data(main_device + 'out_1').then((ret_val: string) => {
        if (!ret_val)
          ret_val = 'Output 1';
        console.log(">>> "+ret_val);
        //set_out1(ret_val);
      })
    }
    fetchData();
  }, [main_device]); // Or [] if effect doesn't need props or state
  


  let temp_m = [];

  function btn_1() {


    if (B1 == 11) {
      setB1(2);
      setB2(11);
      avis_instance.send_sms("LS--passEN",true);
    }else{
      setB1(11);
      setB2(2);
      avis_instance.send_sms("LS--passFA",true);
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
            btn_1()
          }>
          {B1 == 11 &&
            <Image style={styles.mianimg} source={require('../assets/icons/english1.png')} />
          }
          {B1 == 2 &&
            <Image style={styles.mianimg} source={require('../assets/icons/english2.png')} />
          }

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.main_btn}
          onPress={() =>
            btn_1()
          }>
          {B2 == 11 &&
            <Image style={styles.mianimg} source={require('../assets/icons/farsi1.png')} />
          }
          {B2 == 2 &&
            <Image style={styles.mianimg} source={require('../assets/icons/farsi2.png')} />
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

