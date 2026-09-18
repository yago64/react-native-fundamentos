import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export interface JogoItem {
  id: string;
  titulo: string;
  categoria: string;
}

interface JogoCardProps {
  item: JogoItem;
}

export default function JogoCard({ item }: JogoCardProps) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`/detalhes/${item.id}`)}
      activeOpacity={0.7}
    >
      <View style={styles.infoContainer}>
        <Text style={styles.titulo}>{item.titulo}</Text>
        <Text style={styles.categoria}>{item.categoria}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#38BDF8" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E293B',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  infoContainer: {
    flex: 1,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F8FAFC',
  },
  categoria: {
    fontSize: 14,
    color: '#94A3B8',
    marginTop: 4,
  },
});