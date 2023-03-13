/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// import React, { FC, useState } from 'react';
// import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
// import { styles } from '../StyleSheet/HumanDiseaseListStyling';

// const HumanDiseaseList: FC = ({ navigation }) => {
//     const [selectedCategory, setSelectedCategory] = useState('');

//     const handleSelect = category => {
//         setSelectedCategory(category);
//         navigation.navigate('Selected Disease', { category });
//       };

//     return (
//         <SafeAreaView style={styles.container}>
//             <View style={styles.headerSetting}>
//                 <Text style={styles.headerTxt}>Human Disease Category</Text>
//             </View>
//             <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//                 <View style={styles.scrollSetting}>
//                     <Pressable onPress={() => handleSelect('Brain Tumor')}>
//                         <View style={styles.humanDiseaseSetting}>
//                             <View style={styles.humanImgSetting}>
//                                 <View style={styles.humanImg}>
//                                     <Image style={styles.img} source={require('../assets/brain.jpg')} />
//                                 </View>
//                             </View>
//                             <View style={styles.humanDisease}>
//                                 <Text style={styles.humanTxt}>Brain Tumor</Text>
//                             </View>
//                         </View>
//                     </Pressable>
//                     <Pressable onPress={() => handleSelect('Eye Disease')}>
//                         <View style={styles.humanDiseaseSetting}>
//                             <View style={styles.humanImgSetting}>
//                                 <View style={styles.humanImg}>
//                                     <Image style={styles.img} source={require('../assets/brain.jpg')} />
//                                 </View>
//                             </View>
//                             <View style={styles.humanDisease}>
//                                 <Text style={styles.humanTxt}>Eye Disease</Text>
//                             </View>
//                         </View>
//                     </Pressable>
//                     <Pressable onPress={() => handleSelect('Skin Disease')}>
//                         <View style={styles.humanDiseaseSetting}>
//                             <View style={styles.humanImgSetting}>
//                                 <View style={styles.humanImg}>
//                                     <Image style={styles.img} source={require('../assets/brain.jpg')} />
//                                 </View>
//                             </View>
//                             <View style={styles.humanDisease}>
//                                 <Text style={styles.humanTxt}>Skin Disease</Text>
//                             </View>
//                         </View>
//                     </Pressable>
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     );
// };

// export default HumanDiseaseList;

import React, { FC, useState } from 'react';
import { FlatList, Image, Pressable, SafeAreaView, Text, TextInput, View } from 'react-native';
import { styles } from '../StyleSheet/HumanDiseaseListStyling';

const HumanDiseaseList: FC = ({ navigation }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const handleSelect = category => {
        setSelectedCategory(category);
        navigation.navigate('Selected Disease', { category });
    };

    const filteredData = [
        {
            name: 'Brain Tumor Disease',
            image: require('../assets/brain.jpg'),
        },
        {
            name: 'Eye Disease',
            image: require('../assets/brain.jpg'),
        },
        {
            name: 'Skin Disease',
            image: require('../assets/brain.jpg'),
        },
    ].filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerSetting}>
                <Text style={styles.headerTxt}>Human Disease Category</Text>
            </View>
            <View style={styles.searchSetting}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search Human Disease..."
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

export default HumanDiseaseList;
