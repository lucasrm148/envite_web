"use client";

import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity, Linking, StyleSheet,ImageBackground } from "react-native";
import { buttonConfirma, infoBar, nameFoto } from "./AnaRebecaStyles";
import * as Font from 'expo-font';
import HaderImg  from "./../../../../assets/image/anaRebecaChaDeBebe/header.png"
import Background from "./../../../../assets/image/anaRebecaChaDeBebe/background.jpg"
import IconGps from "./../../../../assets/image/anaRebecaChaDeBebe/icon_Localizacao_densenhado.png"
import IconRelogio from "./../../../../assets/image/anaRebecaChaDeBebe/clock.png"
import PresentIcon from "./../../../../assets/image/anaRebecaChaDeBebe/PinkPresent.png"
const loadFonts = async () => {
  await Font.loadAsync({
    'Playpen-Sans': require('./../../../../assets/fonts/Playpen_Sans/PlaypenSans.ttf'), // Altere o caminho para onde a fonte está localizada
  });
};

const AnaRebeca =({ navigation }: any) => {
  const mapsUrl = "https://maps.app.goo.gl/bPrPwhbtWmRxJE3B7";
  const [loading,setLoading]= useState(true);
  useEffect( ()=>{ 
   loadFonts().then(()=>{
      setLoading(false) 
   })
  },[])
  if(loading){
    return(<View><Text>Carregado aguarde um pouco</Text></View>)
  }
  return (
    <ImageBackground 
    source={Background} // Caminho da imagem de fundo
    style={styles.container} // Estilo para a imagem de fundo
      resizeMode="stretch"
  >
      <View style={styles.title}>
        <Image
          source={HaderImg}
          style={nameFoto.Container}
          alt="Cha de bebe Ana Rebeca"
        />
      </View>
      <View style={infoBar.Container}>
        <TouchableOpacity style={infoBar.button} onPress={() => Linking.openURL(mapsUrl)}>
          <Image
            source={IconGps}
            style={[infoBar.iconLocalização,{height:'70%',width:'25%'}]}
          />
          <Text style={[infoBar.text,{ maxWidth: '80%'}]}>Condomínio VERSATILLE Av.Coronel Colares Moreira</Text>
        </TouchableOpacity>

        <TouchableOpacity style={infoBar.button}>
          <Image
      
            source={IconRelogio}
            style={infoBar.iconLocalização}
          />
          <Text style={infoBar.text}>Dia 09/11/2024 às 18 horas</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',width:'100%', justifyContent:'space-around'}}> 
        <View style={{width:'35%',height:10,backgroundColor:"pink",borderRadius:20}}></View>
        <Image  style={{width:50,height:50}} source={PresentIcon}/>
        <View style={{width:'35%',height:10,backgroundColor:"pink",borderRadius:20}}></View>
      </View>
      <View style={buttonConfirma.Container}>
        <TouchableOpacity onPress={GoConfimePresent}>
          <Text style={[buttonConfirma.text,{fontFamily: 'Playpen-Sans'}]}>Confirmar preseneça</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
  function GoConfimePresent(){
    navigation.navigate("ConfirmePresenca")
}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,// Você pode ajustar conforme necessário
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: "hidden",
    resizeMode:"stretch"
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxHeight: '35%',
    marginTop:'10%'
  }
});

export default AnaRebeca;
