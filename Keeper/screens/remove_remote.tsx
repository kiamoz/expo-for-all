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
 



  const [show_pick, set_show_pick] = useState(0);
  const [device_name, set_device_name] = useState('');

  const [picker_value, set_picker_v] = useState(0);
  const sms = {
    
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
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
          
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
      }
      //console.log(ret_val);
      console.log("MOOOOOOOOZ" + Date.now());

    }

    set_sms(JSON.stringify(ret_val));

  })









  function save_to_device(){

    var cmm = "";
    switch (show_pick) {
            case 0:
              cmm = "RR--pass"+picker_value+device_name;
              break;
           
    }



    avis_instance.send_sms(cmm,true);
  }
  function get_from_device(){
    avis_instance.send_sms("52")
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
      

        <View style={{

          width: '100%',
          justifyContent: 'center',
          flexDirection: "row",
          flexWrap: "wrap",
          padding:40,
        }}>

          
          <View style={{


           
          

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
          <Text style={styles.loginText}>Remove Selected Remote</Text>
        </TouchableOpacity>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
       

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