import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { Ipresente } from '../../model/Convites';
import { GetPresente } from '../../controller/Connection/ConnectionPresente';
import { EventContext } from '../../States/ConfirmeUserState';

// Define o tipo de presente
interface Presente extends Ipresente{
  selecionado: boolean; // Indica se o presente foi selecionado
}

const SelecionarPresentes = () => {
  const [presentes, setPresentes] = useState<Presente[]>([]);
  const ConviteState =  useContext(EventContext);
  // Função para buscar a lista de presentes
  const fetchPresentes = async () => {
    try {
      if(!ConviteState?.convite?.hash_evento){
          return
      }
        const res = await GetPresente(ConviteState?.convite?.hash_evento||"")
        console.log(res)
      setPresentes(res)
    } catch (error) {
      console.error('Erro ao buscar presentes:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao buscar a lista de presentes.');
    }
  };

  // Efeito para buscar presentes ao montar o componente
  useEffect(() => {
    fetchPresentes();
  }, []);

  // Função para alternar a seleção do presente
  const togglePresente = (id: number) => {
    setPresentes(prevPresentes =>
      prevPresentes.map(presente =>
        presente.id === id
          ? { ...presente, selecionado: !presente.selecionado } // Alterna a seleção
          : presente // Retorna o presente inalterado
      )
    );
  };
  const Submit= async(valor:number, ) =>{
  }
  // Renderiza cada item da lista de presentes
  const renderItem = ({ item }: { item: Presente }) => (
    <ElementoPresente
          id={item.id}
          nome={item.nome}
          selecionado={item.selecionado}
          onPress={togglePresente} 
          hash_presente={item.hash_presente} 
          hash_envento={item.hash_envento} 
          preco={item.preco} 
          max_selecionados={item.max_selecionados} 
          n_selecionados={item.n_selecionados}    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione os Presentes</Text>
      <FlatList
        data={presentes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Aqui você pode implementar a lógica para finalizar a seleção, como enviar os dados para o servidor
          Alert.alert('Sucesso', 'Presentes selecionados com sucesso!');
        }}
      >
        <Text style={styles.buttonText}>Confirmar Seleção</Text>
      </TouchableOpacity>
    </View>
  );
};

// Componente para renderizar cada elemento da lista de presentes
const ElementoPresente = ({ id, nome, selecionado,preco,max_selecionados,n_selecionados, onPress }: Presente & { onPress: (id: number) => void }) => {
  if(max_selecionados<=n_selecionados){
    return
  }
  return (
    <TouchableOpacity style={[styles.itemContainer, { backgroundColor: selecionado ? '#FF9800' : '#ffffff' }]} onPress={() => onPress(id)}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.nome}>{preco+"$"}</Text>
    </TouchableOpacity>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#rgba(255, 210, 233, 1)',
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
    borderRadius: 8,
    padding: 15,
    marginVertical: 8,
    elevation: 3,
  },
  nome: {
    fontSize: 18,
    color: '#333',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default SelecionarPresentes;
