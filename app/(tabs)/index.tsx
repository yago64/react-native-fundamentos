import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Switch } from 'react-native';
import { JogoCard } from '@/components/JogoCard';

const JOGOS = [
  { id: '1', titulo: 'Elden Ring', categoria: 'RPG / Soulslike', plataforma: 'PC / PS5 / Xbox', nota: '9.8' },
  { id: '2', titulo: 'God of War Ragnarök', categoria: 'Ação / Aventura', plataforma: 'PS4 / PS5', nota: '9.6' },
  { id: '3', titulo: 'The Witcher 3: Wild Hunt', categoria: 'RPG de Ação', plataforma: 'PC / Consoles', nota: '9.7' },
  { id: '4', titulo: 'Hollow Knight', categoria: 'Metroidvania', plataforma: 'PC / Switch / Consoles', nota: '9.5' },
  { id: '5', titulo: 'Cyberpunk 2077', categoria: 'RPG Ficção Científica', plataforma: 'PC / PS5 / Xbox Series', nota: '8.9' },
];

export default function HomeScreen() {
  // Declaração do State (Etapa 5)
  const [modoCompacto, setModoCompacto] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>GamerVault</Text>
      <Text style={styles.headerSubtitle}>Sua Biblioteca de Jogos</Text>

      {/* Controle de Interação / Switch (Etapa 5) */}
      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>
          {modoCompacto ? 'Modo Compacto' : 'Modo Detalhado'}
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
            titulo={item.titulo}
            categoria={item.categoria}
            plataforma={item.plataforma}
            nota={item.nota}
            modoCompacto={modoCompacto}
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
  headerSubtitle: { fontSize: 14, color: '#64748B', marginBottom: 12 },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  switchText: { fontSize: 14, fontWeight: '600', color: '#334155' },
  listContainer: { paddingBottom: 20 },
});