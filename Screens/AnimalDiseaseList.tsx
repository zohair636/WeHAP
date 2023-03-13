/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// import React, { FC, useState } from 'react';
// import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
// import { styles } from '../StyleSheet/AnimalDiseaseListStyling';

// const AnimalDiseaseList: FC = ({ navigation }) => {
//     const [selectedCategory, setSelectedCategory] = useState('');

//     const handleSelect = category => {
//         setSelectedCategory(category);
//         navigation.navigate('Selected Disease', { category });
//       };
//     return (
//         <SafeAreaView style={styles.container}>
//             <View style={styles.headerSetting}>
//                 <Text style={styles.headerTxt}>Animal Disease Category</Text>
//             </View>
//             <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//                 <View style={styles.scrollSetting}>
//                     <Pressable onPress={() => handleSelect('Lumpy Skin')}>
//                         <View style={styles.humanDiseaseSetting}>
//                             <View style={styles.humanImgSetting}>
//                                 <View style={styles.humanImg}>
//                                     <Image style={styles.img} source={require('../assets/lumpy-skin.jpg')} />
//                                 </View>
//                             </View>
//                             <View style={styles.humanDisease}>
//                                 <Text style={styles.humanTxt}>Lumpy Skin</Text>
//                             </View>
//                         </View>
//                     </Pressable>
//                     <Pressable onPress={() => handleSelect('Foot & Mouth')}>
//                         <View style={styles.humanDiseaseSetting}>
//                             <View style={styles.humanImgSetting}>
//                                 <View style={styles.humanImg}>
//                                     <Image style={styles.img} source={require('../assets/foot.jpg')} />
//                                 </View>
//                             </View>
//                             <View style={styles.humanDisease}>
//                                 <Text style={styles.humanTxt}>Foot & Mouth</Text>
//                             </View>
//                         </View>
//                     </Pressable>
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     );
// };

// export default AnimalDiseaseList;


import React, { FC, useState } from 'react';
import { FlatList, Image, Pressable, SafeAreaView, Text, TextInput, View } from 'react-native';
import { styles } from '../StyleSheet/AnimalDiseaseListStyling';

const AnimalDiseaseList: FC = ({ navigation }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const handleSelect = category => {
        setSelectedCategory(category);
        navigation.navigate('Selected Disease', { category });
    };

    const filteredData = [
        {
            name: 'Lumpy Skin Disease  ',
            image: require('../assets/lumpy-skin.jpg'),
        },
        {
            name: 'Foot & Mouth Disease',
            image: require('../assets/foot.jpg'),
        },
    ].filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerSetting}>
                <Text style={styles.headerTxt}>Animal Disease Category</Text>
            </View>
            <View style={styles.searchSetting}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search Animal Disease..."
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

export default AnimalDiseaseList;