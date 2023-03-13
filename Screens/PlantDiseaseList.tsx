/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// import React, { FC, useState } from 'react';
// import { FlatList, Image, Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
// import { styles } from '../StyleSheet/PlantDiseaseListStyling';

// const PlantDiseaseList: FC = ({ navigation }) => {
//     const [selectedCategory, setSelectedCategory] = useState('');

//     const handleSelect = category => {
//         setSelectedCategory(category);
//         navigation.navigate('Selected Disease', { category });
//     };

//     return (
//         <SafeAreaView style={styles.container}>
//             <View style={styles.headerSetting}>
//                 <Text style={styles.headerTxt}>Plant Disease Category</Text>
//             </View>
//             <View style={styles.searchSetting}>
//                 <TextInput style={styles.searchInput} placeholder="Search Plant Disease..." placeholderTextColor={'#839192'} />
//             </View>
//             <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//                 <View style={styles.scrollSetting}>
//                     <Pressable onPress={() => handleSelect('Potato Leaf Disease')}>
//                         <View style={styles.humanDiseaseSetting}>
//                             <View style={styles.humanImgSetting}>
//                                 <View style={styles.humanImg}>
//                                     <Image style={styles.img} source={require('../assets/sweet-potato.jpg')} />
//                                 </View>
//                             </View>
//                             <View style={styles.humanDisease}>
//                                 <Text style={styles.humanTxt}>Potato Leaf</Text>
//                                 <Text style={styles.humanTxt}>Disease</Text>
//                             </View>
//                         </View>
//                     </Pressable>
//                     <Pressable onPress={() => handleSelect('Tomato Leaf Disease')}>
//                         <View style={styles.humanDiseaseSetting}>
//                             <View style={styles.humanImgSetting}>
//                                 <View style={styles.humanImg}>
//                                     <Image style={styles.img} source={require('../assets/Tomato-Leaf-Fragrance-Oil.jpg')} />
//                                 </View>
//                             </View>
//                             <View style={styles.humanDisease}>
//                                 <Text style={styles.humanTxt}>Tomato Leaf</Text>
//                                 <Text style={styles.humanTxt}>Disease</Text>
//                             </View>
//                         </View>
//                     </Pressable>
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     );
// };

// export default PlantDiseaseList;

import React, { FC, useState } from 'react';
import { FlatList, Image, Pressable, SafeAreaView, Text, TextInput, View } from 'react-native';
import { styles } from '../StyleSheet/PlantDiseaseListStyling';

const PlantDiseaseList: FC = ({ navigation }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const handleSelect = category => {
        setSelectedCategory(category);
        navigation.navigate('Selected Disease', { category });
    };

    const filteredData = [
        {
            name: 'Potato Leaf Disease  ',
            image: require('../assets/sweet-potato.jpg'),
        },
        {
            name: 'Tomato Leaf Disease',
            image: require('../assets/Tomato-Leaf-Fragrance-Oil.jpg'),
        },
    ].filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerSetting}>
                <Text style={styles.headerTxt}>Plant Disease Category</Text>
            </View>
            <View style={styles.searchSetting}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search Plant Disease..."
                    placeholderTextColor={'#839192'}
                    onChangeText={text => setSearchQuery(text)}
                />
            </View>
            <FlatList
                horizontal={true}
                data={filteredData}
                renderItem={({ item }) => (
                    <View style={styles.scrollSetting}>
                    <Pressable onPress={() => handleSelect(item.name)}>
                        <View style={styles.humanDiseaseSetting}>
                            <View style={styles.humanImgSetting}>
                                <View style={styles.humanImg}>
                                    <Image style={styles.img} source={item.image} />
                                </View>
                            </View>
                            <View style={styles.humanDisease}>
                                <Text style={styles.humanTxt}>{item.name}</Text>
                            </View>
                        </View>
                    </Pressable>
                    </View>
                )}
                keyExtractor={item => item.name}
            />
        </SafeAreaView>
    );
};

export default PlantDiseaseList;
