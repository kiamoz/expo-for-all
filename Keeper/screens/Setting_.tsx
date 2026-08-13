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

  const [mm_model, set_model_name_] = useState('');
  const [mob1, set_mob1] = useState(0);
  const [mob2, set_mob2] = useState(0);
  const [new_pass, setNewPass] = useState(0);
  const [new_pass2, setNewPass2] = useState(0);
  const [main_device, setMain_dev] = useState('');




  React.useEffect(() => {
    console.log("jjjjjjjj");
    async function fetchData() {
      avis_instance.load_data('main_device').then((ret_val: string) => {
        setMain_dev(ret_val);
        console.log("hiii main device>>> "+ret_val);
    
      })
    }
    fetchData();
  }, [mm_model]); // Or [] if effect doesn't need props or state

  React.useEffect(() => {
    async function fetchData() {
      
      avis_instance.load_data(mm_model+'_'+main_device + '_' + 'phone_num').then((ret_val: string) => {
        set_mob1(ret_val);
        console.log("hiii phone..>>> "+ret_val);
    
      })
    }
    fetchData();
  }, [main_device,mm_model]); // Or [] if effect doesn't need props or state
  React.useEffect(() => {
    async function fetchData() {
      
      avis_instance.load_data(mm_model+'_'+main_device + '_' + 'phone_num2').then((ret_val: string) => {
        set_mob2(ret_val);
        console.log("hiii phone..>>> "+ret_val);
    
      })
    }
    fetchData();
  }, [main_device,mm_model]); // Or [] if effect doesn't need props or state


  





  function save_() {

    
    avis_instance.send_sms("20--pass"+new_pass,true);
    //avis_instance.save_data(main_device + '_' + 'password', new_pass);



  }

  function reset_factory() {

    
    avis_instance.send_sms("88");
    


  }


  function load_model_name() {

    avis_instance.load_data('main_model').then((ret_val) => {

      console.log("model:::" + ret_val);

      set_model_name_(ret_val);

    });

    

  }

  load_model_name();

  function delete_this() {

    
  
    avis_instance.load_data('device_list').then((ret_val) => {



      if (ret_val == null) {
        console.log("null value");
      } else {
        //console.log("vaue");
        //console.log(ret_val);
        var list_ = JSON.parse(ret_val);
        console.log(list_);
        const index = list_.indexOf(main_device);
        console.log(index);
        if (index > -1) {
          list_.splice(index, 1);
        }
        console.log(list_);

        avis_instance.save_data('device_list', JSON.stringify(list_));
        //navigation.state.params.refresh();
        navigation.navigate('Root',{ post: "mozpost" }); //home


      }








    })


  }


  function save_3() {

    
    
    avis_instance.save_data(mm_model+'_'+main_device + '_' + 'phone_num', mob1);
    avis_instance.save_data(mm_model+'_'+main_device + '_' + 'phone_num2', mob2);



  }

  function save_2() {

    
    
    avis_instance.save_data(main_device + '_' + 'password', new_pass2);



  }

  function onSelect(index, value) {
    console.log("Selected index:"+index);
  }


 state = {
    radioItems: [
      {
        id: 1,
        label: 'Active SIM 1',
        selected: true,
      },
      {
        id: 2,
        label: 'Active SIM 2 ',
        selected: false,
      },
      
    ],
  };
  
  return (
    <View style={styles.container}>

      
<ScrollView>


        <TextInput
          
          onChangeText={(username) => set_mob1(username)}
          placeholder={'Number 1'}
          placeholderTextColor="#999" 
          value={mob1}
          //secureTextEntry={true}
          style={styles.input}
        />


{ ( mm_model == '888'  ||  mm_model == 'A770' ) && 
        <TextInput
          
          onChangeText={(username) => set_mob2(username)}
          placeholder={'Number 2'}
          placeholderTextColor="#999" 
          value={mob2}
          //secureTextEntry={true}
          style={styles.input}
        />
}

{ ( mm_model == '888'  ||  mm_model == 'A770' ) && 
      <View style={styles.container2}>
        
        <RadioGroup 
          selectedIndex={1}
          onSelect={(index, value) => onSelect(index, value)}
          >
          {state.radioItems.map((item, index) => {
            return (
              <RadioButton
                key={index}
                value={item.label}
                displayText={item.label}
                displayTextColor="#000"
                displayTextActiveColor="#fff"
                activeColor="#2bb9ec"
                color="#2bb9ec"
                
              />
            );
          })}
        </RadioGroup>
        
        </View>

        }
       
       <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() =>
            save_3()
            //navigation.navigate('HOME')
          }


        >
          <Text style={styles.loginText}>Save Sim Details</Text>
        </TouchableOpacity>


      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={{

        width: '100%',

        justifyContent: 'center',
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#FFF",
      }}>

        


        
<TextInput
          
          onChangeText={(username) => setNewPass(username)}
          placeholder={'New Password'}
          placeholderTextColor="#999" 
          //secureTextEntry={true}
          style={styles.input}
        />


        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() =>
            save_()
            //navigation.navigate('HOME')
          }


        >
          <Text style={styles.loginText}>Change Device Password</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() =>
            reset_factory()
            //navigation.navigate('HOME')
          }


        >
          <Text style={styles.loginText}>Device Reset Factory</Text>
        </TouchableOpacity>


        <TextInput
          
          onChangeText={(username) => setNewPass2(username)}
          placeholder={'Change App saved password'}
          placeholderTextColor="#999" 
          //secureTextEntry={true}
          style={styles.input}
        />
 <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() =>
            save_2()
            //navigation.navigate('HOME')
          }


        >
          <Text style={styles.loginText}>Change App saved Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() =>
            delete_this()
            //navigation.navigate('HOME')
          }


        >
          <Text style={styles.loginText}>Delete Device from App</Text>
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

