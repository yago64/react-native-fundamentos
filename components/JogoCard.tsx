import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type JogoCardProps = {
  id: string;
  titulo: string;
  categoria: string;
  plataforma: string;
  nota: string;
  modoCompacto?: boolean;
  onPress: () => void;
};

export function JogoCard({
  titulo,
  categoria,
  plataforma,
  nota,
  modoCompacto = false,
  onPress,
}: JogoCardProps) {
  return (
    <TouchableOpacity
      style={[styles.card, modoCompacto && styles.cardCompacto]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.headerCard}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.nota}>★ {nota}</Text>
      </View>
      
      {!modoCompacto && (
        <View style={styles.detalhes}>
          <Text style={styles.badge}>{categoria}</Text>
          <Text style={styles.plataforma}>{plataforma}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  cardCompacto: {
    padding: 10,
    marginBottom: 8,
  },
  headerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
  },
  nota: {
    fontSize: 14,
    fontWeight: '700',
    color: '#EAB308',
  },
  detalhes: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },
  badge: {
    backgroundColor: '#EEF2FF',
    color: '#4F46E5',
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  plataforma: {
    fontSize: 12,
    color: '#64748B',
  },
});