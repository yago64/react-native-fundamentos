import { BotaoCadastro } from '@/components/BotaoCadastro';
import { CampoConfirmarSenha } from '@/components/CampoConfirmarSenha';
import { CampoCpf } from '@/components/CampoCpf';
import { CampoDataNascimento } from '@/components/CampoDataNascimento';
import { CampoEmail } from '@/components/CampoEmail';
import { CampoNome } from '@/components/CampoNome';
import { CampoSenha } from '@/components/CampoSenha';
import { CampoTelefone } from '@/components/CampoTelefone';
import { HeaderCadastro } from '@/components/HeaderCadastro';
import { useUser } from '@/context/UserContext';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function CadastroScreen() {
  const router = useRouter();
  const { saveUser } = useUser();
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', dataNascimento: '', cpf: '' });
  const updateField = (field: keyof typeof form) => (value: string) => setForm((current) => ({ ...current, [field]: value }));

  const handleCadastro = () => {
    saveUser(form);
    router.push('/perfil');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeaderCadastro />

      <View style={styles.secaoCard}>
        <Text style={styles.tituloSecao}>Dados Pessoais</Text>
        <CampoNome value={form.nome} onChangeText={updateField('nome')} />
        <CampoEmail value={form.email} onChangeText={updateField('email')} />
        <CampoTelefone value={form.telefone} onChangeText={updateField('telefone')} />
        <CampoDataNascimento value={form.dataNascimento} onChangeText={updateField('dataNascimento')} />
        <CampoCpf value={form.cpf} onChangeText={updateField('cpf')} />
      </View>

      <View style={styles.secaoCard}>
        <Text style={styles.tituloSecao}>Dados de Acesso</Text>
        <CampoSenha />
        <CampoConfirmarSenha />
      </View>

      <BotaoCadastro onPress={handleCadastro} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 40,
    backgroundColor: '#f0f2f5',
  },
  secaoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  tituloSecao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6200ee',
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 6,
  },
});