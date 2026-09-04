import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export function CampoDataNascimento({ value, onChangeText }: { value: string; onChangeText: (value: string) => void }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Data de Nascimento</Text>
      <TextInput value={value} onChangeText={onChangeText} style={styles.input} placeholder="DD/MM/AAAA" placeholderTextColor="#888" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 12 },
  label: { fontSize: 14, fontWeight: '600', color: '#333', marginBottom: 4 },
  input: { height: 44, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, paddingHorizontal: 12, backgroundColor: '#fff' },
});