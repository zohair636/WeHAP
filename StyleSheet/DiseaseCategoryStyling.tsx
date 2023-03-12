/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    headingSetting: {
        backgroundColor: '#9038A5',
        padding: '6%',
        borderBottomLeftRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.5,
        elevation: 5,
    },
    headingTxt: {
        color: '#fff',
        fontSize: 27,
        fontWeight: 'bold',
    },
    scrollSetting: {
        flexDirection: 'row',
    },
    humanDiseaseSetting: {
        backgroundColor: '#f2f2f2',
        width: 350,
        height: 550,
        top: 40,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.5,
        elevation: 5,
        margin: 10,
    },
    humanDisease: {
        backgroundColor: '#9038A5',
        padding: 10,
        top: 100,
        height: 300,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    humanImgSetting: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 30,
    },
    humanImg: {
        backgroundColor: '#fff',
        borderRadius: 100,
        width: 170,
        height: 170,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.5,
        elevation: 10,
    },
    img: {
        width: 165,
        height: 165,
        borderRadius: 100,
    },
    humanTxt: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
        left: 20,
        top: 40,
    },
    backDesign: {
        backgroundColor: '#9038A5',
        width: 270,
        height: 300,
        opacity: 0.03,
        borderRadius: 100,
        transform: [{rotate: '40deg'}],
        zIndex: -1,
        top: 300,
    },
});

export {styles};