import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const DADOS_JOGOS = [
  { id: '1', titulo: 'Elden Ring', categoria: 'RPG / Soulslike', descricao: 'Um RPG de ação num mundo aberto épico criado por Hidetaka Miyazaki e George R. R. Martin.' },
  { id: '2', titulo: 'God of War Ragnarök', categoria: 'Ação / Aventura', descricao: 'Junte-se a Kratos e Atreus numa jornada mítica em busca de respostas antes do Ragnarök.' },
  { id: '3', titulo: 'The Witcher 3: Wild Hunt', categoria: 'RPG de Ação', descricao: 'Embarque na caçada à Ciri num mundo devastado pela guerra e cheio de monstros.' },
  { id: '4', titulo: 'Hollow Knight', categoria: 'Metroidvania', descricao: 'Explore o reino em ruínas de Hallownest nesta aventura 2D aclamada.' },
  { id: '5', titulo: 'Cyberpunk 2077', categoria: 'RPG Ficção Científica', descricao: 'Seja um mercenário fora da lei em Night City, uma megalópole obcecada por poder e modificações corporais.' },
];

export default function DetalhesScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // Busca o jogo correspondente ao parâmetro recebido da URL
  const jogo = DADOS_JOGOS.find((j) => j.id === id);

  return (
    <View style={styles.container}>
      {/* Botão de Retorno utilizando router.back() */}
      <TouchableOpacity style={styles.btnVoltar} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={20} color="#FFFFFF" />
        <Text style={styles.textoVoltar}>Voltar</Text>
      </TouchableOpacity>

      {jogo ? (
        <View style={styles.cardDetalhes}>
          <Text style={styles.idTag}>ID da Rota: {jogo.id}</Text>
          <Text style={styles.titulo}>{jogo.titulo}</Text>
          <Text style={styles.categoria}>{jogo.categoria}</Text>
          <Text style={styles.descricao}>{jogo.descricao}</Text>
        </View>
      ) : (
        <Text style={styles.erro}>Jogo não encontrado para o ID: {id}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    padding: 20,
    paddingTop: 50,
  },
  btnVoltar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
  },
  textoVoltar: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  cardDetalhes: {
    backgroundColor: '#1E293B',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#334155',
  },
  idTag: {
    color: '#38BDF8',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginBottom: 6,
  },
  categoria: {
    fontSize: 14,
    color: '#94A3B8',
    marginBottom: 16,
  },
  descricao: {
    fontSize: 15,
    color: '#CBD5E1',
    lineHeight: 22,
  },
  erro: {
    color: '#EF4444',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 40,
  },
});