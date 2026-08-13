import * as React from 'react';
import { StyleSheet, Button, TextInput, TouchableOpacity, Image , ScrollView} from 'react-native';
import { useState } from 'react';
import avis_instance from "../components/AVIS";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, } from '../components/Themed';
import { Picker } from '@react-native-picker/picker';
import { Appearance } from 'react-native'
import { AsyncStorage } from 'react-native';




export default function TabOneScreen({
  navigation,route
}) {
  //const { navigate } = this.props.navigation;
  


  console.log(route.params);

  const [device_name, set_device_name] = useState('');
  const [phone_num, set_phone_num] = useState('');
  const [password, set_password] = useState('');
  const [m, set_m] = useState([]);
  const [picker_device, set_picker] = useState(0);
  let temp_m = [];
  const [count_0, set_c_0] = useState('');
  const [count_1, set_c_1] = useState('');
  const [count_2, set_c_2] = useState('');
  const [count_3, set_c_3] = useState('');
  const [count_4, set_c_4] = useState('');


  const [list1, set_list1] = useState('');
  const [list2, set_list2] = useState('');
  const [list3, set_list3] = useState('');
  const [lsit4, set_list4] = useState('');
  const [list5, set_list5] = useState('');

  //const [password, set_password] = useState('');



  function go_to_screen(rout_name:string,device_model:string){


    avis_instance.save_data('main_model', device_model);
    navigation.navigate(rout_name,{ name: device_model });

  }



 


var list = ['KP2015GS','AUTO Dialer','KP2015GS1','KP2015GS2','KP2015GS1'];



var last_list = "";
var count = 0;

var count0 = 0;
var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;


React.useEffect(() => { avis_instance.load_data('device_list_'+list[0]).then((ret_val) => {


  if (ret_val == null) {
    console.log("null value");
  } else {
    console.log("new:n "+ret_val);

    var loaded_device = JSON.parse(ret_val);

    console.log(loaded_device);
    count0 = loaded_device.length;
    //count++;
    //count0++;
    //count0 = 99;
    set_c_0("("+count0.toString()+")");
    console.log(ret_val);

  }
  last_list = list[0];


}) });

React.useEffect(() => { avis_instance.load_data('device_list_'+list[1]).then((ret_val) => {


  if (ret_val == null) {
    console.log("null value1");
  } else {
    count++;
    count1++;

    var loaded_device = JSON.parse(ret_val);

    console.log(loaded_device);
    count0 = loaded_device.length;


    set_c_1("("+count0.toString()+")");
    console.log("xhere");
    console.log(ret_val);

  }

  last_list = list[1];


}) });

React.useEffect(() => { avis_instance.load_data('device_list_'+list[2]).then((ret_val) => {


  if (ret_val == null) {
    console.log("null value2");
  } else {
    count++;
    count2++;

    var loaded_device = JSON.parse(ret_val);

    console.log(loaded_device);
    count0 = loaded_device.length;

    set_c_2("("+count0.toString()+")");
    console.log(ret_val);

  }
  last_list = list[2];

}) });

React.useEffect(() => { avis_instance.load_data('device_list_'+list[3]).then((ret_val) => {


  if (ret_val == null) {
    console.log("null value");
  } else {
    count++;
    count3++;

    var loaded_device = JSON.parse(ret_val);

    console.log(loaded_device);
    count0 = loaded_device.length;

    set_c_3("("+count0.toString()+")");
    console.log(ret_val);
    last_list = list[3];
  }

}) });

React.useEffect(() => { avis_instance.load_data('device_list_'+list[4]).then((ret_val) => {


  if (ret_val == null) {
    console.log("null value");
  } else {
    count++;
    count4++;

    var loaded_device = JSON.parse(ret_val);

    console.log(loaded_device);
    count0 = loaded_device.length;


    set_c_4("("+count0.toString()+")");
    console.log(ret_val);

  }
  last_list = list[4];
  load_count();


}) });



function load_count(){


  




  if(count ==1){
    if( count0){
    //  go_to_screen('Devices',list[0]);
    }
    if( count1){
    //  go_to_screen('Devices',list[1]);
    }
    if( count2){
    //  go_to_screen('Devices',list[2]);
    }
    if( count3){
    //  go_to_screen('Devices',list[3]);
    }
    if( count4){
     // go_to_screen('Devices',list[4]);
    }
  }


  console.log(count);
}





 




  //console.log();


  console.log("hi again");
  console.log("mozzzzz1");
  //AsyncStorage.clear();
   AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (error, stores) => {
        stores.map((result, i, store) => {
          console.log("mozzzzz");
          console.log({ [store[i][0]]: store[i][1] });
          return true;
        });
      });
    });
  return (
    <ScrollView>
    <View style={styles.container}>
<Text style={styles.title}>Select your device model</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={{

        width: '100%',
        marginTop: 70,
        justifyContent: 'center',
        flexDirection: "row",
        flexWrap: "wrap",
      }}>
      <TouchableOpacity
          style={styles.main_btn}
          onPress={() =>
            go_to_screen('Devices','KP2015GS')
            //get_switch_command_main(0)
          }>

          <Image style={styles.mianimg} source={require('../assets/images/2015.png')} />
          <Text style={styles.text_in}>KP2015GS {count_0}</Text>
      </TouchableOpacity>
     
   
      <TouchableOpacity
          style={styles.main_btn}
          onPress={() =>
            go_to_screen('Devices','AUTO Dialer')
            //get_switch_command_main(0)
          }>

          <Image style={styles.mianimg} source={require('../assets/images/AU.png')} />
          <Text style={styles.text_in}>AUTO Dialer {count_3}</Text>
      </TouchableOpacity>


      <TouchableOpacity
          style={styles.main_btn}
          onPress={() =>
            go_to_screen('Devices','KP2015GS1')
            //get_switch_command_main(0)
          }>

          <Image style={styles.mianimg} source={require('../assets/images/GS1.png')} />
          <Text style={styles.text_in}>KP2015GS1 {count_4}</Text>
      </TouchableOpacity>
      <TouchableOpacity
          style={styles.main_btn}
          onPress={() =>
            go_to_screen('Devices','KP2015GS2')
            //get_switch_command_main(0)
          }>

          <Image style={styles.mianimg} source={require('../assets/images/GS2.png')} />
          <Text style={styles.text_in}>KP2015GS2 {count_4}</Text>
      </TouchableOpacity>

        
      </View>
      </View>

      </ScrollView>

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
    width: 120, height: 120
  },
  single_segment: {
    marginBottom: 20,
  },
  segment__: {
    margin: 1,


  },
  text_in:{
    fontWeight:"bold",
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
