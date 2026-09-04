import React from 'react';
import { Alert, Button, Platform, StyleSheet, View } from 'react-native';

export function BotaoCadastro() {
  const handlePress = () => {
    const msg = 'Cadastro realizado com sucesso!';

    if (Platform.OS === 'web') {
      alert(msg);
      return;
    }

    Alert.alert('Sucesso', msg);
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