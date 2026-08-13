import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import avis_instance from "../components/AVIS";
import { useState } from 'react';
import SegmentedControl from '@react-native-community/segmented-control';
import { RootStackParamList } from '../types';
import { AsyncStorage, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function NotFoundScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {

  const [main_device, setMain_dev] = useState('');
  const [R1, setR1] = useState(0);
  const [R2, setR2] = useState(0);

  const [B1, setB1] = useState(11);
  const [B2, setB2] = useState(11);
  const [B3, setB3] = useState(11);

  const [GSM_SMS_LINE, set_gmssmsline] = useState(0);

  const [show_pick, set_show_pick] = useState(0);
  const [device_name, set_device_name] = useState('');

  const [m_sms, set_sms] = useState({});
  const [main_btn_2, set_main_btn_2] = useState('');
  const [main_btn_3, set_main_btn_3] = useState('');
  const [mm_model, set_model_name_] = useState('');
  const [main_picker, set_picker] = useState({});
  const [picker_value, set_picker_v] = useState(0);
  const sms = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  }
  const gsm = {
    0: 10,
    1: 11,
    2: 12,
    3: 13,
    4: 14,
    5: 15,
    6: 16,
    7: 17,
    8: 18,
    9: 19
  }
  const line = {
    0: 20,
    1: 21,
    2: 22,
    3: 23,
    4: 24,
    5: 25,
    6: 26,
    7: 27,
    8: 28,
    9: 29
  }



  //console.log("himozz");

  avis_instance.load_data('main_device').then((ret_val: string) => {
    setMain_dev(ret_val);
    //console.log("hiii>>> "+ret_val);

  })



  avis_instance.load_data('main_device').then((ret_val: string) => {
    setMain_dev(ret_val);
    //console.log("hiii>>> "+ret_val);

  })

  avis_instance.load_data(main_device + 'sms').then((ret_val = {}) => {
    if (!ret_val) {


      ret_val = {
        0: 0,
        1: 1000,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9
      }
      //console.log(ret_val);
      console.log("MOOOOOOOOZ" + Date.now());

    }

    set_sms(JSON.stringify(ret_val));

  })
  avis_instance.load_data(main_device + 'gsm').then((ret_val: number) => {
    if (!ret_val)
      ret_val = 11;
    setB2(ret_val);
  })
  avis_instance.load_data(main_device + 'line').then((ret_val: number) => {
    if (!ret_val)
      ret_val = 11;
    setB3(ret_val);
  })





  //const main_device = await AsyncStorage.getItem('main_device');










  function load_device() {
    console.log("***");
    //avis_instance.save_data('main_device',device_name);
    //navigation.navigate('HOME');
  }



  function save_to_device(){

    var cmm = "";
    switch (show_pick) {
            case 0:
              cmm = "SA--pass"+picker_value+device_name;
              break;
            case 1:
              cmm = "GA--pass"+picker_value+device_name;
              break;
            case 2:
              cmm = "LA--pass"+picker_value+device_name;
              break;
          }



    avis_instance.send_sms(cmm,true);
  }
  function get_from_device(){
    avis_instance.send_sms("CA")
  }

  var list_v = ['SMS', 'GSM', 'LINE'];

  console.log(mm_model+"***");
  if(mm_model == 'KP2015GS1'){
   
    list_v.length = 2;
    
  }
  console.log(list_v);
 

  function load_model_name() {

    avis_instance.load_data('main_model').then((ret_val) => {

      console.log("model:::" + ret_val);

      set_model_name_(ret_val);

    });

  }
  load_model_name();


  return (



    <View style={styles.container}>




      <SegmentedControl
        values={list_v}
        selectedIndex={R1}
        tintColor={'white'}
        style={styles.single_segment}
        backgroundColor={'#2bb9ec'}
        activeFontStyle={  {'color':"#000"} }
         
          fontStyle={{'color':"#fff"}}
        onChange={(event) => {


          switch (event.nativeEvent.selectedSegmentIndex) {
            case 0:
              set_show_pick(0);
              break;
            case 1:
              set_show_pick(1);
              break;
            case 2:
              set_show_pick(2);
              break;
          }

          console.log(event.nativeEvent.selectedSegmentIndex);


        }}
      />
      <View style={{

        width: '100%',
        height: 200,
        justifyContent: 'center',
        flexDirection: "row",
        flexWrap: "wrap",
      }}>
        <TextInput

          onChangeText={(username) =>

            set_device_name(username)

          }
          placeholderTextColor="#999" 
          placeholder={'Number to save ...'}
          style={styles.input}
        />


        <View style={{

          width: '100%',
          justifyContent: 'center',
          flexDirection: "row",
          flexWrap: "wrap",
          padding:40,
        }}>

          <View style={{


   
width: '80%',


}}>
            <Text style={styles.text}> </Text>
          </View>
          <View style={{


           
            width: '20%',

          }}>


            {show_pick == 0 &&
              <Picker
                selectedValue={picker_value}
                style={{ height: 150, width: 100 }}
                onValueChange={(value) => {
                  set_picker_v(value);
                }}
              >
                {Object.entries(sms).map(([key, value]) => {
                  return (< Picker.Item label={String(value)} value={key} key={key} />);
                })}

              </Picker>
            }
            {show_pick == 1 &&
              <Picker
                selectedValue={picker_value}
                style={{ height: 150, width: 100 }}
                onValueChange={(value) => {
                  set_picker_v(value);
                }}
              >
                {Object.entries(gsm).map(([key, value]) => {
                  return (< Picker.Item label={String(value)} value={key} key={key} />);
                })}

              </Picker>
            }
            {show_pick == 2 &&
              <Picker
                selectedValue={picker_value}
                style={{ height: 150, width: 100 }}
                onValueChange={(value) => {
                  set_picker_v(value);
                }}
              >
                {Object.entries(line).map(([key, value]) => {
                  return (< Picker.Item label={String(value)} value={key} key={key} />);
                })}

              </Picker>
            }
          </View>
        </View>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() =>
            save_to_device()
            //navigation.navigate('HOME')
          }


        >
          <Text style={styles.loginText}>Save on Device</Text>
        </TouchableOpacity>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() =>
            get_from_device()
            //navigation.navigate('HOME')
          }


        >
          <Text style={styles.loginText}>Get All number from Device </Text>
        </TouchableOpacity>

      </View>









    </View>


  );
}



const styles = StyleSheet.create({
  main_btn: {
    margin: 5,
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
  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 5,
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
  mianimg: {
    width: 70, height: 90
  },
  single_segment: {
    marginBottom: 20,
  },
  segment__: {
    margin: 1,


  },
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: "#FFF",
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
  text:{
    textAlign: "left",
    fontSize: 15,
    fontWeight: 'bold',
  }
});