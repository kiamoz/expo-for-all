import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity  ,AsyncStorage} from 'react-native';
import SegmentedControl from '@react-native-community/segmented-control';
import Colors from '../constants/Colors';
import avis_instance from "./AVIS";
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import  { useState } from 'react';



export default  function EditScreenInfo({ path }: { path: string }) {

  const [count, setCount] = useState(0);

  var R1_val = 0;
  //avis_instance.save_data('R1','2');
  R1_val  = avis_instance.load_data_normal('R1');

  avis_instance.load_data('R1').then((ret_val: React.SetStateAction<number>)=>{
      setCount(ret_val);
  })
  //const response = await avis_instance.load_data_normal('R1');
  //console.log( await avis_instance.load_data_normal('R1')+"j")
    console.log('returned filter normal:',R1_val);
    //setCount(R1_val);

    return (
      <View>
        <View style={styles.getStartedContainer}>
          
{show_segment(path,R1_val)}
          <View
            style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
            darkColor="rgba(255,255,255,0.05)"
            lightColor="rgba(0,0,0,0.05)">
            <MonoText>{path}</MonoText>
          </View>
          </View>


          <View>
      <View style={styles.getStartedContainer}>
        

        

        
      </View>
      <View style={styles.segment__}>
      <SegmentedControl
    values={['Interval', 'Deactive','Active']}
    selectedIndex={count}
    tintColor={'white'}
    backgroundColor = {'#0c582a'}
    onChange={(event) => {
      avis_instance.send_sms('09123863215','hi'+event.nativeEvent.selectedSegmentIndex);
      avis_instance.save_data('R1',event.nativeEvent.selectedSegmentIndex.toString());
      setCount(event.nativeEvent.selectedSegmentIndex);
     
      //this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
    }}
  />

  </View>

      
    </View>


          </View>
    );
}



function show_segment(path: string,R1_val: number){

}




const styles = StyleSheet.create({

  segment__:{
    margin:1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
