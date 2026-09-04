import React from 'react';
import { Alert, Button, Platform, StyleSheet, View } from 'react-native';

export function BotaoCadastro({ onPress }: { onPress: () => void }) {
  const handlePress = () => {
    const msg = 'Cadastro realizado com sucesso!';

    if (Platform.OS === 'web') {
      alert(msg);
      onPress();
      return;
    }

    Alert.alert('Sucesso', msg);
    onPress();
  };

  return (
    <View style={styles.container}>
      <Button title="Realizar Cadastro" color="#6200ee" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 16, marginBottom: 30 },
});