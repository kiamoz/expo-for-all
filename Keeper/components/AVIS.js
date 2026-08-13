import { AsyncStorage } from 'react-native';
import * as SMS from 'expo-sms';
import { Appearance } from 'react-native'
class AVIS {



  is_dark(){
    
    if(Appearance.getColorScheme() == 'dark')
    return true;
  }

  async send_sms(body,pass_replace=false) {


    

    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {



      const main_device = await AsyncStorage.getItem('main_device');
      const main_model = await AsyncStorage.getItem('main_model');

  
      const _phone_num = await AsyncStorage.getItem(main_model+"_"+main_device+"_phone_num");
      const _pass = await AsyncStorage.getItem(main_model+"_"+main_device+"_password");
      


      if(pass_replace){
        body = body.replace("--pass", _pass);
        body = "*"+body;
      }else{
        body = "*"+body+_pass;
      }
        
        
        const { result } = await SMS.sendSMSAsync(
          [_phone_num],
          body,
        );

    


      
    } else {



        const main_device = await AsyncStorage.getItem('main_device');
        const _phone_num = await AsyncStorage.getItem(main_device+"_phone_num");
        const _pass = await AsyncStorage.getItem(main_device+"_password");
        

        console.log(_phone_num+"~"+_pass+"~~~");


      //alert("NO SMS");
    }
  }


  


  async save_data(key, value) {

    await AsyncStorage.setItem(key, value.toString());
  }


  load_data_normal(key){
    this.load_data(key).then((ret_val)=>{
      console.log(ret_val);
      return ret_val;
    })
  }

  load_data = async (key) => {
    const MMM = await AsyncStorage.getItem(key);
    return MMM;
  }
  load_data_plus = async (key) => {
    const MMM = await AsyncStorage.getItem(key);
    return [MMM,key];
  }

}

const avis_instance = new AVIS();
export default avis_instance;