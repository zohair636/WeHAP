/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { FC, useState, useEffect } from 'react';
import { Alert, Image, Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { styles } from '../StyleSheet/ForgotPasswordStyling';
import Feather from 'react-native-vector-icons/Feather';

const ForgotPassword: FC = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    // useEffect(() => {
    //     const getUserInfo = async () => {
    //         try {
    //             const email = await AsyncStorage.getItem('Email');
    //             const password = await AsyncStorage.getItem('Password');
    //             setEmail(email);
    //             setPassword(password);
    //         } catch (error) {
    //             console.log('Error getting user info:', error);
    //         }
    //     };
    //     getUserInfo();
    // }, []);

    const updatePassword = async () => {
        if (!email || !password) {
            return Alert.alert('Error', 'Text Input cannot be empty!');
        }
        try {
            const storedEmail = await AsyncStorage.getItem('email');
            if (storedEmail !== email) {
                Alert.alert('Error', 'The entered email is not registered.');
                return;
            }
            // update saved user information in AsyncStorage
            await AsyncStorage.setItem('password', password);
            Alert.alert('Success', 'Account information updated!');
            navigation.navigate('Sign In');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.container}>
                <View style={styles.imgSetting}>
                    <Image style={styles.img} source={require('../assets/WeHAP-1.png')} />
                </View>
                <View style={styles.SignInSetting}>
                    <Text style={styles.signinTxt}>Forgot Password</Text>
                    <View style={styles.emailSetting}>
                        <Text style={styles.emailTxt}>Email Address</Text>
                        <TextInput style={styles.emailInput} value={email} onChangeText={text => setEmail(text)} placeholder="Enter your registered Email Address" placeholderTextColor={'#000'} />
                    </View>
                    <View style={styles.passwordSetting}>
                        <Text style={styles.passwordTxt}>New Password</Text>
                        <TextInput style={styles.passwordInput} value={password} onChangeText={text => setPassword(text)} placeholder="e.g: vf@kHY" placeholderTextColor={'#000'} secureTextEntry={!showPassword} />
                        <View style={styles.eyeBtnSetting}>
                            <Pressable onPress={togglePasswordVisibility}>
                                <Feather name={showPassword ? 'eye-off' : 'eye'} size={24} color={showPassword ? '#9038a5' : '#a1a1a1'} />
                            </Pressable>
                        </View>
                    </View>
                    <View style={{ top: 135 }}>
                        <Pressable style={styles.signinBtnSetting} onPress={updatePassword}>
                            <Text style={styles.signBtnTxt}>Proceed</Text>
                        </Pressable>
                    </View>
                    <View style={styles.newUserSetting}>
                        <Text style={styles.newUserTxt}>I'm a new user. </Text>
                        <Pressable onPress={() => navigation.navigate('Sign Up')}>
                            <Text style={styles.signUpTxt}>Sign Up</Text>
                        </Pressable>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default ForgotPassword;