import { JogoCard } from '@/components/JogoCard';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Switch, Text, View } from 'react-native';

const JOGOS = [
  {
    id: '1',
    titulo: 'Elden Ring',
    categoria: 'RPG / Soulslike',
    plataforma: 'PC / PS5 / Xbox',
    nota: '9.8',
    descricao: 'Um RPG de ação em mundo aberto focado em exploração e combates desafiadores.',
  },
  {
    id: '2',
    titulo: 'God of War Ragnarök',
    categoria: 'Ação / Aventura',
    plataforma: 'PS4 / PS5',
    nota: '9.6',
    descricao: 'Jornada épica de Kratos e Atreus pelos nove reinos da mitologia nórdica.',
  },
  {
    id: '3',
    titulo: 'The Witcher 3: Wild Hunt',
    categoria: 'RPG de Ação',
    plataforma: 'PC / Consoles',
    nota: '9.7',
    descricao: 'Geralt de Rívia busca a Criança da Profecia em um mundo devastado pela guerra.',
  },
  {
    id: '4',
    titulo: 'Hollow Knight',
    categoria: 'Metroidvania',
    plataforma: 'PC / Switch / Consoles',
    nota: '9.5',
    descricao: 'Aventura 2D em um vasto reino subterrâneo em ruínas habitado por insetos e heróis.',
  },
  {
    id: '5',
    titulo: 'Cyberpunk 2077',
    categoria: 'RPG Ficção Científica',
    plataforma: 'PC / PS5 / Xbox Series',
    nota: '8.9',
    descricao: 'Mergulhe na metrópole futurista de Night City como um mercenário fora da lei.',
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const [modoCompacto, setModoCompacto] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>GamerVault</Text>
      <Text style={styles.headerSubtitle}>Sua Biblioteca de Jogos</Text>

      <View style={styles.switchArea}>
        <Text style={styles.switchLabel}>
          {modoCompacto ? 'Modo Compacto Ativado' : 'Modo Normal'}
        </Text>
        <Switch
          value={modoCompacto}
          onValueChange={setModoCompacto}
          trackColor={{ false: '#CBD5E1', true: '#818CF8' }}
          thumbColor={modoCompacto ? '#4F46E5' : '#F1F5F9'}
        />
      </View>

      <FlatList
        data={JOGOS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <JogoCard
            id={item.id}
            titulo={item.titulo}
            categoria={item.categoria}
            plataforma={item.plataforma}
            nota={item.nota}
            modoCompacto={modoCompacto}
            onPress={() =>
              router.push({
                pathname: '/detalhes/[id]' as any,
                params: { id: item.id },
              })
            }
          />
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50, backgroundColor: '#F8FAFC' },
  headerTitle: { fontSize: 26, fontWeight: '800', color: '#4F46E5' },
  headerSubtitle: { fontSize: 14, color: '#64748B', marginBottom: 16 },
  switchArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  switchLabel: { fontSize: 14, fontWeight: '600', color: '#334155' },
  listContainer: { paddingBottom: 20 },
});
