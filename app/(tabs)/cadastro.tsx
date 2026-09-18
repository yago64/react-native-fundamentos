import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Switch,
  Pressable,
  Alert,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useUser } from '@/context/UserContext';
import { HeaderCadastro } from '@/components/HeaderCadastro';
import { CampoNome } from '@/components/CampoNome';
import { CampoEmail } from '@/components/CampoEmail';
import { CampoTelefone } from '@/components/CampoTelefone';
import { CampoDataNascimento } from '@/components/CampoDataNascimento';
import { CampoCpf } from '@/components/CampoCpf';
import { CampoSenha } from '@/components/CampoSenha';
import { CampoConfirmarSenha } from '@/components/CampoConfirmarSenha';

type CampoProps = {
  value: string;
  onChangeText: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onSubmitEditing?: () => void;
};

const CampoNomeComEventos = CampoNome as unknown as React.ComponentType<CampoProps>;
const CampoEmailComEventos = CampoEmail as unknown as React.ComponentType<CampoProps>;
const CampoTelefoneComEventos = CampoTelefone as unknown as React.ComponentType<CampoProps>;
const CampoDataNascimentoComEventos = CampoDataNascimento as unknown as React.ComponentType<CampoProps>;
const CampoCpfComEventos = CampoCpf as unknown as React.ComponentType<CampoProps>;
const CampoSenhaComEventos = CampoSenha as unknown as React.ComponentType<CampoProps>;
const CampoConfirmarSenhaComEventos = CampoConfirmarSenha as unknown as React.ComponentType<CampoProps>;

export default function CadastroScreen() {
  const router = useRouter();

  // STATE DO CONTEXTO: Armazena o utilizador globalmente (Item 4 e 9)
  const { saveUser } = useUser();

  // STATES LOCAIS (Item 4 e 7)
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    dataNascimento: '',
    cpf: '',
    senha: '',
    confirmarSenha: '',
  });
  const [aceitaTermos, setAceitaTermos] = useState(false); // State do Switch (Item 7)
  const [campoFocado, setCampoFocado] = useState<string | null>(null); // State de Foco (Item 5)

  // Função para atualizar o objeto form mantendo a imutabilidade do State
  const updateField = (field: keyof typeof form) => (value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const showMessage = (title: string, message: string) => {
    if (Platform.OS === 'web') {
      alert(message);
    } else {
      Alert.alert(title, message);
    }
  };

  // FUNÇÕES DE TRATAMENTO DE EVENTOS (Item 1)
  // Trata o clique no botão de cadastrar (Item 2)
  const handleCadastro = () => {
    if (!aceitaTermos) {
      const msg = 'Você precisa aceitar os termos de uso para continuar!';
      showMessage('Aviso', msg);
      return;
    }
    saveUser(form);
    const msgSucesso = 'Cadastro realizado com sucesso!';
    showMessage('Sucesso', msgSucesso);
    router.push('/perfil');
  };

  // Trata a pressão prolongada no Pressable (Item 3)
  const handleLongPress = () => {
    const msg = 'Modo Rápido: Dados de teste preenchidos!';
    showMessage('Autopreenchimento', msg);
    setForm({
      nome: 'Jogador Exemplo',
      email: 'gamer@teste.com',
      telefone: '(11) 99999-9999',
      dataNascimento: '01/01/2000',
      cpf: '123.456.789-00',
      senha: '123456',
      confirmarSenha: '123456',
    });
    setAceitaTermos(true);
  };

  // Trata o foco e perda de foco nos campos (Item 5)
  const handleFocus = (campo: string) => () => setCampoFocado(campo);
  const handleBlur = () => setCampoFocado(null);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeaderCadastro />

      {/* Seção 1: Dados Pessoais */}
      <View style={styles.secaoCard}>
        <Text style={styles.tituloSecao}>
          Dados Pessoais {campoFocado ? `- (${campoFocado})` : ''}
        </Text>

        <CampoNomeComEventos
          // PROP: value recebe o valor do State
          value={form.nome}
          // EVENTO: onChangeText envia a alteração para atualizar o State
          onChangeText={updateField('nome')}
          onFocus={handleFocus('Nome')}
          onBlur={handleBlur}
        />
        <CampoEmailComEventos
          value={form.email}
          onChangeText={updateField('email')}
          onFocus={handleFocus('E-mail')}
          onBlur={handleBlur}
        />
        <CampoTelefoneComEventos
          value={form.telefone}
          onChangeText={updateField('telefone')}
          onFocus={handleFocus('Telefone')}
          onBlur={handleBlur}
        />
        <CampoDataNascimentoComEventos
          value={form.dataNascimento}
          onChangeText={updateField('dataNascimento')}
          onFocus={handleFocus('Data de Nasc.')}
          onBlur={handleBlur}
        />
        <CampoCpfComEventos
          value={form.cpf}
          onChangeText={updateField('cpf')}
          onFocus={handleFocus('CPF')}
          onBlur={handleBlur}
        />
      </View>

      {/* Seção 2: Dados de Acesso */}
      <View style={styles.secaoCard}>
        <Text style={styles.tituloSecao}>Dados de Acesso</Text>
        <CampoSenhaComEventos
          value={form.senha}
          onChangeText={updateField('senha')}
          onFocus={handleFocus('Senha')}
          onBlur={handleBlur}
        />
        <CampoConfirmarSenhaComEventos
          value={form.confirmarSenha}
          onChangeText={updateField('confirmarSenha')}
          onFocus={handleFocus('Confirmação de Senha')}
          onBlur={handleBlur}
          // EVENTO: onSubmitEditing dispara a função ao pressionar "Enviar" no teclado (Item 6)
          onSubmitEditing={handleCadastro}
        />
      </View>

      {/* Seção 3: Switch de Opção (Item 7) */}
      <View style={styles.secaoCard}>
        <View style={styles.switchContainer}>
          <Switch
            // PROP: value do Switch associado ao State
            value={aceitaTermos}
            // EVENTO: onValueChange atualiza o State do Switch
            onValueChange={setAceitaTermos}
            trackColor={{ false: '#cbd5e1', true: '#6200ee' }}
          />
          <Text style={styles.switchTexto}>
            {aceitaTermos ? 'Termos de uso aceitos' : 'Aceitar termos de uso'}
          </Text>
        </View>
      </View>

      {/* Botão com Pressable, onPress e onLongPress (Item 2, 3 e 8) */}
      <View style={styles.areaAcoes}>
        <Pressable
          style={({ pressed }) => [styles.botao, pressed && styles.botaoPressionado]}
          // ITEM 8: Fornecemos a referência handleCadastro em vez de handleCadastro()
          onPress={handleCadastro}
          onLongPress={handleLongPress}
          delayLongPress={800}
        >
          <Text style={styles.textoBotao}>
            Cadastrar (Segure para preencher rápido)
          </Text>
        </Pressable>
      </View>
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
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  switchTexto: {
    fontSize: 14,
    color: '#334155',
    fontWeight: '500',
  },
  areaAcoes: {
    marginTop: 8,
    marginBottom: 32,
  },
  botao: {
    backgroundColor: '#6200ee',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoPressionado: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  textoBotao: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});