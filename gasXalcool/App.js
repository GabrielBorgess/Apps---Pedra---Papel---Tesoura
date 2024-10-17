import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const App = () => {
  const [valorGasolina, setvalorGasolina] = useState('');
  const [valorAlcool, setvalorAlcool] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    const gas = parseFloat(valorGasolina);
    const alcool = parseFloat(valorAlcool);

    if (!gas || !alcool) {
      setResultado('Insira os valores');
      return;
    }

    const divisao = alcool / gas;

    if (divisao <= 0.7) {
      setResultado('Melhor abastecer com álcool.');
    } else {
      setResultado('Melhor abastecer com gasolina.');
    }
  };

  const resetar = () => {
    setvalorGasolina('');
    setvalorAlcool('');
    setResultado(''); 
  };

  return (
    <View style={styles.container}>
      
      <Image
        source={{ uri: 'https://static-00.iconduck.com/assets.00/gas-pump-icon-2048x2048-8p9drm38.png' }} 
        style={styles.image}
      />

      <Text style={styles.title}>Calculadora de Combustível</Text>
      <Text style={styles.subtitle}>insira os dados para ver qual vale mais a pena</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Gasolina"
        value={valorGasolina}
        onChangeText={setvalorGasolina}
      />
      
      <TextInput
        style={styles.input}
        placeholder="álcool"
        value={valorAlcool}
        onChangeText={setvalorAlcool}
      />

      
      <Button title="Calcular" onPress={calcular} />
      <Button title="Resetar" onPress={resetar} />
      <Image
        source={{ uri: 'https://static-00.iconduck.com/assets.00/street-icon-512x512-009svyi0.png' }} 
        style={styles.smallImage}
      />

      {resultado ? <Text style={styles.result}>{resultado}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 18,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    borderColor: '#ccc',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 50,
    alignSelf: 'center',
  },
  smallImage: {
    width: 50,
    height: 50,
    marginTop: 30,
    alignSelf: 'center',
  }
});

export default App;
