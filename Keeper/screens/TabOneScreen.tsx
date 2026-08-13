import * as React from 'react';

import { StyleSheet, Button, TextInput, TouchableOpacity, Image } from 'react-native';

import { useState } from 'react';
import avis_instance from "../components/AVIS";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, } from '../components/Themed';
import { Picker } from '@react-native-picker/picker';
import { Appearance } from 'react-native'





export default function TabOneScreen({
  navigation, route
}) {
  //const { navigate } = this.props.navigation;


  console.log(route.params);

  const [device_name, set_device_name] = useState('');
  const [model_name, set_model_name] = useState('');
  const [phone_num, set_phone_num] = useState('');
  const [password, set_password] = useState('');
  const [m, set_m] = useState([]);
  const [picker_device, set_picker] = useState(0);
  const [icon_pick, set_icon] = useState(0);
  let temp_m = [];



  function init_arr_list() {





    

    
  }

  React.useEffect(() => { avis_instance.load_data('device_list_'+model_name).then((ret_val) => {


    console.log("load___"+'device_list_'+model_name);


    if (ret_val == null) {
      console.log("null value");
    } else {
      console.log("vaue");
      console.log(ret_val);

      set_m(JSON.parse(ret_val))

    }








  }) }, [model_name]);


  function save_device() {
    //console.log(device_name);
    //console.log(phone_num);
    //console.log(password);




    if (device_name && phone_num && password) {

      avis_instance.save_data('main_device', device_name);


      avis_instance.save_data(model_name+'_'+device_name + '_' + 'device_name', device_name);
      avis_instance.save_data(model_name+'_'+device_name + '_' + 'phone_num', phone_num);
      avis_instance.save_data(model_name+'_'+device_name + '_' + 'password', password);
      avis_instance.save_data(model_name+'_'+device_name + '_' + 'icon', icon_pick);


      console.log(m);
      temp_m = m;
      temp_m.push(device_name);
      set_m(temp_m);

      console.log('saving...');
      avis_instance.save_data('device_list_'+model_name, JSON.stringify(m));
      avis_instance.save_data('main_device', device_name);

      //navigation.navigate('HOME')

      navigation.navigate('HOME');
    } else {
      console.log("ELSE");
    }
  }

  function load_device() {
    //console.log(m[picker_device]);
    //console.log(device_name);
    //avis_instance.save_data('main_device','222278');
    avis_instance.save_data('main_device', m[picker_device]);
    navigation.navigate('HOME'); //home
  }

  function load_model_name() {

    avis_instance.load_data('main_model').then((ret_val) => {

      console.log("model:::" + ret_val);

      set_model_name(ret_val);

    });

  }

  function go_to_screen(icon:any){

set_icon(icon);
console.log("icon   "+icon_pick);
    
  }

  //console.log();
  load_model_name();
  React.useEffect(() => { init_arr_list() }, [picker_device]);
  console.log("hi again");
  return (
    <View style={styles.container}>
      
<Text style={styles.title}>Register New Device({model_name})</Text>

      <TextInput

        onChangeText={(username) =>

          set_device_name(username)

        }
        placeholder={'Device Name'}
        style={Appearance.getColorScheme() == 'dark' ? styles.input_dark : styles.input}
      />
      <TextInput

        onChangeText={(username2) => set_phone_num(username2)}
        placeholder={'Phone Number'}
        style={Appearance.getColorScheme() == 'dark' ? styles.input_dark : styles.input}
      />
      <TextInput

        onChangeText={(username) => set_password(username)}
        placeholder={'Device PASSCODE'}
        //secureTextEntry={true}
        style={Appearance.getColorScheme() == 'dark' ? styles.input_dark : styles.input}
      />



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
            go_to_screen('home')
            //get_switch_command_main(0)
          }>

          <Image style={styles.mianimg} source={require('../assets/images/home.png')} />
          <Text style={styles.text_in}>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.main_btn}
          onPress={() =>
            go_to_screen('office')
            //get_switch_command_main(0)
          }>

          <Image style={styles.mianimg} source={require('../assets/images/office.png')} />
          <Text style={styles.text_in}>OFFICE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.main_btn}
          onPress={() =>
            go_to_screen('vila')
            //get_switch_command_main(0)
          }>

          <Image style={styles.mianimg} source={require('../assets/images/vila.png')} />
          <Text style={styles.text_in}>VILA</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.main_btn}
          onPress={() =>
            go_to_screen('factory')
            //get_switch_command_main(0)
          }>

          <Image style={styles.mianimg} source={require('../assets/images/factory.png')} />
          <Text style={styles.text_in}>FACTORY</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.main_btn}
          onPress={() =>
            go_to_screen('shop')
            //get_switch_command_main(0)
          }>

          <Image style={styles.mianimg} source={require('../assets/images/shop.png')} />
          <Text style={styles.text_in}>SHOP</Text>
        </TouchableOpacity>
      </View>


      <TouchableOpacity
        style={styles.loginScreenButton}
        onPress={() =>
          save_device()
          //navigation.navigate('HOME')
        }


      >





        <Text style={styles.loginText}>SAVE</Text>
      </TouchableOpacity>



    

      <Picker
        selectedValue={picker_device}
        style={{ height: 150, width: 100, color: "red" }}
        onValueChange={(value) => {
          set_picker(value);
        }}
      >
        {m.map((item, index) => {

          if (Appearance.getColorScheme() == 'dark') {
            return (< Picker.Item color="white" label={item + "(" + index + ")"} value={index} key={index} />);
          } else {
            return (< Picker.Item color="black" label={item + "(" + index + ")"} value={index} key={index} />);
          }

        })}

      </Picker>
      { m.length > 0 &&
        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() =>
            load_device()

          }


        >

          <Text style={styles.loginText}>LOAD</Text>

        </TouchableOpacity>
      }

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
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
  main_btn: {
    margin: 5,
  },
  mianimg: {
    justifyContent: 'center',
    width: 50, height: 50
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },

  text_in:{
    
    textAlign:"center",
    fontSize:9
  },

  btn: {
    backgroundColor: '#2bb9ec',
  },

  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom:20
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  input_dark: {
    color: '#fff',
    width: '80%',
    height: 44,
    padding: 10,
    borderWidth: 2,
    borderColor: '#2bb9ec',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 44,
    padding: 10,
    borderWidth: 2,
    borderColor: '#2bb9ec',
    marginBottom: 10,
  },


});

