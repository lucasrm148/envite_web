// src/navigation/AppNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnaRebeca from './../view/AnaRebeca/AnaRebeca'; // Ajuste o caminho de acordo com sua estrutura
// Ajuste o caminho de acordo com sua estrutura
import { NavigationContainer } from '@react-navigation/native';
import ConfirmeConvite from './../view/ConfirmeInvite/ConfirmeConvite';
import confirmarPresenca from '../view/ConfirmaPresensa/ConfirmarPresensa';
import SelecionarPresentes from '../view/presentes/SelecionarPresentes';

const { Screen, Navigator } = createNativeStackNavigator();

const RoutesInvite = () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="AnaRebeca">
                <Screen
                    name="AnaRebeca"
                    component={AnaRebeca}
                    options={{ headerBackVisible: false, headerShown: false }} />
                <Screen
                    name="ConfirmePresenca"
                    component={ConfirmeConvite}
                    options={{ headerBackVisible: false, headerShown: false }} />
                <Screen
                    name="confirmeConvidados"
                    component={confirmarPresenca}
                    options={{ headerBackVisible: false, headerShown: false }} />
                <Screen
                    name="SelecionarPresente"
                    component={SelecionarPresentes}
                    options={{ headerBackVisible: false, headerShown: false }} />
            </Navigator>
        </NavigationContainer>
    );
};

export default RoutesInvite;
