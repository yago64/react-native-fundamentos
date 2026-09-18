import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useRouter, Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export interface JogoItem {
  id: string;
  titulo: string;
  categoria: string;
}

interface JogoCardProps {
  item: JogoItem;
}

export default function JogoCard({ item }: JogoCardProps) {
  // Inicialização do hook de roteamento para navegação programática
  const router = useRouter();

  /* 
    =============================================================================
    ANÁLISE DAS FORMAS DE NAVEGAÇÃO NO EXPO ROUTER:
    =============================================================================

    1. NAVEGAÇÃO PROGRAMÁTICA (router.push):
       - ONDE FOI UTILIZADA: Dentro do manipulador de evento 'onPress' do componente <TouchableOpacity>.
       - INTERAÇÃO QUE DISPARA: O toque/clique do usuário sobre o card do jogo.
       - MOTIVO/USO: É utilizada quando a navegação precisa ser disparada via função JavaScript,
         permitindo executar lógicas adicionais (ex: validações, envio de métricas, tratamentos)
         antes de mudar de tela.

       Exemplo de chamada programática executada no onPress:
       router.push(`/detalhes/${item.id}`)

    2. NAVEGAÇÃO DECLARATIVA (<Link>):
       - ONDE PODE SER UTILIZADA: Diretamente na estrutura JSX do componente visual.
       - MOTIVO/USO: Funciona como uma tag <a> do HTML. Define a rota diretamente na propriedade 'href',
         sendo a melhor opção para links diretos e botões simples onde não há necessidade de executar
         lógica de código antes do redirecionamento.

       Exemplo de uso declarativo (descomente caso queira usar como Link puro):
       <Link href={`/detalhes/${item.id}`} asChild>
         <TouchableOpacity> ... </TouchableOpacity>
       </Link>
    =============================================================================
  */

  return (
    // A interaçao 'onPress' no TouchableOpacity dispara a navegação programática via router.push
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        // Disparo da Navegação Programática passando o ID dinâmico
        router.push(`/detalhes/${item.id}`);
      }}
      activeOpacity={0.7}
    >
      <View style={styles.infoContainer}>
        <Text style={styles.titulo}>{item.titulo}</Text>
        <Text style={styles.categoria}>{item.categoria}</Text>
      </View>
      
      {/* Exemplo de botão/texto complementar utilizando Navegação Declarativa (<Link>) */}
      <View style={styles.linkContainer}>
        <Link href={`/detalhes/${item.id}`} style={styles.linkTexto}>
          Ver detalhes
        </Link>
        <Ionicons name="chevron-forward" size={18} color="#38BDF8" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E293B',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  infoContainer: {
    flex: 1,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F8FAFC',
  },
  categoria: {
    fontSize: 14,
    color: '#94A3B8',
    marginTop: 4,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  linkTexto: {
    fontSize: 12,
    color: '#38BDF8',
    fontWeight: '600',
  },
});