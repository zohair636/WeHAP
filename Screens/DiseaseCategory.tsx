/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { styles } from '../StyleSheet/DiseaseCategoryStyling';

const DiseaseCategory: FC = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headingSetting}>
                <Text style={styles.headingTxt}>Disease Category</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.scrollSetting}>
                    <Pressable onPress={() => navigation.navigate('Human Disease List')}>
                        <View style={styles.humanDiseaseSetting}>
                            <View style={styles.humanImgSetting}>
                                <View style={styles.humanImg}>
                                    <Image style={styles.img} source={require('../assets/human-1.png')} />
                                </View>
                            </View>
                            <View style={styles.humanDisease}>
                                <Text style={styles.humanTxt}>Human Disease</Text>
                            </View>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Animal Disease List')}>
                        <View style={styles.humanDiseaseSetting}>
                        <View style={styles.humanImgSetting}>
                                <View style={styles.humanImg}>
                                    <Image style={styles.img} source={require('../assets/animal-1.jpg')} />
                                </View>
                            </View>
                            <View style={styles.humanDisease}>
                                <Text style={styles.humanTxt}>Animal Disease</Text>
                            </View>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Plant Disease List')}>
                        <View style={styles.humanDiseaseSetting}>
                        <View style={styles.humanImgSetting}>
                                <View style={styles.humanImg}>
                                    <Image style={styles.img} source={require('../assets/plant-1.jpg')} />
                                </View>
                            </View>
                            <View style={styles.humanDisease}>
                                <Text style={styles.humanTxt}>Plant Disease</Text>
                            </View>
                        </View>
                    </Pressable>
                </View>
            </ScrollView>
            <View style={{backgroundColor: '#9038A5', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', padding: 15, top: -10, width: 100, borderRadius: 10}}>
                    <Pressable onPress={() => navigation.navigate('Sign In')}>
                        <Text style={{color: '#fff'}}>Logout</Text>
                    </Pressable>
                </View>
        </SafeAreaView>
    );
};

export default DiseaseCategory;
