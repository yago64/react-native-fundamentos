import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function HeaderCadastro() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Usuário</Text>
      <Text style={styles.subtitulo}>Crie sua conta no GamerVault</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 20, alignItems: 'center' },
  titulo: { fontSize: 24, fontWeight: 'bold', color: '#6200ee' },
  subtitulo: { fontSize: 14, color: '#666', marginTop: 4 },
});