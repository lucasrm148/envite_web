import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, Linking } from 'react-native';
import { EventContext } from '../../States/ConfirmeUserState';
import { ConfirmaPresença, GetConvidadosConvite } from '../../controller/Connection/ConnctionConvidados';

// Define o tipo da pessoa
interface Pessoa {
  id: number;
  nome: string;
  hash_convite: string;
  participara: boolean;
  hash_name: string;
}

const ConfirmarPresenca = ({ navigation }: any) => {
  // Estado para armazenar a lista de pessoas
  const StateConfirme = useContext(EventContext);
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);

  // Função para buscar pessoas
  useEffect(() => {
    const FetchData = async () => {
      if (StateConfirme?.convite?.hash_convite === undefined) {
        navigation.goBack();
        return; // Para garantir que a função não continue executando

      }
      
      const res = await GetConvidadosConvite(StateConfirme?.convite?.hash_convite || "");
      console.log(res)
      if (res.code != 200) {
        navigation.goBack();
        return; // Para garantir que a função não continue executando
      }
      setPessoas(res.convidado);
    };

    FetchData();
  }, [StateConfirme, navigation]);

  // Função para exibir alerta ao dar presente
  const Confirmarconvidado = async(hash_name:string,presensa:boolean)=>{
    const res= await ConfirmaPresença(hash_name,StateConfirme?.convite?.hash_convite||"",presensa)
  }

  // Renderiza cada item da lista
  const renderItem = ({ item }: { item: Pessoa }) => (
    <ElemetoList 
      id={item.id} 
      nome={item.nome} 
      hash_convite={item.hash_convite} 
      participara={item.participara} 
      hash_name={item.hash_name} 
      onPress={Confirmarconvidado} 
    />
  );
  function redirection(){
    Linking.openURL("https://link.mercadopago.com.br/chaanarebeca")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Convidados</Text>
      <TouchableOpacity style={[styles.button, { backgroundColor: "#FFC300" }]} onPress={redirection}>
        <Text style={styles.buttonText}>Lista De Presentes</Text>
      </TouchableOpacity>
      <FlatList
        data={pessoas}
        keyExtractor={(item) => item.hash_name}
        renderItem={renderItem}
      />
    </View>
  );
};

// Estilos da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 210, 233, 1)',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
});

// Componente para renderizar cada elemento da lista
const ElemetoList = ({ id, nome, hash_convite, participara, hash_name, onPress }: Pessoa & { onPress: (nome: string,presensa:boolean) => void }) => {
  console.log(participara)
  const [confirmar,ConfirmarSet]= useState(participara)
  const Confirmar =()=>{
    const confirm = !confirmar
    ConfirmarSet(confirm)

    onPress(hash_name,confirm)
  }
  return (
    <View style={styles2.itemContainer}>
      <Text style={styles2.nome}>{nome}</Text> {/* Exibe o nome da pessoa */}
      <TouchableOpacity
        style={[styles2.button, { backgroundColor: confirmar ? '#FF9800' : '#4CAF50' }]} // Muda a cor do botão
        onPress={Confirmar } // Chama a função passada como prop
      >
        <Text style={styles2.buttonText}>{confirmar ? 'Cancelar Presença' : 'Confirmar Presença'}</Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilos
const styles2 = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 15,
    marginVertical: 8,
    elevation: 3, // Sombreamento para efeito de profundidade
    flexDirection: 'column', // Alinha os elementos verticalmente
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', // Cor do texto
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center', // Centraliza o texto dentro do botão
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
});


export default ConfirmarPresenca;
