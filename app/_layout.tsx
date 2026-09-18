import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

// cspell:ignore Biblioteca cadastro Cadastro

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1E293B',
          borderTopColor: '#334155',
        },
        tabBarActiveTintColor: '#38BDF8',
        tabBarInactiveTintColor: '#94A3B8',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Biblioteca',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="game-controller" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cadastro"
        options={{
          title: 'Cadastro',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-add" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}