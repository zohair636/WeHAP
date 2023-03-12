/* eslint-disable prettier/prettier */
import React, { FC, useState } from 'react';
import { Image, Modal, Pressable, SafeAreaView, Text, View, PermissionsAndroid, ScrollView, TextInput, Platform } from 'react-native';
import { styles } from '../StyleSheet/SelectDiseaseStyling';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import Config from 'react-native-config';

axios.interceptors.request.use(
    async config => {
        let request = config;
        request.headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };
        request.url = configureUrl(config.url);
        return request;
    },
    error => error,
);

export const configureUrl = url => {
    let authUrl = url;
    if (url && url[url.length - 1] === '/') {
        authUrl = url.substring(0, url.length - 1);
    }
    return authUrl;
};

const SelectDisease: FC = ({ route }) => {
    const { category } = route.params;
    const [modal, setModal] = useState(false);
    const [cameraPhoto, setCameraPhoto] = useState();
    const [info, setInfo] = useState(false);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [confidence, setConfidence] = useState('');
    const [label, setLabel] = useState('');

    const Press = () => {
        setModal(true);
    };

    const InfoModal = () => {
        setInfo(true);
    };

    let options = {
        saveToPhotos: true,
        mediaType: 'photo',
    };

    // const openCamera = async () => {
    //     const granted = await PermissionsAndroid.request(
    //         PermissionsAndroid.PERMISSIONS.CAMERA,
    //     );
    //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //         const result = await launchCamera(options);
    //         setCameraPhoto(result.assets[0].uri);
    //     }
    // };

    const openCamera = async () => {
        launchCamera(options, async response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const uri = response?.assets[0]?.uri;
                const path = Platform.OS !== 'ios' ? uri : 'file://' + uri;
                getResult(path, response);
            }
        });
    };

    const predictDisease = async (image) => {
        try {
            const apiUrl = 'https://us-central1-fyp-potato-dataset.cloudfunctions.net/predict'; // Replace with your deployed endpoint URL
            const formData = new FormData();
            formData.append('file', {
                uri: image.uri,
                type: 'image/jpeg',
                name: 'image.jpg',
            });
            const response = await fetch(apiUrl, {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                },
            });
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const getResult = async (path, response) => {
        setCameraPhoto(path);
        setLabel('Predicting...');
        setConfidence('');

        const params = {
            uri: path,
            name: response.assets[0].fileName,
            type: response.assets[0].type,
        };

        const res = await predictDisease(params);
        if (res?.class) {
            setLabel(res.class);
            setConfidence(res.confidence);
        } else {
            setLabel("Failed to predict");
        }
    };


    // const openGallery = async () => {
    //     const granted = await PermissionsAndroid.request(
    //         PermissionsAndroid.PERMISSIONS.CAMERA
    //     );
    //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //         const result = await launchImageLibrary(options);
    //         setCameraPhoto(result.assets[0].uri);
    //     }
    // };

    const openGallery = async () => {
        launchImageLibrary(options, async response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const uri = response.assets[0].uri;
                const path = Platform.OS !== 'ios' ? uri : 'file://' + uri;
                getResult(path, response);
            }
        });
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.container}>
                <View style={styles.headerSetting}>
                    <Text style={styles.headerTxt}>{category}</Text>
                </View>
                <View style={styles.selectImgSetting}>
                    <Text style={styles.selectImgTxt}>Upload Data</Text>
                    <Modal
                        visible={modal}
                        onRequestClose={
                            () => setModal(false)
                        }
                        transparent
                        animationType="fade"
                    >
                        <View style={styles.modalBg}>
                            <View style={styles.modelSetting}>
                                <View style={styles.modalDesign} />
                                <Text style={styles.modalTxt} onPress={openCamera}>Take a Photo</Text>
                                <Text style={styles.modalTxt} onPress={openGallery}>Choose From Gallery</Text>
                                <Text style={styles.modalTxt} onPress={() => setModal(false)}>Close</Text>
                            </View>
                        </View>
                    </Modal>
                </View>
                <View>
                    <Modal
                        visible={info}
                        onRequestClose={
                            () => setInfo(false)
                        }
                        transparent
                        animationType="fade"
                    >
                        <View style={styles.infoModalBgSetting}>
                            <View style={styles.infoModalFrontSetting}>
                                <Text style={styles.infoModalTxt}>Enter Name & Age of the User</Text>
                                <TextInput style={styles.infoModalInput} placeholder="Enter Name of the user" placeholderTextColor={'#000'} onChangeText={(text) => setName(text)} />
                                <TextInput style={styles.infoModalInput} placeholder="Enter Age of the user" placeholderTextColor={'#000'} onChangeText={(text) => setAge(text)} />
                                <Text style={styles.infoModalCloseTxt} onPress={() => setInfo(false)}>Close</Text>
                            </View>
                        </View>
                    </Modal>
                </View>
                <View style={styles.infoSetting}>
                    <Pressable onPress={() => InfoModal()}>
                        <Text style={styles.infoTxt}>Upload Info</Text>
                    </Pressable>
                </View>
                <View style={styles.uploadImgSetting}>
                    <Pressable onPress={Press}>
                        <Text style={styles.uploadImgTxt}>Upload Image</Text>
                    </Pressable>
                </View>
                <View style={styles.imgSetting}>
                    {cameraPhoto && <Image source={{ uri: cameraPhoto }} style={styles.img} />}
                </View>
                <View style={styles.resultSetting}>
                    <Text style={styles.resultTxt}>Result</Text>
                    <View style={styles.resultTable}>
                        <Text style={styles.resultTableTxt}>Patient Name: </Text>
                        <Text style={styles.resultTableTxt}>{name}</Text>
                    </View>
                    <View style={styles.resultTable}>
                        <Text style={styles.resultTableTxt}>Patient Age: </Text>
                        <Text style={styles.resultTableTxt}>{age}</Text>
                    </View>
                    <View style={styles.resultTable}>
                        <Text style={styles.resultTableTxt}>Disease Name: </Text>
                        <Text style={styles.resultTableTxt}>{label}</Text>
                    </View>
                    <View style={styles.resultTable}>
                        <Text style={styles.resultTableTxt}>Chances of Disease: </Text>
                        {(confidence && <Text style={styles.resultTableTxt}>{parseFloat(confidence).toFixed(2) + '%'}</Text>)}
                    </View>
                    <View style={styles.resultTable}>
                        <Text style={styles.resultTableTxt}>Serious Problem?</Text>
                    </View>
                    <View style={styles.resultTable}>
                        <Text style={styles.resultTableTxt}>Need To Contact with your Doctor? </Text>
                    </View>
                </View>
                <View style={styles.betterResultSetting}>
                    <Text style={styles.betterResultTxt}>We are 80% sure about this result. For more confirmation you can contact with your doctor.</Text>
                </View>
            </SafeAreaView>
        </ScrollView >
    );
};

export default SelectDisease;