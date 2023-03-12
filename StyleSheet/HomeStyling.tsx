/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#fff',
        flex: 1,
    },
    secondBg: {
        backgroundColor: '#F2F2F2',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        top: 30,
        borderRadius: 40,
        margin: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.5,
        elevation: 0.5,
    },
    WeHAPTxt: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
    },
    WeHApImg: {
        width: 370,
        height: 350,
        top: 10,
    },
    heading: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 40,
    },
    headingTxt: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000',
    },
    btnSetting: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    signupBtnSetting: {
        backgroundColor: '#9038A5',
        padding: 15,
        paddingLeft: 120,
        paddingRight: 120,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.5,
        elevation: 2,
    },
    signupTxt: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    signinBtnSetting: {
        borderColor: '#9038A5',
        borderWidth: 0.6,
        padding: 15,
        paddingLeft: 120,
        paddingRight: 120,
        borderRadius: 10,
        top: 11,
    },
    signinTxt: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    poweredBy: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 90,
    },
    powerByTxt: {
        color: '#000',
        fontSize: 12,
    },
});

export { styles };