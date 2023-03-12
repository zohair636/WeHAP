/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable space-infix-ops */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import SignUp from './Screens/SignUp';
import SignIn from './Screens/SignIn';
import DiseaseCategory from './Screens/DiseaseCategory';
import HumanDiseaseList from './Screens/HumanDiseaseList';
import AnimalDiseaseList from './Screens/AnimalDiseaseList';
import PlantDiseaseList from './Screens/PlantDiseaseList';
import SelectDisease from './Screens/SelectDisease';
import ForgotPassword from './Screens/ForgotPassword';
import MyReport from './Screens/MyReport';
import MyAccount from './Screens/MyAccount';
import Icons from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomHeaderBackButton = ({ onPress }) => (
  <View style={{
    justifyContent: 'center',
    alignItems: 'center',
    top: 15,
    paddingHorizontal: 30,
  }}>
    <Pressable onPress={onPress}>
      <Icons name={'arrowleft'} size={30} color={'#fff'} />
    </Pressable>
  </View>
);

const App: FC = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const BottomNav = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            position: 'absolute',
            height: '9%',
            backgroundColor: '#ffff',
            shadowColor: '#000',
            shadowOffset: {
              width: 2,
              height: 2,
            },
            shadowOpacity: 0.5,
            shadowRadius: 3.5,
            elevation: 5,
            borderTopWidth: 0,
            top: '90%',
            width: '90%',
            left: '4.5%',
            borderRadius: 10,
          },
          tabBarActiveTintColor: '#9038A5',
          tabBarInactiveTintColor: '#B9BDC5',
          tabBarLabelStyle: {
            fontSize: 11,
            position: 'absolute',
            padding: 3,
            top: 43,
          },
          tabBarIconStyle: {
            top: '-16%',
          },
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
              size = focused ? 25 : 23;
              color = focused ? '#9038A5' : '#B9BDC5';
            }
            else if (route.name === 'My Report') {
              iconName = 'clipboard-list';
              size = focused ? 25 : 23;
              color = focused ? '#9038A5' : '#B9BDC5';
            }
            else if (route.name === 'My Account') {
              iconName = 'user-circle';
              size = focused ? 25 : 23;
              color = focused ? '#9038A5' : '#B9BDC5';
            }
            return (
              <FontAwesome5 name={iconName} size={size} color={color} />
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={DiseaseCategory} options={{ headerShown: false }} />
        <Tab.Screen name="My Report" component={MyReport} options={{ headerShown: false }} />
        <Tab.Screen name="My Account" component={MyAccount} />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Sign Up" component={SignUp} options={{ headerTransparent: true, headerTitle: () => null }} />
        <Stack.Screen name="Sign In" component={SignIn} options={{ headerTransparent: true, headerTitle: () => null }} />
        <Stack.Screen name="Disease Category" component={BottomNav} options={{ headerShown: false }} />
        <Stack.Screen name="Human Disease List" component={HumanDiseaseList} options={{ headerTransparent: true, headerTitle: () => null, headerTintColor: '#fff', headerLeft: ({ onPress }) => (<CustomHeaderBackButton onPress={onPress} />) }} />
        <Stack.Screen name="Animal Disease List" component={AnimalDiseaseList} options={{ headerTransparent: true, headerTitle: () => null, headerTintColor: '#fff', headerLeft: ({ onPress }) => (<CustomHeaderBackButton onPress={onPress} />) }} />
        <Stack.Screen name="Plant Disease List" component={PlantDiseaseList} options={{ headerTransparent: true, headerTitle: () => null, headerTintColor: '#fff', headerLeft: ({ onPress }) => (<CustomHeaderBackButton onPress={onPress} />) }} />
        <Stack.Screen name="Selected Disease" component={SelectDisease} options={{ headerTransparent: true, headerTitle: () => null, headerTintColor: '#fff', headerLeft: ({ onPress }) => (<CustomHeaderBackButton onPress={onPress} />) }} />
        <Stack.Screen name="Forgot Password" component={ForgotPassword} options={{ headerTransparent: true, headerTitle: () => null }} z />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
