import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Switch,
  Alert,
  Platform,
  ScrollView,
} from 'react-native';

export default function CadastroScreen() {
  // ==========================================
  // EXEMPLO DE STATE (Item 4, 5, 7 e 9 do Lab)
  // ==========================================
  const [nome, setNome] = useState(''); // State para o nome do utilizador
  const [email, setEmail] = useState(''); // State para o e-mail
  const [senha, setSenha] = useState(''); // State para a palavra-passe
  const [aceitaTermos, setAceitaTermos] = useState(false); // State do Switch
  const [campoAtivo, setCampoAtivo] = useState<string | null>(null); // State de foco

  // ==========================================
  // FUNÇÕES DE TRATAMENTO DE EVENTOS (Item 1)
  // ==========================================
  // Evento disparado pelo toque simples
  const handleCadastro = () => {
    if (!aceitaTermos) {
      const msg = 'É necessário aceitar os termos de utilização!';
      if (Platform.OS === 'web') {
        alert(msg);
      } else {
        Alert.alert('Aviso', msg);
      }
      return;
    }
    const msgSucesso = `Registo de ${nome} efetuado com sucesso!`;
    if (Platform.OS === 'web') {
      alert(msgSucesso);
    } else {
      Alert.alert('Sucesso', msgSucesso);
    }
  };

  // Evento disparado por pressão prolongada
  const handleLongPress = () => {
    const msg = 'Pressão prolongada detetada! A preencher dados de teste...';
    if (Platform.OS === 'web') {
      alert(msg);
    } else {
      Alert.alert('Modo Rápido', msg);
    }
    setNome('Jogador Pro');
    setEmail('jogador@email.com');
    setSenha('123456');
    setAceitaTermos(true);
  };

  // Tratamento de foco (Item 5)
  const handleFocus = (campo: string) => () => setCampoAtivo(campo);
  const handleBlur = () => setCampoAtivo(null);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Registo de Jogador</Text>

      {/* Campo Nome */}
      <Text style={styles.label}>
        Nome {campoAtivo === 'nome' && '(A digitar...)'}
      </Text>
      <TextInput
        // Prop: value recebe o valor armazenado no State
        value={nome}
        // Evento: onChangeText recebe a função setNome para atualizar o State
        onChangeText={setNome}
        onFocus={handleFocus('nome')}
        onBlur={handleBlur}
        placeholder="Digite o seu nome"
        placeholderTextColor="#64748B"
        style={[styles.input, campoAtivo === 'nome' && styles.inputFocado]}
      />

      {/* Campo E-mail */}
      <Text style={styles.label}>E-mail</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        onFocus={handleFocus('email')}
        onBlur={handleBlur}
        placeholder="Digite o seu e-mail"
        placeholderTextColor="#64748B"
        keyboardType="email-address"
        style={[styles.input, campoAtivo === 'email' && styles.inputFocado]}
      />

      {/* Campo Palavra-passe com onSubmitEditing (Item 6) */}
      <Text style={styles.label}>Palavra-passe</Text>
      <TextInput
        value={senha}
        onChangeText={setSenha}
        onFocus={handleFocus('senha')}
        onBlur={handleBlur}
        // Evento: onSubmitEditing dispara a ação ao pressionar "Concluir" no teclado
        onSubmitEditing={handleCadastro}
        placeholder="Digite a sua palavra-passe"
        placeholderTextColor="#64748B"
        secureTextEntry
        style={[styles.input, campoAtivo === 'senha' && styles.inputFocado]}
      />

      {/* Componente Switch (Item 7) */}
      <View style={styles.switchArea}>
        <Switch
          value={aceitaTermos}
          onValueChange={setAceitaTermos}
          trackColor={{ false: '#334155', true: '#38BDF8' }}
        />
        <Text style={styles.switchTexto}>
          {aceitaTermos ? 'Termos aceites' : 'Termos não aceites'}
        </Text>
      </View>

      {/* Componente Pressable com onPress e onLongPress (Item 2 e 3) */}
      {/* NOTA ITEM 8: Usamos onPress={handleCadastro} (passagem da referência). 
          Se usássemos onPress={handleCadastro()}, a função seria executada imediatamente no render. */}
      <Pressable
        style={({ pressed }) => [
          styles.botao,
          pressed && styles.botaoPressionado,
        ]}
        onPress={handleCadastro}
        onLongPress={handleLongPress}
        delayLongPress={800}
      >
        <Text style={styles.textoBotao}>Cadastrar (Segure para preenchimento rápido)</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A', padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', color: '#F8FAFC', marginBottom: 20, marginTop: 40 },
  label: { fontSize: 14, color: '#94A3B8', marginBottom: 6 },
  input: { backgroundColor: '#1E293B', color: '#F8FAFC', padding: 12, borderRadius: 8, borderWidth: 1, borderColor: '#334155', marginBottom: 16 },
  inputFocado: { borderColor: '#38BDF8', backgroundColor: '#0F172A' },
  switchArea: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 20 },
  switchTexto: { color: '#CBD5E1', fontSize: 14 },
  botao: { backgroundColor: '#0284C7', padding: 16, borderRadius: 8, alignItems: 'center' },
  botaoPressionado: { opacity: 0.7, transform: [{ scale: 0.98 }] },
  textoBotao: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 14 },
});