/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { FC, useState, useEffect } from 'react';
import { Alert, Image, Modal, PermissionsAndroid, Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { styles } from '../StyleSheet/MyAccountStyling';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Feather from 'react-native-vector-icons/Feather';

const SIGNUP_KEY = 'signup_key';
const SESSION_KEY = 'session_key';

const MyAccount: FC = ({ navigation }) => {
    const [fname, setFName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [cameraPhoto, setCameraPhoto] = useState();
    const [imgModal, setImgModal] = useState(false);
    const [generalInfo, setgeneralInfo] = useState(false);
    const [removeAcc, setRemoveAcc] = useState(false);
    const [changeInfo, setChangeInfo] = useState(false);
    const [addMoreInfo, setAddMoreInfo] = useState(false);
    const [sessionExpired, setSessionExpired] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    useEffect(() => {
        const checkSession = async () => {
            const sessionData = await AsyncStorage.getItem(SESSION_KEY);
            const isSessionActive = JSON.parse(sessionData);
            if (!isSessionActive) {
                setSessionExpired(true);
            }
        };
        checkSession();
    }, []);
    const handleLogout = async () => {
        await AsyncStorage.removeItem(SESSION_KEY);
        Alert.alert('Session expired!');
        navigation.navigate('Sign In');
    };

    if (sessionExpired) {
        return (
            <View style={{ backgroundColor: '#000' }}>
                <Pressable onPress={() => navigation.navigate('Sign In')}>
                    <Text style={{ color: '#fff' }}>Your session has expired. Please sign in again.</Text>
                </Pressable>
            </View>
        );
    }

    const ImgModal = () => {
        setImgModal(true);
    };

    const GeneralInfoModal = () => {
        setgeneralInfo(true);
    };

    const RemoveAccModal = () => {
        setRemoveAcc(true);
    };

    const ChangeInfoModal = () => {
        setChangeInfo(true);
    };

    const AddMoreInfoModal = () => {
        setAddMoreInfo(true);
    };

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const fname = await AsyncStorage.getItem('fname');
                setFName(fname);
                const email = await AsyncStorage.getItem('email');
                setEmail(email);
                const password = await AsyncStorage.getItem('password');
                setPassword(password);
            } catch (error) {
                console.log('Error getting user info:', error);
            }
        };
        getUserInfo();
    }, []);

    const handleAddMoreInfo = async () => {
        if (!age || !gender) {
            return Alert.alert('Error', 'Age or Gender cannot be empty!');
        }
        try {
            await AsyncStorage.setItem('age', age);
            await AsyncStorage.setItem('gender', gender);
            Alert.alert('Success', 'Additional Information has been saved!');
        } catch (error) {
            console.log('Additional Data is not saved!', error);
        }
    };

    const handleUpdateAccount = async () => {
        if (!fname || !email || !password) {
            return Alert.alert('Error', 'Text Input cannot be empty!');
        }
        try {
            // update saved user information in AsyncStorage
            await AsyncStorage.setItem('fname', fname);
            await AsyncStorage.setItem('email', email);
            await AsyncStorage.setItem('password', password);
            Alert.alert('Success', 'Account information updated!');
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteAccount = async () => {
        try {
            // delete saved user information from AsyncStorage
            await AsyncStorage.removeItem('fname');
            await AsyncStorage.removeItem('email');
            await AsyncStorage.removeItem('password');
            // navigate back to sign up screen
            navigation.navigate('Sign Up');
        } catch (error) {
            console.log(error);
        }
    };

    let options = {
        saveToPhotos: true,
        mediaType: 'photo',
    };

    const openCamera = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            const result = await launchCamera(options);
            setCameraPhoto(result.assets[0].uri);
        }
    };

    const openGallery = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            const result = await launchImageLibrary(options);
            setCameraPhoto(result.assets[0].uri);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                <View style={styles.avatarSetting}>
                    <View style={styles.avJustify}>
                        {cameraPhoto && <Image source={{ uri: cameraPhoto }} style={styles.avatar} />}
                    </View>
                </View>
                <View style={styles.userNameSetting}>
                    <Text style={styles.userNametxt}>{fname}</Text>
                </View>
                <View>
                    <Modal
                        visible={imgModal}
                        animationType="fade"
                        onRequestClose={
                            () => setImgModal(false)
                        }
                        transparent
                    >
                        <View style={styles.infoModalBgSetting}>
                            <View style={styles.infoModalFrontSetting}>
                                <Text style={styles.infoModalTxt}>Choose Your Avatar</Text>
                                <Text style={styles.infoModalCloseTxt} onPress={openCamera}>Take a Photo</Text>
                                <Text style={styles.infoModalCloseTxt} onPress={openGallery}>Choose From Gallery</Text>
                                <Text style={styles.infoModalCloseTxt} onPress={() => setImgModal(false)}>Close</Text>
                            </View>
                        </View>
                    </Modal>
                </View>
                <View>
                    <View style={styles.avatarBtn}>
                        <Pressable onPress={ImgModal}>
                            <Text style={styles.avatarBtnTxt}>Do you want to upload your photo?</Text>
                        </Pressable>
                    </View>
                    <View style={styles.generalInfoSetting}>
                        <Pressable onPress={GeneralInfoModal}>
                            <Text style={styles.generalInfotxt}>General Information</Text>
                        </Pressable>
                    </View>
                    <View>
                        <Modal
                            visible={generalInfo}
                            animationType="fade"
                            onRequestClose={
                                () => setgeneralInfo(false)
                            }
                            transparent
                        >
                            <View style={styles.infoModalBgSetting}>
                                <View style={styles.infoModalFrontSetting}>
                                    <Text style={styles.infoModalTxt}>This is Your Information</Text>
                                    <Text style={styles.yourInfoTxt}>Name: {fname}</Text>
                                    <Text style={styles.yourInfoTxt}>Email Address: {email}</Text>
                                    <Text style={styles.yourInfoTxt}>Password: {password}</Text>
                                    {age && gender && (
                                        <>
                                            <Text style={styles.yourInfoTxt}>Age: {age}</Text>
                                            <Text style={styles.yourInfoTxt}>Gender: {gender}</Text>
                                        </>
                                    )}
                                    <Text style={styles.infoModalCloseTxt} onPress={() => setgeneralInfo(false)}>Close</Text>
                                </View>
                            </View>
                        </Modal>
                    </View>
                    <View style={styles.addMoreInfoSetting}>
                        <Pressable onPress={AddMoreInfoModal}>
                            <Text style={styles.addMoreInfotxt}>Do you want to add additional Information?</Text>
                        </Pressable>
                    </View>
                    <View>
                        <Modal
                            visible={addMoreInfo}
                            animationType="fade"
                            onRequestClose={
                                () => setAddMoreInfo(false)
                            }
                            transparent
                        >
                            <View style={styles.infoModalBgSetting}>
                                <View style={styles.infoModalFrontSetting}>
                                    <Text style={styles.infoModalTxt}>Add More Information</Text>
                                    <Text style={styles.updateInfoTxt}>Add Age</Text>
                                    <TextInput style={styles.yourInfoTxt} value={age} onChangeText={(value) => setAge(value)} placeholder="Enter Your Age" placeholderTextColor={'#000'} />
                                    <Text style={styles.updateInfoTxt}>Add Gender</Text>
                                    <TextInput style={styles.yourInfoTxt} value={gender} onChangeText={(value) => setGender(value)} placeholder="Enter Your Gender" placeholderTextColor={'#000'} />
                                    <Text style={styles.updateBtnTxt} onPress={handleAddMoreInfo}>Save</Text>
                                    <Text style={styles.infoModalCloseTxt} onPress={() => setAddMoreInfo(false)}>Close</Text>
                                </View>
                            </View>
                        </Modal>
                    </View>
                    <View style={styles.changeInfoSetting}>
                        <Pressable onPress={ChangeInfoModal}>
                            <Text style={styles.changeInfoTxt}>Do you want to change your information?</Text>
                        </Pressable>
                    </View>
                    <View>
                        <Modal
                            visible={changeInfo}
                            animationType="fade"
                            onRequestClose={
                                () => setChangeInfo(false)
                            }
                            transparent
                        >
                            <View style={styles.infoModalBgSetting}>
                                <View style={styles.infoModalFrontSetting}>
                                    <Text style={styles.infoModalTxt}>Update Your Information</Text>
                                    <Text style={styles.updateInfoTxt}>Update Name</Text>
                                    <TextInput style={styles.yourInfoTxt} value={fname} onChangeText={(value) => setFName(value)} />
                                    <Text style={styles.updateInfoTxt}>Update Email Address</Text>
                                    <TextInput style={styles.yourInfoTxt} value={email} onChangeText={(value) => setEmail(value)} />
                                    <Text style={styles.updateInfoTxt}>Update Password</Text>
                                    <TextInput style={styles.yourInfoTxt} value={password} onChangeText={(value) => setPassword(value)} secureTextEntry={!showPassword} />
                                    <View style={styles.eyeBtnSetting}>
                                        <Pressable onPress={togglePasswordVisibility}>
                                            <Feather name={showPassword ? 'eye-off' : 'eye'} size={24} color={showPassword ? '#9038a5' : '#a1a1a1'} />
                                        </Pressable>
                                    </View>
                                    {age && gender && (
                                        <>
                                            <Text style={styles.updateInfoTxt}>Update Age</Text>
                                            <TextInput style={styles.yourInfoTxt} value={age} onChangeText={(value) => setAge(value)} />
                                            <Text style={styles.updateInfoTxt}>Update Gender</Text>
                                            <TextInput style={styles.yourInfoTxt} value={gender} onChangeText={(value) => setGender(value)} />
                                        </>
                                    )}
                                    <Text style={styles.updateBtnTxt} onPress={handleUpdateAccount}>Update</Text>
                                    <Text style={styles.infoModalCloseTxt} onPress={() => setChangeInfo(false)}>Close</Text>
                                </View>
                            </View>
                        </Modal>
                    </View>
                    <View style={styles.removeAccSetting}>
                        <Pressable onPress={RemoveAccModal}>
                            <Text style={styles.removeAccTxt}>Remove Account?</Text>
                        </Pressable>
                    </View>
                    <View>
                        <Modal
                            visible={removeAcc}
                            animationType="fade"
                            onRequestClose={
                                () => setRemoveAcc(false)
                            }
                            transparent
                        >
                            <View style={styles.infoModalBgSetting}>
                                <View style={styles.infoModalFrontSetting}>
                                    <Text style={styles.infoModalTxt}>{fname} Do You Want To Permanently Remove Your Account?</Text>
                                    <Text style={styles.removeAcc} onPress={handleDeleteAccount}>Yes, Remove</Text>
                                    <Text style={styles.infoModalCloseTxt} onPress={() => setRemoveAcc(false)}>Close</Text>
                                </View>
                            </View>
                        </Modal>
                    </View>
                    <View style={styles.logoutSetting}>
                        <Pressable onPress={handleLogout}>
                            <Text style={styles.logoutTxt}>Logout?</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default MyAccount;
