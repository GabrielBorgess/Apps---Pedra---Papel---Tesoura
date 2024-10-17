import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity } from 'react-native';

const App = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura) / 100; 
    if (pesoNum > 0 && alturaNum > 0) {
      const imc = pesoNum / (alturaNum * alturaNum);
      let faixa = '';

      if (imc < 18.5) {
        faixa = 'Abaixo do peso';
      } else if (imc < 24.9) {
        faixa = 'Peso normal';
      } else if (imc < 29.9) {
        faixa = 'Sobrepeso';
      } else if (imc < 39.9) {
        faixa = 'Obesidade';
      } else {
        faixa = 'Obesidade grave';
      }

      setResultado(`Seu IMC é aproximadamente ${imc.toFixed()} - ${faixa}`);
    } else {
      setResultado('Valores invalidos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC</Text>
      <Text style={styles.subtitle}>Insira seu peso em Kg</Text>
      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={setPeso}
      />
      <Text style={styles.subtitle}>Insira sua altura em Cm</Text>
      <TextInput
        style={styles.input}
        value={altura}
        onChangeText={setAltura}
      />
      <TouchableOpacity style={styles.button} onPress={calcularIMC}>
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>
      <Text style={styles.result}>{resultado}</Text>
      <Image
        source={{ uri: 'https://herniabh.com.br/wp-content/uploads/2023/03/IMC-scaled.jpeg' }} 
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 30
  },  
  subtitle: {
    padding: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '80%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'darkred',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  result: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    margin: 10,

  },
});

export default App;