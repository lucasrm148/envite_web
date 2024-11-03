import React, { useContext, useRef, useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { FormView, styles } from './ConfirmeConviteStyles';
import { RFValue } from 'react-native-responsive-fontsize';
import Config from "./../../constant/DBConfig";
import { EventContext } from '../../States/ConfirmeUserState';
import { CheckInvites } from '../../controller/Connection/ConectionConvite';
 const ConfirmeConvite = ({ navigation }: any) => {
    const UseStateConfirme = useContext(EventContext)
    
    const [convite,setConvite] = useState("")
    return (
        <View style={styles.container}>
            <View style={FormView.conteiner}>
            <Text style={styles.title}>Confirme Presença</Text>
            <Text style={{textAlign:'center',width:'95%'}}>
            <Text style={[styles.title,{fontSize: RFValue(18)}]}>insira o codigo do convite presente no seu convite</Text></Text>
                <TextInput
                    placeholder="Digite a senha do convite"
                    onChangeText={setConvite}
                    value={convite}// Referência ao TextInput
                    style={styles.input}
                />
                <Button title="Confirmar" onPress={()=>{send(convite)}} />
            </View>
           
        </View>
    );
    async function send(convite:string){
        const res = await CheckInvites(convite)
        if (res?.data.code ==="200"){
            UseStateConfirme?.updateConvite(res.data.convite)
            navigation.navigate("confirmeConvidados")
        }
    }
}


export default ConfirmeConvite