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
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    dataNascimento: '',
    cpf: '',
  });

  const updateField = (field: keyof typeof form) => (value: string) =>
    setForm((current) => ({ ...current, [field]: value }));

  const handleCadastro = () => {
    saveUser(form);
    router.push('/perfil');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Área do Cabeçalho */}
      <View style={styles.headerArea}>
        <HeaderCadastro />
      </View>

      {/* Seção 1: Dados Pessoais */}
      <View style={styles.secaoCard}>
        <Text style={styles.tituloSecao}>Dados Pessoais</Text>
        <CampoNome value={form.nome} onChangeText={updateField('nome')} />
        <CampoEmail value={form.email} onChangeText={updateField('email')} />
        <CampoTelefone value={form.telefone} onChangeText={updateField('telefone')} />
        <CampoDataNascimento value={form.dataNascimento} onChangeText={updateField('dataNascimento')} />
        <CampoCpf value={form.cpf} onChangeText={updateField('cpf')} />
      </View>

      {/* Seção 2: Dados de Acesso */}
      <View style={styles.secaoCard}>
        <Text style={styles.tituloSecao}>Dados de Acesso</Text>
        <CampoSenha />
        <CampoConfirmarSenha />
      </View>

      {/* Área de Ações */}
      <View style={styles.areaAcoes}>
        <BotaoCadastro onPress={handleCadastro} />
      </View>
    </ScrollView>
  );
}

// Estilização focada na organização por espaçamentos
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: '#F8FAFC',
  },
  headerArea: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 20,
  },
  secaoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 18,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  tituloSecao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4F46E5',
    marginBottom: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  areaAcoes: {
    marginTop: 8,
    marginBottom: 32,
    marginHorizontal: 4,
  },
});