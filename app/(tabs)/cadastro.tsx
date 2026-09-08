import { useUser } from '@/context/UserContext';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function CadastroScreen() {
  const router = useRouter();
  const { saveUser } = useUser();

  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    dataNascimento: '',
    cpf: '',
    senha: '',
    confirmarSenha: '',
  });

  const updateField = (field: keyof typeof form) => (value: string) =>
    setForm((current) => ({ ...current, [field]: value }));

  const handleCadastro = () => {
    saveUser(form);
    const msg = 'Cadastro realizado com sucesso!';
    Platform.OS === 'web' ? alert(msg) : Alert.alert('Sucesso', msg);
    router.push('/perfil');
  };

  const handleCancelar = () => {
    router.back();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerArea}>
        <Text style={styles.tituloPrincipal}>GamerVault</Text>
        <Text style={styles.subtitulo}>Crie sua conta para começar</Text>
      </View>

      <View style={styles.secaoCard}>
        <Text style={styles.tituloSecao}>Dados Pessoais</Text>

        <Text style={styles.label}>Nome Completo</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome completo"
          placeholderTextColor="#94A3B8"
          value={form.nome}
          onChangeText={updateField('nome')}
        />

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="seu@email.com"
          placeholderTextColor="#94A3B8"
          keyboardType="email-address"
          autoCapitalize="none"
          value={form.email}
          onChangeText={updateField('email')}
        />

        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          placeholder="(00) 00000-0000"
          placeholderTextColor="#94A3B8"
          keyboardType="phone-pad"
          value={form.telefone}
          onChangeText={updateField('telefone')}
        />

        <Text style={styles.label}>Data de Nascimento</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/AAAA"
          placeholderTextColor="#94A3B8"
          value={form.dataNascimento}
          onChangeText={updateField('dataNascimento')}
        />

        <Text style={styles.label}>CPF</Text>
        <TextInput
          style={styles.input}
          placeholder="000.000.000-00"
          placeholderTextColor="#94A3B8"
          keyboardType="numeric"
          value={form.cpf}
          onChangeText={updateField('cpf')}
        />
      </View>

      <View style={styles.secaoCard}>
        <Text style={styles.tituloSecao}>Dados de Acesso</Text>

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          placeholderTextColor="#94A3B8"
          secureTextEntry
          value={form.senha}
          onChangeText={updateField('senha')}
        />

        <Text style={styles.label}>Confirmar Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          placeholderTextColor="#94A3B8"
          secureTextEntry
          value={form.confirmarSenha}
          onChangeText={updateField('confirmarSenha')}
        />
      </View>

      <View style={styles.areaAcoes}>
        <TouchableOpacity style={styles.botaoCancelar} onPress={handleCancelar}>
          <Text style={styles.textoBotaoCancelar}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoCadastrar} onPress={handleCadastro}>
          <Text style={styles.textoBotaoCadastrar}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#F8FAFC',
  },
  headerArea: {
    alignItems: 'center',
    marginBottom: 20,
  },
  tituloPrincipal: {
    fontSize: 26,
    fontWeight: '800',
    color: '#4F46E5',
  },
  subtitulo: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
  },
  secaoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  tituloSecao: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4F46E5',
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    paddingBottom: 6,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#475569',
    marginBottom: 4,
    marginTop: 8,
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#FFFFFF',
    fontSize: 14,
    color: '#0F172A',
  },
  areaAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
    marginTop: 8,
    marginBottom: 32,
  },
  botaoCancelar: {
    flex: 1,
    height: 48,
    backgroundColor: '#E2E8F0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoCadastrar: {
    flex: 1,
    height: 48,
    backgroundColor: '#4F46E5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotaoCancelar: {
    color: '#334155',
    fontSize: 15,
    fontWeight: '600',
  },
  textoBotaoCadastrar: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});