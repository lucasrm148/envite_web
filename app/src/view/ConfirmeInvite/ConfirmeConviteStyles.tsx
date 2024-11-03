import {StyleSheet} from "react-native"
import {RFValue } from "react-native-responsive-fontsize";
export const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center', // Centraliza horizontalmente
        justifyContent: 'center', // Centraliza verticalmente
        flex: 1, // Ocupa toda a tela
        backgroundColor:"#rgba(255, 210, 233, 1)",
    },
    title: {
        fontSize: RFValue(23),
        marginBottom: 20,
    },
    input: {
        marginVertical: 10,
        padding: 10,
        width: 200,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
    },
});

export const FormView = StyleSheet.create({
    conteiner:{
        height:'70%',
        width:'80%',    
        borderColor:"bronw",
        borderRadius:35,
        borderWidth:3,
        alignItems:"center",
        justifyContent:'space-around',
        backgroundColor:"#EDEDED",
        
    }
})