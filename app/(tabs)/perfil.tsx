import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useUser } from '@/context/UserContext';

export default function PerfilScreen() {
  const { user } = useUser();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Perfil</Text>
      {user ? (
        <View style={styles.card}>
          <ProfileRow label="Nome" value={user.nome} />
          <ProfileRow label="E-mail" value={user.email} />
          <ProfileRow label="Telefone" value={user.telefone} />
          <ProfileRow label="Data de nascimento" value={user.dataNascimento} />
          <ProfileRow label="CPF" value={user.cpf} />
        </View>
      ) : (
        <Text style={styles.empty}>Nenhum cadastro realizado ainda.</Text>
      )}
    </View>
  );
}

function ProfileRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value || 'Não informado'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#f0f2f5' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#6200ee', marginBottom: 20 },
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 18, elevation: 2 },
  row: { paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#eee' },
  label: { fontSize: 13, color: '#666', marginBottom: 4 },
  value: { fontSize: 16, color: '#222' },
  empty: { color: '#666', fontSize: 16 },
});