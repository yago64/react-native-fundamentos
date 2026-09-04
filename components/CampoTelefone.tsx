import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export function CampoTelefone({ value, onChangeText }: { value: string; onChangeText: (value: string) => void }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Telefone</Text>
      <TextInput value={value} onChangeText={onChangeText} style={styles.input} placeholder="(61) 99999-9999" keyboardType="phone-pad" placeholderTextColor="#888" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 12 },
  label: { fontSize: 14, fontWeight: '600', color: '#333', marginBottom: 4 },
  input: { height: 44, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, paddingHorizontal: 12, backgroundColor: '#fff' },
});