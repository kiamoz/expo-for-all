import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import setting from '../screens/setting';
import { RootStackParamList } from '../types';
import BottomTabNavigator0 from './BottomTabNavigator0';
import BottomTabNavigator from './BottomTabNavigator';
import BottomTabNavigator2 from './BottomTabNavigator2';
import LinkingConfiguration from './LinkingConfiguration';
import Charge_Navigator from './Charge_Navigator';
import Antena_Navigator from './Antena_Navigator';
import Secret_Navigator from './Secret_Navigator';
import Lang_Navigator from './Lang_Navigator';
import Contact_Navigator from './Contact_Navigator';
import Output_Navigator from './OutPutNavigator';
import ZoneNavigator from './ZoneNavigator';
import Setting_Navigator from './SettingNavigator';
import SMSNavigator from './SMSNavigator';
import InstalleerNavigator from './InstalleerNavigator';
import input_Navigator from './input_Navigator';
import remove_remote_Navigator from './remove_remote_Navigator';
import Spcek_Navigator from './Spcek_Navigator';
import alarm_Navigator from './alarm_Navigator';


// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
    
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator0}  />
      <Stack.Screen name="HOME" component={BottomTabNavigator2}  />
      <Stack.Screen name="Devices" component={BottomTabNavigator}  />
      <Stack.Screen name="Charge" component={Charge_Navigator}  />
      <Stack.Screen name="antena" component={Antena_Navigator}  />
      <Stack.Screen name="secret" component={Secret_Navigator}  />
      <Stack.Screen name="lang" component={Lang_Navigator}  />
      <Stack.Screen name="contact" component={Contact_Navigator}  />
      <Stack.Screen name="output" component={Output_Navigator}  />
      <Stack.Screen name="zone" component={ZoneNavigator}  />
      <Stack.Screen name="sms" component={SMSNavigator}  />
      <Stack.Screen name="setting_" component={Setting_Navigator}  />


      <Stack.Screen name="inistaller" component={InstalleerNavigator}  />


      <Stack.Screen name="input" component={input_Navigator}  />
      <Stack.Screen name="specker" component={Spcek_Navigator}  />
      <Stack.Screen name="alarm" component={alarm_Navigator}  />
      <Stack.Screen name="remote" component={remove_remote_Navigator}  />
      
      
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
