/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    headerSetting: {
        backgroundColor: '#9038A5',
        padding: 30,
        borderBottomLeftRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTxt: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    selectImgSetting: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 50,
    },
    selectImgTxt: {
        color: '#000',
        fontSize: 25,
        fontWeight: 'bold',
    },
    uploadImgSetting: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        top: 80,
        backgroundColor: '#9038A5',
        padding: 12,
        borderRadius: 5,
        width: 140,
    },
    uploadImgTxt: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    modelSetting: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#f2f2f2',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 15,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5.5,
        elevation: 2,
        height: 270,
    },
    modalBg: {
        backgroundColor: '#00000999',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalTxt: {
        backgroundColor: '#9038A5',
        padding: 10,
        color: '#fff',
        borderRadius: 7,
        width: '90%',
        textAlign: 'center',
        margin: 10,
        top: 8,
    },
    modalDesign: {
        backgroundColor: '#d0d0d0',
        width: '12%',
        height: 7,
        borderRadius: 20,
        top: -33,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgSetting: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 130,
    },
    img: {
        width: 380,
        height: undefined,
        borderRadius: 20,
        aspectRatio: 1,
    },
    resultSetting: {
        backgroundColor: '#f2f2f2',
        alignSelf: 'center',
        padding: 12,
        margin: 10,
        borderRadius: 15,
        top: 150,
        width: '95%',
        paddingBottom: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5.5,
        elevation: 5,
    },
    resultTxt: {
        color: '#000',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    resultTable: {
        flexDirection: 'row',
        margin: 10,
        top: 15,
    },
    resultTableTxt: {
        color: '#000',
        textAlign: 'left',
    },
    betterResultSetting: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 170,
        left: 10,
        flexWrap: 'wrap',
        marginBottom: 200,
    },
    betterResultTxt: {
        color: '#000',
        fontSize: 13,
    },
    infoSetting: {
        backgroundColor: '#9038A5',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 12,
        borderRadius: 5,
        width: 140,
        top: 65,
    },
    infoTxt: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    infoModalBgSetting: {
        backgroundColor: '#00000999',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoModalFrontSetting: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 15,
        width: '90%',
    },
    infoModalInput: {
        backgroundColor: '#f2f2f2',
        borderColor: '#9038A5',
        borderWidth: 0.6,
        borderRadius: 6,
        color: '#000',
        paddingLeft: 15,
        margin: 5,
    },
    infoModalTxt: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        bottom: 10,
    },
    infoModalCloseTxt: {
        backgroundColor: '#9038A5',
        padding: 10,
        color: '#fff',
        borderRadius: 6,
        width: '96.5%',
        textAlign: 'center',
        margin: 10,
        left: -3,
        //top: 8,
    },
});

export { styles };