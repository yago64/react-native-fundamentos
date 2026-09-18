import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

const JOGOS = [
  { id: '1', titulo: 'Elden Ring', categoria: 'RPG / Soulslike', plataforma: 'PC / PS5 / Xbox', nota: '9.8', descricao: 'Um RPG de ação em mundo aberto focado em exploração e combates desafiadores.' },
  { id: '2', titulo: 'God of War Ragnarök', categoria: 'Ação / Aventura', plataforma: 'PS4 / PS5', nota: '9.6', descricao: 'Jornada épica de Kratos e Atreus pelos nove reinos da mitologia nórdica.' },
  { id: '3', titulo: 'The Witcher 3: Wild Hunt', categoria: 'RPG de Ação', plataforma: 'PC / Consoles', nota: '9.7', descricao: 'Geralt de Rívia busca a Criança da Profecia em um mundo devastado pela guerra.' },
  { id: '4', titulo: 'Hollow Knight', categoria: 'Metroidvania', plataforma: 'PC / Switch / Consoles', nota: '9.5', descricao: 'Aventura 2D em um vasto reino subterrâneo em ruínas habitado por insetos e heróis.' },
  { id: '5', titulo: 'Cyberpunk 2077', categoria: 'RPG Ficção Científica', plataforma: 'PC / PS5 / Xbox Series', nota: '8.9', descricao: 'Mergulhe na metrópole futurista de Night City como um mercenário fora da lei.' },
];

export default function DetalhesScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const jogo = JOGOS.find((item) => item.id === id);

  if (!jogo) {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Jogo não encontrado!</Text>
        <TouchableOpacity style={styles.botaoVoltar} onPress={() => router.back()}>
          <Text style={styles.textoBotao}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botaoVoltar} onPress={() => router.back()}>
        <Text style={styles.textoBotao}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>{jogo.titulo}</Text>
      <Text style={styles.categoria}>{jogo.categoria}</Text>
      <Text style={styles.nota}>Avaliação: ★ {jogo.nota}</Text>
      <Text style={styles.plataforma}>Plataformas: {jogo.plataforma}</Text>

      <View style={styles.cardDescricao}>
        <Text style={styles.subtitulo}>Sobre o jogo</Text>
        <Text style={styles.descricao}>{jogo.descricao}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60, backgroundColor: '#F8FAFC' },
  botaoVoltar: { marginBottom: 20, alignSelf: 'flex-start' },
  textoBotao: { color: '#4F46E5', fontWeight: '700', fontSize: 16 },
  titulo: { fontSize: 24, fontWeight: '800', color: '#0F172A' },
  categoria: { fontSize: 14, color: '#4F46E5', fontWeight: '600', marginTop: 4 },
  nota: { fontSize: 15, fontWeight: '700', color: '#EAB308', marginTop: 8 },
  plataforma: { fontSize: 13, color: '#64748B', marginTop: 4 },
  cardDescricao: { marginTop: 24, padding: 16, backgroundColor: '#FFFFFF', borderRadius: 10, borderWidth: 1, borderColor: '#E2E8F0' },
  subtitulo: { fontSize: 16, fontWeight: '700', color: '#0F172A', marginBottom: 8 },
  descricao: { fontSize: 14, color: '#334155', lineHeight: 20 },
});