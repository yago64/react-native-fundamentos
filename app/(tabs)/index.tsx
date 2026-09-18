import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const JOGOS = [
  { id: '1', titulo: 'Elden Ring', categoria: 'RPG / Soulslike', plataforma: 'PC / PS5 / Xbox', nota: '9.8' },
  { id: '2', titulo: 'God of War Ragnarök', categoria: 'Ação / Aventura', plataforma: 'PS4 / PS5', nota: '9.6' },
  { id: '3', titulo: 'The Witcher 3: Wild Hunt', categoria: 'RPG de Ação', plataforma: 'PC / Consoles', nota: '9.7' },
  { id: '4', titulo: 'Hollow Knight', categoria: 'Metroidvania', plataforma: 'PC / Switch / Consoles', nota: '9.5' },
  { id: '5', titulo: 'Cyberpunk 2077', categoria: 'RPG Ficção Científica', plataforma: 'PC / PS5 / Xbox Series', nota: '8.9' },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>GamerVault</Text>
      <Text style={styles.headerSubtitle}>Sua Biblioteca de Jogos</Text>

      {/* Implementação do FlatList (Etapa 3) */}
      <FlatList
        data={JOGOS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardItem}>
            <Text style={styles.tituloJogo}>{item.titulo}</Text>
            <Text style={styles.categoriaJogo}>{item.categoria} • ★ {item.nota}</Text>
          </View>
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
  listContainer: { paddingBottom: 20 },
  cardItem: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  tituloJogo: { fontSize: 16, fontWeight: '700', color: '#0F172A' },
  categoriaJogo: { fontSize: 13, color: '#64748B', marginTop: 4 },
});