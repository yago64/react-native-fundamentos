import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router'; // Importação do Link (Etapa 7)

type JogoCardProps = {
  id: string; // Adicionado id para a rota
  titulo: string;
  categoria: string;
  plataforma: string;
  nota: string;
  modoCompacto?: boolean;
};

export function JogoCard({ id, titulo, categoria, plataforma, nota, modoCompacto }: JogoCardProps) {
  if (modoCompacto) {
    return (
      <View style={[styles.card, styles.cardCompacto]}>
        <View style={{ flex: 1 }}>
          <Text style={styles.titulo}>{titulo}</Text>
        </View>

        {/* Navegação declarativa com Link (Etapa 7) */}
        <Link href={`/detalhes/${id}`} style={styles.linkDetalhes}>
          Ver detalhes
        </Link>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <View style={styles.headerCard}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.nota}>★ {nota}</Text>
      </View>
      <Text style={styles.categoria}>{categoria}</Text>
      <Text style={styles.plataforma}>{plataforma}</Text>

      {/* Navegação declarativa com Link (Etapa 7) */}
      <Link href={`/detalhes/${id}`} style={styles.linkDetalhes}>
        Ver detalhes →
      </Link>
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
  cardCompacto: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
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
  linkDetalhes: {
    marginTop: 10,
    color: '#4F46E5',
    fontWeight: '700',
    fontSize: 14,
  },
});