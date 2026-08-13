import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import avis_instance from "../components/AVIS";
import { useState } from 'react';
import SegmentedControl from '@react-native-community/segmented-control';
import { RootStackParamList } from '../types';
import { AsyncStorage, Image } from 'react-native';
import Constants from 'expo-constants';

export default function NotFoundScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {

  const [main_device, setMain_dev] = useState('');
  const [R1, setR1] = useState(0);
  const [R2, setR2] = useState(0);
  const [R3, setR3] = useState(0);
  const [R4, setR4] = useState(0);
  const [R5, setR5] = useState(0);
  const [R6, setR6] = useState(0);


  const [B1, setB1] = useState(11);
  const [B2, setB2] = useState(11);
  const [B3, setB3] = useState(11);
  const [out_1, set_out1] = useState('');
  const [out_2, set_out2] = useState('');
  const [out_3, set_out3] = useState('');
  const [out_4, set_out4] = useState('');
  const [out_5, set_out5] = useState('');
  const [out_6, set_out6] = useState('');


  const [main_btn_1, set_main_btn_1] = useState('');
  const [main_btn_2, set_main_btn_2] = useState('');
  const [main_btn_3, set_main_btn_3] = useState('');

  const [mm_model, set_model_name_] = useState('');

  const [main_icon, set_icon] = useState('');
  const [main_name, set_name] = useState('');

//console.log("himozz"+mm_model);





  avis_instance.load_data('main_device').then((ret_val: string) => {
    setMain_dev(ret_val);
    //console.log("hiii>>> "+ret_val);

  })


  


  React.useEffect(() => {
    async function fetchData() {
      avis_instance.load_data(mm_model+"_"+main_device + '_icon').then((ret_val: string) => {
       
        //console.log("icon"+ret_val);
        set_icon(ret_val);
      })
    }
    fetchData();
  }, [main_device]); // Or [] if effect doesn't need props or state


  React.useEffect(() => {
    async function fetchData() {
      avis_instance.load_data(mm_model+"_"+main_device + '_device_name').then((ret_val: string) => {
       
        //console.log("icon"+ret_val);
        set_name(ret_val);
      })
    }
    fetchData();
  }, [main_device]); // Or [] if effect doesn't need props or state



  React.useEffect(() => {
    async function fetchData() {
      console.log("load:" + main_device + 'out_1');
      avis_instance.load_data(main_device + 'out_1').then((ret_val: string) => {
        if (!ret_val)
          ret_val = 'Output 1';
        console.log(">>> " + ret_val);
        set_out1(ret_val);
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
      avis_instance.load_data(main_device + 'out_2').then((ret_val: string) => {
        if (!ret_val)
          ret_val = 'Output 5(A)';
        set_out5(ret_val);
      })
    }
    fetchData();
  }, [main_device]); // Or [] if effect doesn't need props or state

  React.useEffect(() => {
    async function fetchData() {
      avis_instance.load_data(main_device + 'out_2').then((ret_val: string) => {
        if (!ret_val)
          ret_val = 'Output 6(D)';
        set_out6(ret_val);
      })
    }
    fetchData();
  }, [main_device]); // Or [] if effect doesn't need props or state

  avis_instance.load_data(main_device + 'B1').then((ret_val: number) => {
    if (!ret_val)
      ret_val = 11;
    setB1(ret_val);
  })
  avis_instance.load_data(main_device + 'B2').then((ret_val: number) => {
    if (!ret_val)
      ret_val = 11;
    setB2(ret_val);
  })
  avis_instance.load_data(main_device + 'B3').then((ret_val: number) => {
    if (!ret_val)
      ret_val = 11;
    setB3(ret_val);
  })

  avis_instance.load_data(main_device + '_R1').then((ret_val: React.SetStateAction<number>) => {
    if (!ret_val)
      ret_val = 0;

    setR1(ret_val);
  })
  avis_instance.load_data(main_device + '_R2').then((ret_val: React.SetStateAction<number>) => {
    if (!ret_val)
      ret_val = 0;

    setR2(ret_val);
  })

  avis_instance.load_data(main_device + '_R3').then((ret_val: React.SetStateAction<number>) => {
    if (!ret_val)
      ret_val = 0;

    setR3(ret_val);
  })


  avis_instance.load_data(main_device + '_R4').then((ret_val: React.SetStateAction<number>) => {
    if (!ret_val)
      ret_val = 0;

    setR4(ret_val);
  })
  avis_instance.load_data(main_device + '_R5').then((ret_val: React.SetStateAction<number>) => {
    if (!ret_val)
      ret_val = 0;

    setR5(ret_val);
  })
  avis_instance.load_data(main_device + '_R6').then((ret_val: React.SetStateAction<number>) => {
    if (!ret_val)
      ret_val = 0;

    setR6(ret_val);
  })



  function load_model_name() {

    avis_instance.load_data('main_model').then((ret_val) => {

      console.log("model:::" + ret_val);

      set_model_name_(ret_val);

    });

  }

  load_model_name();

  //const main_device = await AsyncStorage.getItem('main_device');





  function get_switch_command(rele: number) {
    switch (rele) {
      case 0:
        return "--passNF";
      case 1:
        return "--passOFF";
      case 2:
        return "--passON";
    }
  }






  function load_device() {
    console.log("***");
    //avis_instance.save_data('main_device',device_name);
    //navigation.navigate('HOME');
  }

  function update_status() {
    console.log(main_device + "img");
    avis_instance.send_sms('CR');
    console.log("CR");
    //avis_instance.save_data('main_device',device_name);
    //navigation.navigate('HOME');
  }

  function btn_1() {

    var current_b1, current_other;
    if (B1 == 2) {
      setB1(11);
      console.log("bbbbb22");
      current_b1 = 11;
    } else {
      console.log("bbbbb11");

      current_b1 = 2;
      current_other = 11;
      setB1(2);
      setB2(11);
      setB3(11);
    }
    avis_instance.save_data(main_device + "B1", current_b1);
    avis_instance.save_data(main_device + "B2", current_other);
    avis_instance.save_data(main_device + "B3", current_other);
    avis_instance.send_sms("AR")
  }
  function btn_2() {

    var current_b1, current_other;
    if (B2 == 2) {
      setB2(11);
      current_b1 = 11;
    } else {
      current_b1 = 2;
      current_other = 11;
      setB2(2);
      setB1(11);
      setB3(11);
    }
    avis_instance.save_data(main_device + "B2", current_b1);
    avis_instance.save_data(main_device + "B1", current_other);
    avis_instance.save_data(main_device + "B3", current_other);
    avis_instance.send_sms("DI")
  }
  function btn_3() {

    var current_b1, current_other;
    if (B3 == 2) {
      setB3(11);
      current_b1 = 11;
    } else {
      current_b1 = 2;
      setB3(2);
      current_other = 11;
      setB2(2);
      setB1(11);
    }
    avis_instance.save_data(main_device + "B1", current_other);
    avis_instance.save_data(main_device + "B2", current_other);
    avis_instance.save_data(main_device + "B3", current_b1);
    avis_instance.send_sms("HA")
  }

  return (



    <View style={styles.container}>


      <ScrollView>





      <View style={{

width: '100%',
marginTop: 20,
justifyContent: 'center',
flexDirection: "row",
flexWrap: "wrap",
}}>

{main_icon=="home" &&
  <View>
  <Image style={styles.mianimg_icon} source={require('../assets/images/home.png')} />
  <Text style={styles.text_in}>{main_name}  : HOME</Text>
  </View>
}

{main_icon=="office" &&
  <View>
  <Image style={styles.mianimg_icon} source={require('../assets/images/office.png')} />
  <Text style={styles.text_in}>{main_name}  : OFFICE</Text>
  </View>
}

{main_icon=="vila" &&
  <View>
  <Image style={styles.mianimg_icon} source={require('../assets/images/vila.png')} />
  <Text style={styles.text_in}>{main_name}  : VILA</Text>
  </View>
}

{main_icon=="factory" &&
  <View>
  <Image style={styles.mianimg_icon} source={require('../assets/images/factory.png')} />
  <Text style={styles.text_in}> {main_name}  : FACTORY </Text>
  </View>
}


{main_icon=="shop" &&
  <View>
  <Image style={styles.mianimg_icon} source={require('../assets/images/shop.png')} />
  <Text style={styles.text_in}>{main_name}  : SHOP</Text>
  </View>
}





        <View style={{

          width: '100%',
          height: 130,
          justifyContent: 'center',
          flexDirection: "row",
          flexWrap: "wrap",
        }}>








          <TouchableOpacity
            style={styles.main_btn}
            onPress={() =>
              btn_1()
              //get_switch_command_main(0)
            }>
            {B1 == 11 &&
              <Image style={styles.mianimg} source={require('../assets/icons/arm.png')} />
            }
            {B1 == 2 &&
              <Image style={styles.mianimg} source={require('../assets/icons/arm1.png')} />
            }
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.main_btn}
            onPress={() =>
              btn_2()
            }>
            {B2 == 11 &&
              <Image style={styles.mianimg} source={require('../assets/icons/disarm1.png')} />
            }
            {B2 == 2 &&
              <Image style={styles.mianimg} source={require('../assets/icons/disarm2.png')} />
            }

          </TouchableOpacity>
          {mm_model != "GL150" &&
            <TouchableOpacity
              style={styles.main_btn}
              onPress={() =>
                btn_3()
              }>
              {B3 == 11 &&
                <Image style={styles.mianimg} source={require('../assets/icons/halfarm1.png')} />
              }

              {B3 == 2 &&
                <Image style={styles.mianimg} source={require('../assets/icons/halfarm2.png')} />
              }

            </TouchableOpacity>
          }
        </View>
        <View style={styles.segment__}>
          <Text style={styles.title} >{out_1}</Text>
          <SegmentedControl
            values={['Interval', 'Deactive', 'Active']}
            selectedIndex={R1}
            tintColor={'white'}
            style={styles.single_segment}
            backgroundColor={'#2bb9ec'}

            activeFontStyle={{ 'color': "#000" }}

            fontStyle={{ 'color': "#fff" }}
            onChange={(event) => {

              console.log("main_dv is" + main_device);
              avis_instance.send_sms("R1" + get_switch_command(event.nativeEvent.selectedSegmentIndex), true);
              avis_instance.save_data(main_device + '_R1', event.nativeEvent.selectedSegmentIndex);
              setR1(event.nativeEvent.selectedSegmentIndex);
              set_main_btn_1("333");
              console.log("~~~~main_dv is~~~~~" + main_btn_1);

            }}
          />
          <Text style={styles.title}>{out_2}</Text>
          <SegmentedControl
            values={['Interval', 'Deactive', 'Active']}
            selectedIndex={R2}
            tintColor={'white'}
            backgroundColor={'#2bb9ec'}
            activeFontStyle={{ 'color': "#000" }}

            fontStyle={{ 'color': "#fff" }}
            onChange={(event) => {

              console.log("main_dv is" + main_device);
              avis_instance.send_sms("R2" + get_switch_command(event.nativeEvent.selectedSegmentIndex), true);
              avis_instance.save_data(main_device + '_R2', event.nativeEvent.selectedSegmentIndex);
              setR2(event.nativeEvent.selectedSegmentIndex);

            }}
          />
           { ( mm_model == 'GL150'  ||  mm_model == 'A770'  ||   mm_model == 'A670' ||   mm_model == 'KP2015GS1' ) && 
          <Text style={styles.title}>{out_3}</Text>
}
{ ( mm_model == 'GL150'  ||  mm_model == 'A770' ||   mm_model == 'A670' ||   mm_model == 'KP2015GS1' ) && 
          <SegmentedControl
            values={['Interval', 'Deactive', 'Active']}
            selectedIndex={R3}
            tintColor={'white'}
            backgroundColor={'#2bb9ec'}
            activeFontStyle={{ 'color': "#000" }}

            fontStyle={{ 'color': "#fff" }}
            onChange={(event) => {

              console.log("main_dv is" + main_device);
              avis_instance.send_sms("R3" + get_switch_command(event.nativeEvent.selectedSegmentIndex), true);
              avis_instance.save_data(main_device + '_R3', event.nativeEvent.selectedSegmentIndex);
              setR4(event.nativeEvent.selectedSegmentIndex);

            }}
          />
} 
          { ( mm_model == 'GL150'  ||  mm_model == 'A770' ||   mm_model == 'A670' ) && 
          <Text style={styles.title}>{out_4}</Text>

}
{ ( mm_model == 'GL150'  ||  mm_model == 'A770' ||   mm_model == 'A670' ) && 
          <SegmentedControl
            values={['Interval', 'Deactive', 'Active']}
            selectedIndex={R4}
            tintColor={'white'}
            backgroundColor={'#2bb9ec'}
            activeFontStyle={{ 'color': "#000" }}

            fontStyle={{ 'color': "#fff" }}
            onChange={(event) => {

              console.log("main_dv is" + main_device);
              avis_instance.send_sms("R4" + get_switch_command(event.nativeEvent.selectedSegmentIndex), true);
              avis_instance.save_data(main_device + '_R4', event.nativeEvent.selectedSegmentIndex);
              setR4(event.nativeEvent.selectedSegmentIndex);

            }}
          />
}
          
         { mm_model == "GL150" &&
            <Text style={styles.title}>{out_5}</Text>
          }

          {mm_model == "GL150" &&
            <SegmentedControl
              values={['Interval', 'Deactive', 'Active']}
              selectedIndex={R4}
              tintColor={'white'}
              backgroundColor={'#2bb9ec'}
              activeFontStyle={{ 'color': "#000" }}

              fontStyle={{ 'color': "#fff" }}
              onChange={(event) => {

                console.log("main_dv is" + main_device);
                avis_instance.send_sms("R5" + get_switch_command(event.nativeEvent.selectedSegmentIndex), true);
                avis_instance.save_data(main_device + '_R5', event.nativeEvent.selectedSegmentIndex);
                setR5(event.nativeEvent.selectedSegmentIndex);

              }}
            />
          } 

{ mm_model == "GL150" &&
           <Text style={styles.title}>{out_6}</Text>
}
           
         
          {mm_model == "GL150" &&
            <SegmentedControl
              values={['Interval', 'Deactive', 'Active']}
              selectedIndex={R4}
              tintColor={'white'}
              backgroundColor={'#2bb9ec'}
              activeFontStyle={{ 'color': "#000" }}

              fontStyle={{ 'color': "#fff" }}
              onChange={(event) => {

                console.log("main_dv is" + main_device);
                avis_instance.send_sms("R6" + get_switch_command(event.nativeEvent.selectedSegmentIndex), true);
                avis_instance.save_data(main_device + '_R6', event.nativeEvent.selectedSegmentIndex);
                setR6(event.nativeEvent.selectedSegmentIndex);

              }}
            />
          }
          <TouchableOpacity
            style={styles.loginScreenButton}
            onPress={() =>
              update_status()
              //navigation.navigate('HOME')
            }


          >
            <Text style={styles.loginText}>Update Status</Text>
          </TouchableOpacity>
          <Text style={styles.ver} >  Ver : {Constants.manifest.version} ({Constants.manifest.ios.buildNumber})</Text>



</View>
</View>
      </ScrollView>



    </View>


  );
}



const styles = StyleSheet.create({
  mianimg_icon: {
    justifyContent: 'center',
    width: 90, height: 90
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
  ver: {
    fontSize: 10,
    marginTop: 10,
    justifyContent: 'center',
    textAlign: "center",

  },
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
    marginBottom: 5,
    marginTop: 5,
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