import * as React from 'react';
import { StyleSheet, Button, TextInput, TouchableOpacity, Image, AsyncStorage, Switch } from 'react-native';
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


  const [zone_1, setZone_1] = useState(false);
  const [zone_2, setZone_2] = useState(false);
  const [zone_3, setZone_3] = useState(false);
  const [zone_4, setZone_4] = useState(false);
  const [zone_5, setZone_5] = useState(false);


  function toggleSwitch(i: any, val: any) {
    eval('setZone_' + i + '(' + val + ')');
  }



  const [main_device, setMain_dev] = useState('');
  var out_2_temp;



  React.useEffect(() => console.log("run every time .. on text changed .."), []);

  React.useEffect(() => {




    async function fetchData() {


      /* try {
          const keys = await AsyncStorage.getAllKeys()
          const items = await AsyncStorage.multiGet(keys)
  
          console.log( items );
      } catch (error) {
          console.log(error, "problemo")
      }*/



      avis_instance.load_data('main_device').then((ret_val: string) => {
        setMain_dev(ret_val);
        //console.log("hiii>>> " + ret_val);

      })
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state

  React.useEffect(() => {
    async function fetchData() {

      for (var j = 1; j <= 5; j++) {
        //console.log(main_device + '>>zone_'+j);
        avis_instance.load_data_plus(main_device + 'zone_'+j).then((ret_val: any) => {
          //console.log(main_device + '>>zone_'+j);
          console.log(ret_val[0]);
          var string__ = String(ret_val[1]);
          var j2 = string__.match(/\d/g);
          //console.log(j2[0]);
          toggleSwitch(j2[0], ret_val[0]);
        })
      }
    }
    fetchData();
  }, [main_device]); // Or [] if effect doesn't need props or state




  function save_out() {

    var comm = "";
    for (var i = 1; i <= 5; i++) {
      var val = 0;
      if(eval('zone_' + i))
        val =1;
      comm+= String(val);
      avis_instance.save_data(main_device + "zone_" + i, eval('zone_' + i));
    }

    //console.log("BZ"+comm);
    avis_instance.send_sms("ZB"+comm);




  }




  return (
    <View style={styles.container}>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={{

        width: '100%',

        justifyContent: 'center',
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#FFF",
      }}>

        <Switch

          onValueChange={(e) => toggleSwitch(1, e)}
          value={zone_1}
        />
        <Text style={styles.title}>Zone 1</Text>

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <Switch

          onValueChange={(e) => toggleSwitch(2, e)}
          value={zone_2}
        />
        <Text style={styles.title}>Zone 2</Text>

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <Switch

          onValueChange={(e) => toggleSwitch(3, e)}
          value={zone_3}
        />
        <Text style={styles.title}>Zone 3</Text>

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Switch

          onValueChange={(e) => toggleSwitch(4, e)}
          value={zone_4}
        />
        <Text style={styles.title}>Zone 4</Text>

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />


        <Switch

          onValueChange={(e) => toggleSwitch(5, e)}
          value={zone_5}
        />
        <Text style={styles.title}>Zone 5</Text>

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />



        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />





        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() =>
            save_out()
            //navigation.navigate('HOME')
          }


        >
          <Text style={styles.loginText}>SAVE</Text>
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
    padding: 20,
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
    color: "#000",
    fontWeight: 'bold',
    marginLeft: 20,
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '100%',
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

