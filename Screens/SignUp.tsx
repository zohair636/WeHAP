/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { FC, useState } from 'react';
import { Alert, Image, Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { styles } from '../StyleSheet/SignUpStyling';
import Feather from 'react-native-vector-icons/Feather';

const SIGNUP_KEY = 'signup_key';

const SignUp: FC = ({ navigation }) => {
    const [fname, setFName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const validEmail = (email) => {
        // Regular expression to check if email is in correct format
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };


    const handleSignUp = async () => {
        const userData = { fname, email, password };
        await AsyncStorage.setItem(SIGNUP_KEY, JSON.stringify(userData));
        if (!fname || !email || !password) {
            return Alert.alert('Error', 'Name, Email & Password cannot be empty!');
        }
        if (!validEmail(email)) {
            return Alert.alert('Error', 'Please enter a valid email address! E.g: abc@gmail.com');
        }
        try {
            await AsyncStorage.setItem('fname', fname);
            await AsyncStorage.setItem('email', email);
            await AsyncStorage.setItem('password', password);
            Alert.alert('Success', 'You Signed Up Successfully!');
            navigation.navigate('Sign In');
        } catch (error) {
            Alert.alert('Error in registering', error);
        }
    };

    // const data = [
    //     { key: 'Full Name', value: '' },
    //     { key: 'Email Address', value: '' },
    //     { key: 'Password', value: '' },
    // ];
    // const [formData, setFormData] = useState(data);

    // const handleInputChange = (value, index) => {
    //     const updatedFormData = [...formData];
    //     updatedFormData[index].value = value;
    //     setFormData(updatedFormData);
    // };

    // const renderItem = ({ item, index }) => (
    //     <View style={styles.inputSetting}>
    //         <Text style={styles.inputTxt}>{item.key}</Text>
    //         <TextInput style={styles.input} value={item.value} onChangeText={(value) => handleInputChange(value, index)} />
    //     </View>
    // );
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.bg}>
                <View style={styles.imgSetting}>
                    <Image style={styles.img} source={require('../assets/WeHAP-1.png')} />
                </View>
                <View style={styles.SignUpSetting}>
                    <Text style={styles.createAccountTxt}>Create Account</Text>
                    {/* <FlatList data={formData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.key}
                /> */}
                    <View style={styles.inputSetting}>
                        <Text style={styles.inputTxt}>Full Name</Text>
                        <TextInput style={styles.input} value={fname} onChangeText={text => setFName(text)} placeholder="e.g: Muhammad Ali" placeholderTextColor={'#000'} />
                    </View>
                    <View style={styles.inputSetting}>
                        <Text style={styles.inputTxt}>Email Address</Text>
                        <TextInput style={styles.input} value={email} onChangeText={text => setEmail(text)} placeholder="e.g: abc@gmail.com" placeholderTextColor={'#000'} />
                    </View>
                    <View style={styles.inputSetting}>
                        <Text style={styles.inputTxt}>Password</Text>
                        <TextInput style={styles.input} value={password} onChangeText={text => setPassword(text)} placeholder="e.g: vf@kHY" placeholderTextColor={'#000'} secureTextEntry={!showPassword} />
                        <View style={styles.eyeBtnSetting}>
                            <Pressable onPress={togglePasswordVisibility}>
                                <Feather name={showPassword ? 'eye-off' : 'eye'} size={24} color={showPassword ? '#9038a5' : '#a1a1a1'} />
                            </Pressable>
                        </View>
                    </View>
                    <View style={{ top: 100 }}>
                        <Pressable style={styles.signUpBtnSetting} onPress={handleSignUp}>
                            <Text style={styles.signupBtnTxt}>Sign Up</Text>
                        </Pressable>
                    </View>
                    <View style={styles.signInSetting}>
                        <Text style={styles.alreadyMemberTxt}>I'm already a member. </Text>
                        <Pressable onPress={() => navigation.navigate('Sign In')}>
                            <Text style={styles.signInTxt}>Sign In</Text>
                        </Pressable>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default SignUp;
