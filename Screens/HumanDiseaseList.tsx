/* eslint-disable prettier/prettier */
import React, { FC, useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { styles } from '../StyleSheet/HumanDiseaseListStyling';

const HumanDiseaseList: FC = ({ navigation }) => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleSelect = category => {
        setSelectedCategory(category);
        navigation.navigate('Selected Disease', { category });
      };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerSetting}>
                <Text style={styles.headerTxt}>Human Disease Category</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.scrollSetting}>
                    <Pressable onPress={() => handleSelect('Brain Tumor')}>
                        <View style={styles.humanDiseaseSetting}>
                            <View style={styles.humanImgSetting}>
                                <View style={styles.humanImg}>
                                    <Image style={styles.img} source={require('../assets/brain.jpg')} />
                                </View>
                            </View>
                            <View style={styles.humanDisease}>
                                <Text style={styles.humanTxt}>Brain Tumor</Text>
                            </View>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handleSelect('Eye Disease')}>
                        <View style={styles.humanDiseaseSetting}>
                            <View style={styles.humanImgSetting}>
                                <View style={styles.humanImg}>
                                    <Image style={styles.img} source={require('../assets/brain.jpg')} />
                                </View>
                            </View>
                            <View style={styles.humanDisease}>
                                <Text style={styles.humanTxt}>Eye Disease</Text>
                            </View>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handleSelect('Skin Disease')}>
                        <View style={styles.humanDiseaseSetting}>
                            <View style={styles.humanImgSetting}>
                                <View style={styles.humanImg}>
                                    <Image style={styles.img} source={require('../assets/brain.jpg')} />
                                </View>
                            </View>
                            <View style={styles.humanDisease}>
                                <Text style={styles.humanTxt}>Skin Disease</Text>
                            </View>
                        </View>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HumanDiseaseList;
