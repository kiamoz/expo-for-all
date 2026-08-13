import * as React from 'react';
import { StyleSheet, Button, TextInput, TouchableOpacity, Image, AsyncStorage,ScrollView } from 'react-native';
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

  const [out_1, set_out1] = useState('');
  const [out_2, set_out2] = useState('');
  const [out_3, set_out3] = useState('');
  const [out_4, set_out4] = useState('');
  const [out_5, set_out5] = useState('');
  const [out_6, set_out6] = useState('');
  const [main_device, setMain_dev] = useState('');
 var out_2_temp;
 


  React.useEffect(() => console.log("run every time .. on text changed ..") , []);

  React.useEffect(() => {

    


    async function fetchData() {


    /*  try {
        const keys = await AsyncStorage.getAllKeys()
        const items = await AsyncStorage.multiGet(keys)

        console.log( items );
    } catch (error) {
        console.log(error, "problemo")
    }*/



      avis_instance.load_data('main_device').then((ret_val: string) => {
        setMain_dev(ret_val);
        console.log("hiii>>> "+ret_val);
    
      })
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state

  React.useEffect(() => {
    async function fetchData() {
      console.log("load:"+main_device + 'out_1');
      avis_instance.load_data(main_device + 'out_1').then((ret_val: string) => {
        if (!ret_val)
          ret_val = 'Output 1';
        console.log(">>> "+ret_val);
        set_out1(ret_val);
      })
    }
    fetchData();
  }, [main_device]); // Or [] if effect doesn't need props or state

  React.useEffect(() => {
    async function fetchData() {
      avis_instance.load_data(main_device + 'out_2').then((ret_val: string) => {
        if (!ret_val)
          ret_val = 'Output 2';
        set_out2(ret_val);
      })
    }
    fetchData();
  }, [main_device]); // Or [] if effect doesn't need props or state

  React.useEffect(() => {
    async function fetchData() {
      avis_instance.load_data(main_device + 'out_3').then((ret_val: string) => {
        if (!ret_val)
          ret_val = 'Output 3';
        set_out3(ret_val);
      })
    }
    fetchData();
  }, [main_device]); // Or [] if effect doesn't need props or state

  React.useEffect(() => {
    async function fetchData() {
      avis_instance.load_data(main_device + 'out_4').then((ret_val: string) => {
        if (!ret_val)
          ret_val = 'Output 4';
        set_out4(ret_val);
      })
    }
    fetchData();
  }, [main_device]); // Or [] if effect doesn't need props or state

  React.useEffect(() => {
    async function fetchData() {
      avis_instance.load_data(main_device + 'out_5').then((ret_val: string) => {
        if (!ret_val)
          ret_val = 'Output 5';
        set_out5(ret_val);
      })
    }
    fetchData();
  }, [main_device]); // Or [] if effect doesn't need props or state

  React.useEffect(() => {
    async function fetchData() {
      avis_instance.load_data(main_device + 'out_6').then((ret_val: string) => {
        if (!ret_val)
          ret_val = 'Output 6';
        set_out6(ret_val);
      })
    }
    fetchData();
  }, [main_device]); // Or [] if effect doesn't need props or state







  function save_out(num: number) {
    //
    
    //console.log(out_2+"~");
    avis_instance.save_data(main_device + "out_" + num,eval('out_' + num));
    //console.log(main_device + "out_" + num+"()"+eval('out_' + num));


    avis_instance.load_data(main_device + 'out_1').then((ret_val: string) => {
      //if (!ret_val)
      //  ret_val = 'Output 1';
      console.log(" load >>> "+ret_val);
      //set_out1(ret_val);
    })
    
  }




  return (
    <View style={styles.container}>

<ScrollView>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={{

        width: '100%',
        height: 200,
        justifyContent: 'center',
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#FFF",
      }}>


        <TextInput
          value={out_1}
          onChangeText={(username) => set_out1(username)}

          //secureTextEntry={true}
          style={styles.input}
        />


        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() =>
            save_out(1)
            //navigation.navigate('HOME')
          }


        >
          <Text style={styles.loginText}>SAVE</Text>
        </TouchableOpacity>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />


        <TextInput
          value={out_2}
          onChangeText={(username) => set_out2(username)}

          //secureTextEntry={true}
          style={styles.input}
        />


        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() =>
            save_out(2)
            //navigation.navigate('HOME')
          }


        >
          <Text style={styles.loginText}>SAVE</Text>
        </TouchableOpacity>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />


        <TextInput
          value={out_3}
          onChangeText={(username) => set_out3(username)}

          //secureTextEntry={true}
          style={styles.input}
        />


        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() =>
            save_out(3)
            //navigation.navigate('HOME')
          }


        >
          <Text style={styles.loginText}>SAVE</Text>
        </TouchableOpacity>

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />


        <TextInput
          value={out_4}
          onChangeText={(username) => set_out4(username)}

          //secureTextEntry={true}
          style={styles.input}
        />


        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() =>
            save_out(4)
            //navigation.navigate('HOME')
          }


        >
          <Text style={styles.loginText}>SAVE</Text>
        </TouchableOpacity>

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />


        <TextInput
          value={out_5}
          onChangeText={(username) => set_out5(username)}

          //secureTextEntry={true}
          style={styles.input}
        />


        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() =>
            save_out(5)
            //navigation.navigate('HOME')
          }


        >
          <Text style={styles.loginText}>SAVE</Text>
        </TouchableOpacity>

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />


        <TextInput
          value={out_6}
          onChangeText={(username) => set_out6(username)}

          //secureTextEntry={true}
          style={styles.input}
        />


        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() =>
            save_out(6)  
            //navigation.navigate('HOME')
          }


        >
          <Text style={styles.loginText}>SAVE</Text>
        </TouchableOpacity>



      </View>








      </ScrollView>


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

