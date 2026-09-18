import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useUser } from '@/context/UserContext';

export default function PerfilScreen() {
  const { user: usuario } = useUser();

  const tecnologias = [
    { nome: 'expo-router', finalidade: 'Roteamento e navegação entre telas' },
    { nome: 'lucide-react-native', finalidade: 'Ícones para os componentes visuais' },
    { nome: 'expo-status-bar', finalidade: 'Controle e personalização da barra de status' },
    { nome: 'date-fns', finalidade: 'Formatação e manipulação de datas' },
    { nome: 'react-native-reanimated', finalidade: 'Animações de alta performance' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerArea}>
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarTexto}>
            {usuario?.nome ? usuario.nome.charAt(0).toUpperCase() : 'U'}
          </Text>
        </View>
        <Text style={styles.nomeUsuario}>{usuario?.nome || 'Usuário Não Cadastrado'}</Text>
        <Text style={styles.emailHeader}>{usuario?.email || 'sem_email@exemplo.com'}</Text>
      </View>

      <View style={styles.secaoCard}>
        <Text style={styles.tituloSecao}>Informações Pessoais</Text>

        <View style={styles.itemInfo}>
          <Text style={styles.labelInfo}>Nome Completo:</Text>
          <Text style={styles.valorInfo}>{usuario?.nome || 'Não informado'}</Text>
        </View>

        <View style={styles.itemInfo}>
          <Text style={styles.labelInfo}>E-mail:</Text>
          <Text style={styles.valorInfo}>{usuario?.email || 'Não informado'}</Text>
        </View>

        <View style={styles.itemInfo}>
          <Text style={styles.labelInfo}>Telefone:</Text>
          <Text style={styles.valorInfo}>{usuario?.telefone || 'Não informado'}</Text>
        </View>

        <View style={styles.itemInfo}>
          <Text style={styles.labelInfo}>Data de Nascimento:</Text>
          <Text style={styles.valorInfo}>{usuario?.dataNascimento || 'Não informado'}</Text>
        </View>

        <View style={styles.itemInfo}>
          <Text style={styles.labelInfo}>CPF:</Text>
          <Text style={styles.valorInfo}>{usuario?.cpf || 'Não informado'}</Text>
        </View>
      </View>

      <View style={styles.secaoCard}>
        <Text style={styles.tituloSecao}>Tecnologias Utilizadas</Text>

        {tecnologias.map((item, index) => (
          <View key={index} style={styles.itemTecnologia}>
            <Text style={styles.nomeTecnologia}>• {item.nome}</Text>
            <Text style={styles.descricaoTecnologia}>{item.finalidade}</Text>
          </View>
        ))}
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
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#4F46E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarTexto: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
  nomeUsuario: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
  },
  emailHeader: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 2,
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
  itemInfo: {
    marginBottom: 10,
  },
  labelInfo: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '600',
  },
  valorInfo: {
    fontSize: 15,
    color: '#1E293B',
    fontWeight: '500',
    marginTop: 2,
  },
  itemTecnologia: {
    marginBottom: 10,
  },
  nomeTecnologia: {
    fontSize: 14,
    fontWeight: '700',
    color: '#334155',
  },
  descricaoTecnologia: {
    fontSize: 13,
    color: '#64748B',
    marginLeft: 12,
  },
});