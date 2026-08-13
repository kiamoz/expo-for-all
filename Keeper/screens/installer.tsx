import * as React from 'react';
import { StyleSheet, Button, TextInput, TouchableOpacity, Image, AsyncStorage, Switch,ScrollView } from 'react-native';
import { useState } from 'react';
import avis_instance from "../components/AVIS";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, } from '../components/Themed';
import { Picker } from '@react-native-picker/picker';
import SegmentedControl from '@react-native-community/segmented-control';
import { RadioGroup, RadioButton } from 'react-native-radio-btn';




export default function TabOneScreen({
  navigation,
}) {
  //const { navigate } = this.props.navigation;

  const [name, set_name] = useState('');
  const [company, set_company] = useState('');
  const [mob1, set_mob1] = useState('');
  const [mob2, set_mob2] = useState('');
  const [address, set_address] = useState('');
  const [note, set_note] = useState('');
  const [main_device, setMain_dev] = useState('');
  const [model_name, set_model_name_] = useState('');
  
 







  React.useEffect(() => {
    async function fetchData() {
      avis_instance.load_data('main_device').then((ret_val: string) => {
        setMain_dev(ret_val);
        console.log("hiii>>> "+ret_val);
    
      })
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state

  function load_model_name() {

    avis_instance.load_data('main_model').then((ret_val) => {

      console.log("model:::" + ret_val);

      set_model_name_(ret_val);

    });

  }

  load_model_name();


  React.useEffect(() => {
    async function fetchData() {
      avis_instance.load_data(model_name+"_"+main_device+ '_' + 'name').then((ret_val: string) => {
        set_name(ret_val);
        
    
      })
    }
    fetchData();
  }, [main_device]); 
  React.useEffect(() => {
    async function fetchData() {
      avis_instance.load_data(model_name+"_"+main_device+ '_' + 'company').then((ret_val: string) => {
        set_company(ret_val);
      ;
    
      })
    }
    fetchData();
  }, [main_device]); 
  React.useEffect(() => {
    async function fetchData() {
      avis_instance.load_data(model_name+"_"+main_device+ '_' + 'mob1').then((ret_val: string) => {
        set_mob1(ret_val);
        
    
      })
    }
    fetchData();
  }, [main_device]); 
  React.useEffect(() => {
    async function fetchData() {
      avis_instance.load_data(model_name+"_"+main_device+ '_' + 'mob2').then((ret_val: string) => {
        set_mob2(ret_val);
        
    
      })
    }
    fetchData();
  }, [main_device]); 
  React.useEffect(() => {
    async function fetchData() {
      avis_instance.load_data(model_name+"_"+main_device+ '_' + 'address').then((ret_val: string) => {
        set_address(ret_val);
        
    
      })
    }
    fetchData();
  }, [main_device]); 
  React.useEffect(() => {
    async function fetchData() {
      avis_instance.load_data(model_name+"_"+main_device+ '_' + 'note').then((ret_val: string) => {
        set_note(ret_val);
        
    
      })
    }
    fetchData();
  }, [main_device]); 






  function save_() {


    console.log('save name ::'+model_name+"_"+main_device + '_' + 'name'+"/"+name);
    
    //avis_instance.send_sms("20--pass"+new_pass,true);
    avis_instance.save_data(model_name+"_"+main_device + '_' + 'name', name);
    avis_instance.save_data(model_name+"_"+main_device + '_' + 'company', company);
    avis_instance.save_data(model_name+"_"+main_device + '_' + 'mob1', mob1);
    avis_instance.save_data(model_name+"_"+main_device + '_' + 'mob2', mob2);
    avis_instance.save_data(model_name+"_"+main_device + '_' + 'address', address);
    avis_instance.save_data(model_name+"_"+main_device + '_' + 'note', note);



  }

 




  


  
  return (
    <View style={styles.container}>

      
<ScrollView>




      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={{

        width: '100%',

        justifyContent: 'center',
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#FFF",
      }}>

        


        
<TextInput
          
          onChangeText={(username) => set_name(username)}
          placeholder={'Name'}
          placeholderTextColor="#999" 
          value={name}
          //secureTextEntry={true}
          style={styles.input}
        />

<TextInput
          
          onChangeText={(username) => setNewPass(username)}
          placeholder={'Company'}
          value={company}
          placeholderTextColor="#999" 
          //secureTextEntry={true}
          style={styles.input}
        />

<TextInput
          
          onChangeText={(username) => setNewPass(username)}
          placeholder={'Mobile 1'}
          placeholderTextColor="#999" 
          value={mob1}
          //secureTextEntry={true}
          style={styles.input}
        />


<TextInput
          
          onChangeText={(username) => setNewPass(username)}
          placeholder={'Mobile 2'}
          value={mob2}
          placeholderTextColor="#999" 
          //secureTextEntry={true}
          style={styles.input}
        />

<TextInput
          
          onChangeText={(username) => setNewPass(username)}
          placeholder={'Address'}
          value={address}
          multiline={true}
          
          numberOfLines={4}
          placeholderTextColor="#999" 
          //secureTextEntry={true}
          style={styles.text_ar}
        />


<TextInput
          
          onChangeText={(username) => setNewPass(username)}
          placeholder={'Note'}
          value={note}
          multiline={true}
          numberOfLines={4}
          placeholderTextColor="#999" 
          //secureTextEntry={true}
          style={styles.text_ar}
        />



        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() =>
            save_()
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


   container2: {
    flex: 2,
    justifyContent: 'center',
    
    backgroundColor: '#fff',
    padding: 8,
    
  },
  headline: {
    marginTop: 20,
  },

  text_ar:{
    width: '100%',
    height: 70,
    padding: 10,
    borderWidth: 2,
    borderColor: '#2bb9ec',
    marginBottom: 10,
  },

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
    marginBottom:20,
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
    width: '100%',
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

