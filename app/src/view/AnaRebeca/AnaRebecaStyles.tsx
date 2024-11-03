
import { StyleSheet } from 'react-native';
import {RFValue } from "react-native-responsive-fontsize";

export const nameFoto = StyleSheet.create({
    Container: {
        flex: 1,
        marginTop:'7%',
        maxHeight: '80%',
        maxWidth: '70%',
        alignSelf: 'center',
       
    }
});

export const buttonConfirma = StyleSheet.create({
    Container: {
        flex: 1,
        maxHeight: '8%',
        maxWidth: '100%',
        alignSelf: 'center',
       
    },
    text: {
        textAlign: 'center', // Corrigido de 'textAling' para 'textAlign'
        fontSize: RFValue(25), // Use um valor fixo em vez de '5vw'
        color: 'green',
        fontFamily: 'Playpen-Sans', 
        /*borderWidth: 3,
        borderStyle:"dotted",
        borderColor: 'brown',*/
    }
});

export const infoBar = StyleSheet.create({
    Container: {
        flex: 1,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center', // Corrigido de 'alignitens' para 'alignItems'
        maxHeight: '30%', // O React Native não suporta 'vw' diretamente, você pode usar 'heightPercentageToDP' da biblioteca 'react-native-responsive-screen'
        width: '97%', // Corrigido de 'Width' para 'width'
        marginBottom: 20, // Valor numérico para marginBottom
        backgroundColor:"#F3D9E6"
    },
    button: {
        backgroundColor: '#F4DAE7',
        flexDirection: 'column',
        maxWidth: '55%', // Corrigido para porcentagem
        height: '30%', // Corrigido para porcentagem
        justifyContent: 'center',
        alignItems: 'center', // Corrigido de 'alignitens' para 'alignItems'
        // Corrigido para porcentagem
    },
    iconLocalização: {
        width: '50%', // Corrigido para porcentagem
        height: '100%', // Corrigido para porcentagem
        alignSelf: 'center',
    },
    text: {
        maxWidth: '75%',
        marginTop:5,
        fontSize: RFValue(12), // Use um valor fixo em vez de '2.5vw'
        color: 'green',
         // No React Native, use fontes disponíveis ou carregue-as.
    }
});

