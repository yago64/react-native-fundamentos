import { useUser } from '@/context/UserContext';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function PerfilScreen() {
  const { user } = useUser();

  if (!user) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>Nenhum perfil cadastrado</Text>
        <Text style={styles.emptySubtitle}>Acesse a aba Cadastro para preencher seus dados.</Text>
      </View>
    );
  }

  // Pega a primeira letra do nome para o avatar
  const inicial = user.nome ? user.nome.charAt(0).toUpperCase() : 'U';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header com Avatar */}
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{inicial}</Text>
        </View>
        <Text style={styles.userName}>{user.nome}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
      </View>

      {/* Cartão de Informações */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Informações Pessoais</Text>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Telefone</Text>
          <Text style={styles.infoValue}>{user.telefone || 'Não informado'}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Nascimento</Text>
          <Text style={styles.infoValue}>{user.dataNascimento || 'Não informado'}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>CPF</Text>
          <Text style={styles.infoValue}>{user.cpf || 'Não informado'}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 50, backgroundColor: '#F8FAFC' },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#F8FAFC' },
  emptyTitle: { fontSize: 20, fontWeight: '700', color: '#1E293B', marginBottom: 8 },
  emptySubtitle: { fontSize: 14, color: '#64748B', textAlign: 'center' },
  avatarContainer: { alignItems: 'center', marginBottom: 24 },
  avatar: { width: 84, height: 84, borderRadius: 42, backgroundColor: '#4F46E5', justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  avatarText: { fontSize: 36, fontWeight: 'bold', color: '#FFFFFF' },
  userName: { fontSize: 22, fontWeight: '800', color: '#0F172A' },
  userEmail: { fontSize: 14, color: '#64748B', marginTop: 2 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 20, borderWidth: 1, borderColor: '#E2E8F0' },
  cardTitle: { fontSize: 16, fontWeight: '700', color: '#1E293B', marginBottom: 16, borderBottomWidth: 1, borderBottomColor: '#F1F5F9', paddingBottom: 8 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#F8FAFC' },
  infoLabel: { fontSize: 14, color: '#64748B', fontWeight: '500' },
  infoValue: { fontSize: 14, color: '#0F172A', fontWeight: '600' },
});