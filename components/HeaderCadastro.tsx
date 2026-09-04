import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function HeaderCadastro({ titulo = 'Cadastro de Usuário', subtitulo = 'Crie sua conta no GamerVault' }: { titulo?: string; subtitulo?: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      {subtitulo ? <Text style={styles.subtitulo}>{subtitulo}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 20, alignItems: 'center' },
  titulo: { fontSize: 24, fontWeight: 'bold', color: '#6200ee' },
  subtitulo: { fontSize: 14, color: '#666', marginTop: 4 },
});