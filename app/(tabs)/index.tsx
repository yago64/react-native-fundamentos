import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import JogoCard, { JogoItem } from '@/components/JogoCard';

// Dados da Lista
const DADOS_JOGOS: JogoItem[] = [
  { id: '1', titulo: 'Elden Ring', categoria: 'RPG / Soulslike' },
  { id: '2', titulo: 'God of War Ragnarök', categoria: 'Ação / Aventura' },
  { id: '3', titulo: 'The Witcher 3: Wild Hunt', categoria: 'RPG de Ação' },
  { id: '4', titulo: 'Hollow Knight', categoria: 'Metroidvania' },
  { id: '5', titulo: 'Cyberpunk 2077', categoria: 'RPG Ficção Científica' },
];

// Requisito da Etapa 7: Tecnologias Utilizadas
const PACOTES_UTILIZADOS = [
  'Expo Router (Navegação)',
  '@expo/vector-icons (Ícones)',
  'React Native Paper (Componentes)',
  'Date-fns (Datas)',
  'Uuid (Identificadores)',
];

export default function HomeScreen() {
  // State com os dados dos jogos (Etapa 13)
  const [listaJogos] = useState<JogoItem[]>(DADOS_JOGOS);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🎮 Biblioteca GamerVault</Text>

      {/* FlatList com o componente reutilizavel JogoCard */}
      <FlatList
        data={listaJogos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <JogoCard item={item} />}
        contentContainerStyle={styles.listContainer}

        ListFooterComponent={
          <View style={styles.techSection}>
            <Text style={styles.techTitle}>Tecnologias utilizadas:</Text>
            {PACOTES_UTILIZADOS.map((pacote, index) => (
              <Text key={index} style={styles.techItem}>
                • {pacote}
              </Text>
            ))}
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 24,
  },
  techSection: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#1E293B',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },
  techTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#38BDF8',
    marginBottom: 8,
  },
  techItem: {
    fontSize: 14,
    color: '#94A3B8',
    marginBottom: 4,
  },
});