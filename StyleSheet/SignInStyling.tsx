/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imgSetting: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 280,
        height: 280,
        top: 40,
    },
    SignInSetting: {
        backgroundColor: '#F2F2F2',
        flex: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        top: 40,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 2,
        shadowRadius: 3.5,
        elevation: 4,
    },
    signinTxt: {
        color: '#000',
        fontSize: 25,
        textAlign: 'center',
        top: 45,
        fontWeight: 'bold',
    },
    emailSetting: {
        justifyContent: 'center',
        alignSelf: 'flex-start',
        left: 18,
        top: 80,
        width: '90%',
    },
    emailTxt: {
        color: '#a1a1a1',
    },
    emailInput: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingLeft: 15,
        top: 5,
        borderColor: '#9038A5',
        borderWidth: 0.6,
        color: '#000',
    },
    passwordSetting: {
        justifyContent: 'center',
        alignSelf: 'flex-start',
        left: 18,
        top: 100,
        width: '90%',
    },
    passwordTxt: {
        color: '#a1a1a1',
    },
    passwordInput: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingLeft: 15,
        top: 5,
        borderColor: '#9038A5',
        borderWidth: 0.6,
        color: '#000',
    },
    fpSetting: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        right: 36,
        top: 100,
    },
    fpTxt: {
        color: '#000',
    },
    signinBtnSetting: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        //top: 135,
        backgroundColor: '#9038A5',
        borderRadius: 10,
        padding: 15,
        width: '90%',
    },
    signBtnTxt: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    newUserSetting: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        top: 160,
        marginBottom: 220,
    },
    newUserTxt: {
        color: '#000',
    },
    signUpTxt: {
        color: '#9038A5',
        fontWeight: 'bold',
    },
    eyeBtnSetting: {
        top: '-34%',
        right: '5%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
    },
});

export { styles };