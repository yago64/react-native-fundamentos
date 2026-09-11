import { useUser } from '@/context/UserContext';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
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

  const [campoFocado, setCampoFocado] = useState<string | null>(null);
  const [aceitaTermos, setAceitaTermos] = useState(false);

  const handleTextChange = (field: keyof typeof form) => (value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleFocus = (field: string) => () => {
    setCampoFocado(field);
  };

  const handleBlur = () => {
    setCampoFocado(null);
  };

  const handleCadastro = () => {
    if (!aceitaTermos) {
      const msg = 'Você precisa aceitar os termos de uso para continuar.';
      if (Platform.OS === 'web') {
        alert(msg);
      } else {
        Alert.alert('Aviso', msg);
      }
      return;
    }
    saveUser(form);
    const msgSuccess = 'Cadastro realizado com sucesso!';
    if (Platform.OS === 'web') {
      alert(msgSuccess);
    } else {
      Alert.alert('Sucesso', msgSuccess);
    }
    router.push('/perfil');
  };

  const handleLongPressCadastro = () => {
    const msg = 'Pressão prolongada detectada! Dados preenchidos automaticamente.';
    if (Platform.OS === 'web') {
      alert(msg);
    } else {
      Alert.alert('Modo Rápido', msg);
    }
    setForm({
      nome: 'Jogador Exemplo',
      email: 'gamer@teste.com',
      telefone: '(11) 99999-9999',
      dataNascimento: '01/01/2000',
      cpf: '123.456.789-00',
      senha: '123456',
      confirmarSenha: '123456',
    });
  };

  const handlePress = () => {
    handleCadastro();
  };

  const handleLongPress = () => {
    handleLongPressCadastro();
  };

  const handleCancelar = () => {
    router.back();
  };

  const handleSwitchChange = (value: boolean) => {
    setAceitaTermos(value);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerArea}>
        <Text style={styles.tituloPrincipal}>GamerVault</Text>
        <Text style={styles.subtitulo}>Crie sua conta interativa</Text>
      </View>

      <View style={styles.secaoCard}>
        <Text style={styles.tituloSecao}>Dados Pessoais</Text>

        <Text style={styles.label}>Nome Completo</Text>
        <TextInput
          style={[styles.input, campoFocado === 'nome' && styles.inputFocado]}
          placeholder="Digite seu nome completo"
          placeholderTextColor="#94A3B8"
          value={form.nome}
          onChangeText={handleTextChange('nome')}
          onFocus={handleFocus('nome')}
          onBlur={handleBlur}
        />

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={[styles.input, campoFocado === 'email' && styles.inputFocado]}
          placeholder="seu@email.com"
          placeholderTextColor="#94A3B8"
          keyboardType="email-address"
          autoCapitalize="none"
          value={form.email}
          onChangeText={handleTextChange('email')}
          onFocus={handleFocus('email')}
          onBlur={handleBlur}
        />

        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={[styles.input, campoFocado === 'telefone' && styles.inputFocado]}
          placeholder="(00) 00000-0000"
          placeholderTextColor="#94A3B8"
          keyboardType="phone-pad"
          value={form.telefone}
          onChangeText={handleTextChange('telefone')}
          onFocus={handleFocus('telefone')}
          onBlur={handleBlur}
        />

        <Text style={styles.label}>Data de Nascimento</Text>
        <TextInput
          style={[styles.input, campoFocado === 'dataNascimento' && styles.inputFocado]}
          placeholder="DD/MM/AAAA"
          placeholderTextColor="#94A3B8"
          value={form.dataNascimento}
          onChangeText={handleTextChange('dataNascimento')}
          onFocus={handleFocus('dataNascimento')}
          onBlur={handleBlur}
        />

        <Text style={styles.label}>CPF</Text>
        <TextInput
          style={[styles.input, campoFocado === 'cpf' && styles.inputFocado]}
          placeholder="000.000.000-00"
          placeholderTextColor="#94A3B8"
          keyboardType="numeric"
          value={form.cpf}
          onChangeText={handleTextChange('cpf')}
          onFocus={handleFocus('cpf')}
          onBlur={handleBlur}
        />
      </View>

      <View style={styles.secaoCard}>
        <Text style={styles.tituloSecao}>Dados de Acesso</Text>

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={[styles.input, campoFocado === 'senha' && styles.inputFocado]}
          placeholder="••••••••"
          placeholderTextColor="#94A3B8"
          secureTextEntry
          value={form.senha}
          onChangeText={handleTextChange('senha')}
          onFocus={handleFocus('senha')}
          onBlur={handleBlur}
        />

        <Text style={styles.label}>Confirmar Senha</Text>
        <TextInput
          style={[styles.input, campoFocado === 'confirmarSenha' && styles.inputFocado]}
          placeholder="••••••••"
          placeholderTextColor="#94A3B8"
          secureTextEntry
          value={form.confirmarSenha}
          onChangeText={handleTextChange('confirmarSenha')}
          onFocus={handleFocus('confirmarSenha')}
          onBlur={handleBlur}
          returnKeyType="send"
          onSubmitEditing={handleCadastro}
        />
      </View>

      <View style={styles.secaoSwitch}>
        <Text style={styles.labelSwitch}>Li e concordo com os Termos</Text>
        <Switch
          value={aceitaTermos}
          onValueChange={handleSwitchChange}
          trackColor={{ false: '#CBD5E1', true: '#818CF8' }}
          thumbColor={aceitaTermos ? '#4F46E5' : '#F1F5F9'}
        />
      </View>

      <View style={styles.areaAcoes}>
        <TouchableOpacity style={styles.botaoCancelar} onPress={handleCancelar}>
          <Text style={styles.textoBotaoCancelar}>Cancelar</Text>
        </TouchableOpacity>

        <Pressable
          style={({ pressed }) => [
            styles.botaoCadastrar,
            pressed && styles.botaoPressionado,
          ]}
          onPress={handlePress}
          onLongPress={handleLongPress}
          delayLongPress={800}
        >
          <Text style={styles.textoBotaoCadastrar}>Cadastrar</Text>
        </Pressable>
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
  inputFocado: {
    borderColor: '#4F46E5',
    borderWidth: 2,
    backgroundColor: '#EEF2FF',
  },
  secaoSwitch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  labelSwitch: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
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
  botaoPressionado: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
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