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
  const [mm_model, set_model_name_] = useState('');
 

  function go_to_screen(rout_name:string){

    navigation.navigate(rout_name);

  }

  function load_model_name() {

    avis_instance.load_data('main_model').then((ret_val) => {

      console.log("model:::" + ret_val);

      set_model_name_(ret_val);

    });

  }

  load_model_name();

  return (

    <View style={styles.container}>

      <View style={{

        width: '100%',
        marginTop: 30,
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
          <Text style={styles.text_in}>Charge</Text>
      </TouchableOpacity>
      <TouchableOpacity
          style={styles.main_btn}
          onPress={() =>
            go_to_screen('antena')
            //get_switch_command_main(0)
          }>

          <Image style={styles.mianimg} source={require('../assets/icons/signal.png')} />
          <Text style={styles.text_in}>Antenna</Text>
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
          <Text style={styles.text_in}>Text msg</Text>
      </TouchableOpacity>
  
      <TouchableOpacity
          style={styles.main_btn}
          onPress={() =>
            go_to_screen('output')
            //get_switch_command_main(0)
          }>

          <Image style={styles.mianimg} source={require('../assets/icons/output.png')} />
          <Text style={styles.text_in}>Outputs</Text>
      </TouchableOpacity>
      { ( mm_model == 'KP2015GS' || mm_model == 'KP2015GS1'  ||  mm_model == 'A770' ) &&
      <TouchableOpacity
          style={styles.main_btn}
          onPress={() =>
            go_to_screen('lang')
            //get_switch_command_main(0)
          }>


          <Image style={styles.mianimg} source={require('../assets/icons/lang.png')} />
   
          <Text style={styles.text_in}>Lang</Text>
      </TouchableOpacity>
     }

{ ( mm_model == 'KP2015GS' || mm_model == 'KP2015GS1'  ||  mm_model == 'A770' ) &&
      <TouchableOpacity
          style={styles.main_btn}
          onPress={() =>
            go_to_screen('secret')
            //get_switch_command_main(0)
          }>

          <Image style={styles.mianimg} source={require('../assets/icons/secret.png')} />
          <Text style={styles.text_in}>Report</Text>
      </TouchableOpacity>
}

{ mm_model == 'GL150' &&
<TouchableOpacity
          style={styles.main_btn}
          onPress={() =>
            go_to_screen('input')
            //get_switch_command_main(0)
          }>


          <Image style={styles.mianimg} source={require('../assets/icons/input.png')} />
          <Text style={styles.text_in}>Inputs</Text>
      </TouchableOpacity>
}



{ ( mm_model == 'KP2015GS' || mm_model == 'KP2015GS1'  ||  mm_model == 'A770' ) &&
      <TouchableOpacity
          style={styles.main_btn}
          onPress={() =>
            go_to_screen('alarm')
            //get_switch_command_main(0)
          }>

          <Image style={styles.mianimg} source={require('../assets/icons/alarm_.png')} />
          <Text style={styles.text_in}>Alarm</Text>
      </TouchableOpacity>
}
      <TouchableOpacity
          style={styles.main_btn}
          onPress={() =>
            go_to_screen('Devices')
            //get_switch_command_main(0)
          }>

          <Image style={styles.mianimg} source={require('../assets/icons/device.png')} />
          <Text style={styles.text_in}>Devices</Text>
      </TouchableOpacity>

          <TouchableOpacity
          style={styles.main_btn}
          onPress={() =>
            go_to_screen('inistaller')
            //get_switch_command_main(0)
          }>

          <Image style={styles.mianimg} source={require('../assets/icons/installer.png')} />
          <Text style={styles.text_in}>Installer</Text>
      </TouchableOpacity>


           <TouchableOpacity
          style={styles.main_btn}
          onPress={() =>
            go_to_screen('Root')
            //get_switch_command_main(0)
          }>

          <Image style={styles.mianimg} source={require('../assets/icons/models.png')} />
          <Text style={styles.text_in}>Models</Text>
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
    justifyContent: 'center',
    width: 80, height: 80
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
});
