/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imgSetting: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        top: 30,
        height: 200,
        width: 200,
    },
    SignUpSetting: {
        backgroundColor: '#F2F2F2',
        flex: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        top: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 2,
        shadowRadius: 3.5,
        elevation: 4,
    },
    createAccountTxt: {
        color: '#000',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        top: 45,
    },
    inputSetting: {
        justifyContent: 'center',
        alignSelf: 'flex-start',
        left: 12,
        top: 70,
        width: '90%',
        margin: 8,
    },
    inputTxt: {
        color: '#a1a1a1',
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        top: 5,
        borderColor: '#9038A5',
        borderWidth: 0.6,
        paddingLeft: 15,
        color: '#000',
    },
    signUpBtnSetting: {
        backgroundColor: '#9038A5',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        //top: 100,
        padding: 15,
        width: '90%',
    },
    signupBtnTxt: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    signInSetting: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: 130,
        marginBottom: 180,
    },
    alreadyMemberTxt: {
        color: '#000',
    },
    signInTxt: {
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