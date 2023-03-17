import React from 'react';
import type {Node} from 'react';
import {
  Text,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from "@react-navigation/native";
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/homescreen/HomeScreen';
import TransactionScreen from './screens/transactionscreen/TransactionScreen';
import AddBudgetScreen from './screens/addbudgetscreen/AddBudgetScreen';
import ReportScreen from './screens/reportscreen/ReportScreen';
import UserScreen from './screens/userscreen/UserScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const Tab=createBottomTabNavigator();
  return (
   <NavigationContainer >
    <Tab.Navigator  screenOptions={({route}) => ({
      tabBarIcon: ({focused,size,colour,text}) =>{
        let iconName;
        if(route.name==='Trang chủ'){
          iconName= 'home' ;
          size=focused ? size+8 : size+3;
          colour=focused ? '#283618' :'#767676';
        }else if(route.name==='Giao dịch'){
          iconName= 'wallet';
          size=focused ? size+8 : size+3;
          colour=focused ? '#283618' :'#767676';
        }else if(route.name===' '){
          iconName= 'add-circle' ;
          size= size+30 ;
          colour='#1FA97C';
        }else if(route.name==='Báo cáo'){
          iconName= 'stats-chart' ;
          size=focused ? size+8 : size+3;
          colour=focused ? '#283618' :'#767676';
        }else if(route.name==='Người dùng'){
         iconName= 'person-circle';
          size=focused ? size+9 : size+5;
          colour=focused ? '#283618' :'#767676';
        }
        return <View>
            <Ionicons   name={iconName} size={size} color={colour}/>
            
          </View>;
      },
      
    
    tabBarStyle:{
      position:'absolute',
      bottom:15,
      left:10,
      right:10,
      elevation:0,
      backgroundColor:'#ffffff',
      borderRadius:15, 
      height:60,
    },
    tabBarShowLabel:false,
    
    })}
    >
        <Tab.Screen  name='Trang chủ' component={HomeScreen}></Tab.Screen>
        <Tab.Screen  name='Giao dịch' component={TransactionScreen}></Tab.Screen>
        <Tab.Screen  name=' ' component={AddBudgetScreen}></Tab.Screen>
        <Tab.Screen  name='Báo cáo' component={ReportScreen}></Tab.Screen>
        <Tab.Screen  name='Người dùng' component={UserScreen}></Tab.Screen>
    </Tab.Navigator>
   </NavigationContainer>
  );
};

export default App;
