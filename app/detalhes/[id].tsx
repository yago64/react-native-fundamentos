import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

// 1. Array de dados local com informacoes detalhadas dos jogos (Etapa 11)
const JOGOS = [
  {
    id: '1',
    titulo: 'Elden Ring',
    categoria: 'RPG / Soulslike',
    plataforma: 'PC / PS5 / Xbox',
    nota: '9.8',
    descricao: 'Um RPG de ação em mundo aberto sombrio e expansivo, onde você explora as Terras Intermédias para se tornar o Prístino Lorde.',
  },
  {
    id: '2',
    titulo: 'God of War Ragnarök',
    categoria: 'Ação / Aventura',
    plataforma: 'PS4 / PS5',
    nota: '9.6',
    descricao: 'Kratos e Atreus embarcam em uma jornada mítica pelos Nove Reinos enquanto o fim dos tempos se aproxima nas terras nórdicas.',
  },
  {
    id: '3',
    titulo: 'The Witcher 3: Wild Hunt',
    categoria: 'RPG de Ação',
    plataforma: 'PC / Consoles',
    nota: '9.7',
    descricao: 'Geralt de Rívia busca Ciri, a Criança da Profecia, enquanto navega por um mundo devastado pela guerra e repleto de monstros.',
  },
  {
    id: '4',
    titulo: 'Hollow Knight',
    categoria: 'Metroidvania',
    plataforma: 'PC / Switch / Consoles',
    nota: '9.5',
    descricao: 'Uma aventura de ação clássica em 2D por um vasto reino arruinado de insetos e heróis com estilo visual desenhado à mão.',
  },
  {
    id: '5',
    titulo: 'Cyberpunk 2077',
    categoria: 'RPG Ficção Científica',
    plataforma: 'PC / PS5 / Xbox Series',
    nota: '8.9',
    descricao: 'Um RPG de ação em mundo aberto ambientado na megalópole de Night City, uma metrópole obcecada por poder, glamour e modificações corporais.',
  },
];

export default function DetalhesScreen() {
  // 2. Etapa 10: Recupera o parâmetro 'id' vindo da rota dinâmica através do useLocalSearchParams
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // 3. Etapa 11: Localiza o jogo correspondente no array local usando o ID recebido
  const jogo = JOGOS.find((item) => item.id === id);

  // Tratamento de caso o item nao seja encontrado
  if (!jogo) {
    return (
      <View style={styles.container}>
        <Text style={styles.erroText}>Jogo não encontrado!</Text>
        <Button title="Voltar" onPress={() => router.back()} color="#4F46E5" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Detalhes do Jogo</Text>

      {/* Cartão de Detalhes exibindo o ID e as informações do item selecionado */}
      <View style={styles.card}>
        <Text style={styles.label}>Título:</Text>
        <Text style={styles.valorPrincipal}>{jogo.titulo}</Text>

        <Text style={styles.label}>Categoria:</Text>
        <Text style={styles.valor}>{jogo.categoria}</Text>

        <Text style={styles.label}>ID:</Text>
        <Text style={styles.valor}>{jogo.id}</Text>

        <Text style={styles.label}>Plataforma:</Text>
        <Text style={styles.valor}>{jogo.plataforma}</Text>

        <Text style={styles.label}>Nota:</Text>
        <Text style={styles.valor}>{jogo.nota}</Text>

        <Text style={styles.label}>Descrição:</Text>
        <Text style={styles.descricao}>{jogo.descricao}</Text>
      </View>

      {/* 4. Etapa 12: Botão de navegação de retorno para a tela anterior via router.back() */}
      <TouchableOpacity 
        style={styles.botaoVoltar} 
        onPress={() => router.back()}
        activeOpacity={0.8}
      >
        <Text style={styles.textoBotao}>[ Voltar ]</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0F172A',
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#1E293B',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#334155',
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    color: '#94A3B8',
    marginTop: 12,
    fontWeight: '600',
  },
  valorPrincipal: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#38BDF8',
    marginTop: 4,
  },
  valor: {
    fontSize: 16,
    color: '#F1F5F9',
    marginTop: 2,
    fontWeight: '500',
  },
  descricao: {
    fontSize: 14,
    color: '#CBD5E1',
    marginTop: 4,
    lineHeight: 20,
  },
  erroText: {
    fontSize: 18,
    color: '#EF4444',
    textAlign: 'center',
    marginBottom: 20,
  },
  botaoVoltar: {
    backgroundColor: '#334155',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'center',
  },
  textoBotao: {
    color: '#F8FAFC',
    fontWeight: 'bold',
    fontSize: 16,
  },
});