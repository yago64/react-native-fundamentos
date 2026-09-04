import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useUser } from '@/context/UserContext';


const JOGOS_INICIAIS = [
  {
    id: '1',
    nome: 'Elden Ring',
    status: 'Jogando',
    imagem: 'https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/aA212P20A4532B0301072.png',
    curtido: true,
  },
  {
    id: '2',
    nome: 'The Witcher 3',
    status: 'Concluído',
    imagem: 'https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/8k5o6zX8x0f3uB2.png',
    curtido: false,
  },
  {
    id: '3',
    nome: 'Cyberpunk 2077',
    status: 'Pausado',
    imagem: 'https://image.api.playstation.com/vulcan/ap/rnd/202311/2812/c869b325992984fb68e3bd26b801a6be1d4b6ec6fb14ba0d.png',
    curtido: true,
  },
];

const PROMOCAO = {
  titulo: 'GTA V: Premium Edition',
  desconto: '60% OFF',
  preco: 'R$ 59,90',
  imagem: 'https://image.api.playstation.com/vulcan/img/rnd/202011/1020/Iq8yXq7t1Z9lG8d5.png',
};

const LANCAMENTO = {
  titulo: 'Monster Hunter Wilds',
  data: '2025',
  categoria: 'Ação / RPG',
};

export default function PerfilScreen() {
  const { user } = useUser();
  const [jogos, setJogos] = useState(JOGOS_INICIAIS);

  const toggleCurtida = (id: string) => {
    setJogos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, curtido: !item.curtido } : item))
    );
  };

  const inicial = user?.nome ? user.nome.charAt(0).toUpperCase() : 'G';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{inicial}</Text>
        </View>
        <Text style={styles.userName}>{user?.nome || 'Gamer Convidado'}</Text>
        <Text style={styles.userEmail}>{user?.email || 'gamer@vault.com'}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Informações Pessoais</Text>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Telefone</Text>
          <Text style={styles.infoValue}>{user?.telefone || 'Não informado'}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Nascimento</Text>
          <Text style={styles.infoValue}>{user?.dataNascimento || 'Não informado'}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>CPF</Text>
          <Text style={styles.infoValue}>{user?.cpf || 'Não informado'}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Jogos Recentes</Text>

        {jogos.map((item) => (
          <View key={item.id} style={styles.jogoRow}>
            <Image source={{ uri: item.imagem }} style={styles.jogoImagem} />

            <View style={styles.jogoInfo}>
              <Text style={styles.jogoNome}>{item.nome}</Text>
              <View style={[styles.badge, item.status === 'Jogando' ? styles.badgeJogando : styles.badgeOutro]}>
                <Text style={styles.badgeText}>{item.status}</Text>
              </View>
            </View>

            <TouchableOpacity onPress={() => toggleCurtida(item.id)} style={styles.coracaoButton}>
              <Ionicons
                name={item.curtido ? 'heart' : 'heart-outline'}
                size={24}
                color={item.curtido ? '#EF4444' : '#94A3B8'}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View style={[styles.card, styles.cardDestaque]}>
        <View style={styles.destaqueHeader}>
          <Ionicons name="pricetag" size={18} color="#10B981" />
          <Text style={styles.destaqueTitle}>Promoção em Destaque</Text>
        </View>
        <View style={styles.promoContent}>
          <Image source={{ uri: PROMOCAO.imagem }} style={styles.promoImagem} />
          <View style={styles.promoDetails}>
            <Text style={styles.gameTitle}>{PROMOCAO.titulo}</Text>
            <View style={styles.precoRow}>
              <Text style={styles.descontoTag}>{PROMOCAO.desconto}</Text>
              <Text style={styles.precoText}>{PROMOCAO.preco}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.destaqueHeader}>
          <Ionicons name="rocket" size={18} color="#4F46E5" />
          <Text style={styles.destaqueTitle}>Próximo Lançamento</Text>
        </View>
        <Text style={styles.gameTitle}>{LANCAMENTO.titulo}</Text>
        <Text style={styles.subtext}>{LANCAMENTO.categoria} • {LANCAMENTO.data}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 50, backgroundColor: '#F8FAFC' },
  avatarContainer: { alignItems: 'center', marginBottom: 20 },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#4F46E5', justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  avatarText: { fontSize: 32, fontWeight: 'bold', color: '#FFFFFF' },
  userName: { fontSize: 22, fontWeight: '800', color: '#0F172A' },
  userEmail: { fontSize: 13, color: '#64748B' },
  card: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 18, marginBottom: 16, borderWidth: 1, borderColor: '#E2E8F0' },
  cardTitle: { fontSize: 16, fontWeight: '700', color: '#1E293B', marginBottom: 12, borderBottomWidth: 1, borderBottomColor: '#F1F5F9', paddingBottom: 6 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#F8FAFC' },
  infoLabel: { fontSize: 14, color: '#64748B', fontWeight: '500' },
  infoValue: { fontSize: 14, color: '#0F172A', fontWeight: '600' },
  jogoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  jogoImagem: { width: 52, height: 52, borderRadius: 10, backgroundColor: '#E2E8F0' },
  jogoInfo: { flex: 1, marginLeft: 12 },
  jogoNome: { fontSize: 15, fontWeight: '600', color: '#0F172A' },
  badge: { alignSelf: 'flex-start', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6, marginTop: 4 },
  badgeJogando: { backgroundColor: '#EEF2FF' },
  badgeOutro: { backgroundColor: '#F1F5F9' },
  badgeText: { fontSize: 11, fontWeight: '600', color: '#4F46E5' },
  coracaoButton: { padding: 6 },
  cardDestaque: { borderColor: '#10B981', borderWidth: 1.5 },
  destaqueHeader: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 10 },
  destaqueTitle: { fontSize: 12, fontWeight: '700', color: '#64748B', textTransform: 'uppercase' },
  promoContent: { flexDirection: 'row', alignItems: 'center' },
  promoImagem: { width: 60, height: 60, borderRadius: 10, marginRight: 12 },
  promoDetails: { flex: 1 },
  gameTitle: { fontSize: 16, fontWeight: '800', color: '#0F172A' },
  precoRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 4 },
  descontoTag: { backgroundColor: '#10B981', color: '#FFF', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4, fontWeight: '700', fontSize: 12 },
  precoText: { fontSize: 15, fontWeight: '700', color: '#0F172A' },
  subtext: { fontSize: 13, color: '#64748B', marginTop: 2 },
});