import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { JogoCard } from '../../components/JogoCard';

const JOGOS = [
  { id: '1', titulo: 'Elden Ring', categoria: 'RPG / Soulslike', plataforma: 'PC / PS5 / Xbox', nota: '9.8' },
  { id: '2', titulo: 'God of War Ragnarök', categoria: 'Ação / Aventura', plataforma: 'PS4 / PS5', nota: '9.6' },
  { id: '3', titulo: 'The Witcher 3: Wild Hunt', categoria: 'RPG de Ação', plataforma: 'PC / Consoles', nota: '9.7' },
  { id: '4', titulo: 'Hollow Knight', categoria: 'Metroidvania', plataforma: 'PC / Switch / Consoles', nota: '9.5' },
  { id: '5', titulo: 'Cyberpunk 2077', categoria: 'RPG Ficção Científica', plataforma: 'PC / PS5 / Xbox Series', nota: '8.9' },
];

export default function HomeScreen() {
  const [modoCompacto, setModoCompacto] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.tituloHeader}>GamerVault</Text>
        <TouchableOpacity 
          style={styles.botaoAlternar} 
          onPress={() => setModoCompacto(!modoCompacto)}
        >
          <Text style={styles.textoBotaoAlternar}>
            {modoCompacto ? 'Modo Normal' : 'Modo Compacto'}
          </Text>
        </TouchableOpacity>
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
          />
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC', paddingTop: 50 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  tituloHeader: { fontSize: 24, fontWeight: '800', color: '#0F172A' },
  botaoAlternar: { backgroundColor: '#4F46E5', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6 },
  textoBotaoAlternar: { color: '#FFFFFF', fontWeight: '600', fontSize: 12 },
  listContainer: { paddingHorizontal: 16, paddingBottom: 20 },
});