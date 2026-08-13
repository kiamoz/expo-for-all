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

  const [redeemcode, set_redeem] = useState('');

  const [m, set_m] = useState([]);
  const [picker_device, set_picker] = useState(0);
  let temp_m = [];

  function btn_1() {


    if (B1 == 11) {
      setB1(2);
      setB2(11);
    }

  }
  function btn_2() {


    if (B2 == 11) {
      setB2(2);
      setB1(11);
    }

  }

  function init_arr_list() {







    avis_instance.load_data('device_list').then((ret_val) => {



      if (ret_val == null) {
        console.log("null value");
      } else {
        //console.log("vaue");
        //console.log(ret_val);

        set_m(JSON.parse(ret_val))

      }








    })
  }
  function check_mtn_mci(){
    if(B1==2){
      return "mci";
    }else{
      return "mtn";
    }
  }

  function get_charge(){
    if(check_mtn_mci()=='mci'){
      avis_instance.send_sms("CH--pass08*140*11#",true);
    }else{
      avis_instance.send_sms("CH--pass07*141*1#",true);
    }
  }

  function send_charge() {

    if(check_mtn_mci()=='mci'){
      avis_instance.send_sms("CH--pass22*140*#"+redeemcode+"#",true);
    }else{
      avis_instance.send_sms("CH--pass22*141*"+redeemcode+"#",true);
    }

   
  }



  init_arr_list();
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
            <Image style={styles.mianimg} source={require('../assets/icons/mci1.png')} />
          }
          {B1 == 2 &&
            <Image style={styles.mianimg} source={require('../assets/icons/mci2.png')} />
          }

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.main_btn}
          onPress={() =>
            btn_2()
          }>
          {B2 == 11 &&
            <Image style={styles.mianimg} source={require('../assets/icons/mtn1.png')} />
          }
          {B2 == 2 &&
            <Image style={styles.mianimg} source={require('../assets/icons/mtn2.png')} />
          }

        </TouchableOpacity>

      </View>


      <TextInput

        onChangeText={(username) =>

          set_redeem(username)

        }
        placeholder={'Charge Redeem Code'}
        placeholderTextColor="#999" 
        style={styles.input}
      />
      

      <View style={styles.segment__}>

      </View>

      <TouchableOpacity
        style={styles.loginScreenButton}
        onPress={() =>
          send_charge()
          //navigation.navigate('HOME')
        }


      >
        <Text style={styles.loginText}>Charge</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginScreenButton}
        onPress={() =>
          get_charge()
          //navigation.navigate('HOME')
        }


      >
        <Text style={styles.loginText}>Get Charge Balance</Text>
      </TouchableOpacity>






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

