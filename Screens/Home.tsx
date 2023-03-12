/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native';
import { styles } from '../StyleSheet/HomeStyling';

const Home: FC = ({navigation}) => {
    return (
        <SafeAreaView style={styles.bg}>
            <View style={styles.secondBg}>
                <Text style={styles.WeHAPTxt}>Welcome To WeHAP</Text>
                <Image style={styles.WeHApImg} source={require('../assets/WeHAP-2.png')} />
            </View>
            <View style={styles.heading}>
                <Text style={styles.headingTxt}>Best Way To Diagnose The Diseases!</Text>
            </View>
            <View style={styles.btnSetting}>
                <Pressable style={styles.signupBtnSetting} onPress={() => navigation.navigate('Sign Up')}>
                    <Text style={styles.signupTxt}>Sign Up</Text>
                </Pressable>
                <Pressable style={styles.signinBtnSetting} onPress={() => navigation.navigate('Sign In')}>
                    <Text style={styles.signinTxt}>Sign In</Text>
                </Pressable>
            </View>
            <View style={styles.poweredBy}>
                <Text style={styles.powerByTxt}>Powered By WeHAP</Text>
            </View>
        </SafeAreaView>
    );
};

export default Home;