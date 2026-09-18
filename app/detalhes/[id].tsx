import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function DetalhesScreen() {
    
  const { id } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalhes do Jogo</Text>
      
      <View style={styles.cardId}>
        <Text style={styles.textoId}>ID selecionado: {id}</Text>
      </View>

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => router.back()}>
        <Text style={styles.textoBotao}>← Voltar para a Lista</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 20,
  },
  cardId: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C7D2FE',
    marginBottom: 30,
  },
  textoId: {
    fontSize: 18,
    fontWeight: '700',
    color: '#4F46E5',
  },
  botaoVoltar: {
    backgroundColor: '#0F172A',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
});