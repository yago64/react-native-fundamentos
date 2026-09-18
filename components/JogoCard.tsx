import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type JogoCardProps = {
  titulo: string;
  categoria: string;
  plataforma: string;
  nota: string;
};

export function JogoCard({ titulo, categoria, plataforma, nota }: JogoCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.headerCard}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.nota}>★ {nota}</Text>
      </View>
      <Text style={styles.categoria}>{categoria}</Text>
      <Text style={styles.plataforma}>{plataforma}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  headerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titulo: { fontSize: 16, fontWeight: '700', color: '#0F172A' },
  nota: { fontSize: 14, fontWeight: '700', color: '#EAB308' },
  categoria: { fontSize: 13, color: '#4F46E5', marginTop: 4, fontWeight: '600' },
  plataforma: { fontSize: 12, color: '#64748B', marginTop: 2 },
});