/* eslint-disable prettier/prettier */
import React, { FC, useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { styles } from '../StyleSheet/PlantDiseaseListStyling';

const PlantDiseaseList: FC = ({navigation}) => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleSelect = category => {
        setSelectedCategory(category);
        navigation.navigate('Selected Disease', { category });
      };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerSetting}>
                <Text style={styles.headerTxt}>Plant Disease Category</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.scrollSetting}>
                    <Pressable onPress={() => handleSelect('Powdery Mildew')}>
                    <View style={styles.humanDiseaseSetting}>
                            <View style={styles.humanImgSetting}>
                                <View style={styles.humanImg}>
                                    <Image style={styles.img} source={require('../assets/powderMildew.png')} />
                                </View>
                            </View>
                            <View style={styles.humanDisease}>
                                <Text style={styles.humanTxt}>Potato Leaf</Text>
                            </View>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handleSelect('Blight')}>
                    <View style={styles.humanDiseaseSetting}>
                            <View style={styles.humanImgSetting}>
                                <View style={styles.humanImg}>
                                    <Image style={styles.img} source={require('../assets/blight.jpg')} />
                                </View>
                            </View>
                            <View style={styles.humanDisease}>
                                <Text style={styles.humanTxt}>Blight</Text>
                            </View>
                        </View>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default PlantDiseaseList;
