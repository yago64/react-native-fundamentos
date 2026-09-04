import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export function CampoCpf() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>CPF (Campo Adicional)</Text>
      <TextInput style={styles.input} placeholder="000.000.000-00" keyboardType="numeric" placeholderTextColor="#888" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 12 },
  label: { fontSize: 14, fontWeight: '600', color: '#333', marginBottom: 4 },
  input: { height: 44, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, paddingHorizontal: 12, backgroundColor: '#fff' },
});