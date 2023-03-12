/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { FC, useState, useEffect } from 'react';
import { Alert, Image, Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { styles } from '../StyleSheet/SignInStyling';
import Feather from 'react-native-vector-icons/Feather';

const SESSION_KEY = 'session_key';
const SIGNUP_KEY = 'signup_key';

const SignIn: FC = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const validEmail = (email) => {
        // Regular expression to check if email is in correct format
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };
    // const { setUser } = useContext(AuthContext);
    // setUser(email);
    // setUser(password);

    // useEffect(() => {
    //     const getUserInfo = async () => {
    //         try {
    //             const email = await AsyncStorage.getItem('email');
    //             const password = await AsyncStorage.getItem('password');
    //             setEmail(email);
    //             setPassword(password);
    //         } catch (error) {
    //             console.log('Error getting user info:', error);
    //         }
    //     };
    //     getUserInfo();
    // }, []);

    const handleSignIn = async () => {
        const signupData = await AsyncStorage.getItem(SIGNUP_KEY);
        const userData = JSON.parse(signupData);
        if (!email || !password) {
            return Alert.alert('Error', 'Email or Password cannot be empty!');
        }
        if (!validEmail(email)) {
            Alert.alert('Error', 'Please enter a valid email address!');
        }
        try {
            const storedEmail = await AsyncStorage.getItem('email');
            const storedPassword = await AsyncStorage.getItem('password');
            if (email === storedEmail && password === storedPassword) {
                console.log('User sign in successful');
                await AsyncStorage.setItem(SESSION_KEY, JSON.stringify(true));
                navigation.navigate('Disease Category');
            } else {
                console.log('Incorrect email or password');
                Alert.alert('Error', 'Wrong Email or Password!');
            }
        } catch (error) {
            console.log('Error signing in:', error);
        }
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.container}>
                <View style={styles.imgSetting}>
                    <Image style={styles.img} source={require('../assets/WeHAP-1.png')} />
                </View>
                <View style={styles.SignInSetting}>
                    <Text style={styles.signinTxt}>Sign In</Text>
                    <View style={styles.emailSetting}>
                        <Text style={styles.emailTxt}>Email Address</Text>
                        <TextInput style={styles.emailInput} value={email} onChangeText={text => setEmail(text)} placeholder="e.g: abc@gmail.com" placeholderTextColor={'#000'} />
                    </View>
                    <View style={styles.passwordSetting}>
                        <Text style={styles.passwordTxt}>Password</Text>
                        <TextInput style={styles.passwordInput} value={password} onChangeText={text => setPassword(text)} placeholder="e.g: vf@kHY" placeholderTextColor={'#000'} secureTextEntry={!showPassword} />
                        <View style={styles.eyeBtnSetting}>
                            <Pressable onPress={togglePasswordVisibility}>
                                <Feather name={showPassword ? 'eye-off' : 'eye'} size={24} color={showPassword ? '#9038a5' : '#a1a1a1'} />
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.fpSetting}>
                        <Pressable onPress={() => navigation.navigate('Forgot Password')}>
                            <Text style={styles.fpTxt}>Forgot Password?</Text>
                        </Pressable>
                    </View>
                    <View style={{ top: 135 }}>
                        <Pressable style={styles.signinBtnSetting} onPress={handleSignIn}>
                            <Text style={styles.signBtnTxt}>Sign In</Text>
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

export default SignIn;