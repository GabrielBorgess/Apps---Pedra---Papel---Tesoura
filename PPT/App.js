import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [jogada, setJogada] = useState('');
  const [jogadaPC, setJogadaPC] = useState('');
  const [vencedor, setVencedor] = useState('');

  const escolhas = ['Pedra', 'Papel', 'Tesoura'];
  const images = {
    Pedra: 'https://cdn-icons-png.flaticon.com/512/7996/7996141.png', 
    Papel: 'https://cdn-icons-png.flaticon.com/512/2541/2541988.png',
    Tesoura: 'https://cdn-icons-png.flaticon.com/512/10363/10363577.png', 
  };

  const jogar = (jogadaUser) => {
    setJogada(jogadaUser);
    const opcAleatoria = Math.floor(Math.random() * 3);
    const pcJogada = escolhas[opcAleatoria];
    setJogadaPC(pcJogada);

    determinarVencedor(jogadaUser, pcJogada);
  };

  const determinarVencedor = (user, app) => {
    if (user === app) {
      setVencedor('Empate!');
    } else if (
      (user === 'Pedra' && app === 'Tesoura') ||
      (user === 'Tesoura' && app === 'Papel') ||
      (user === 'Papel' && app === 'Pedra')
    ) {
      setVencedor('Você ganhou!');
    } else {
      setVencedor('Você perdeu!');
    }
  };

  const resetar = () => {
    setJogada('');
    setJogadaPC('');
    setVencedor('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedra, Papel e Tesoura</Text>
      <Text style={styles.subtitle}>Escolha em uma opção para jogar!</Text>
      
      <View style={styles.jogadasContainer}>
        {escolhas.map((escolha) => (
          <TouchableOpacity key={escolha} onPress={() => jogar(escolha)}>
            <Image source={{ uri: images[escolha] }} style={styles.jogadaImage} />
          </TouchableOpacity>
        ))}
      </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{jogada ? `Jogador: ${jogada}` : 'Aguardando jogada'}</Text>
          <Text style={styles.resultText}>{jogadaPC ? `PC: ${jogadaPC}` : ''}</Text>
          <Text style={styles.resultText}>{vencedor}</Text>
        </View>
      

      <Button title="Resetar" onPress={resetar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9C80E',
    padding: 20,
    borderWidth: 10,
    borderRadius: 50,
    borderColor: 'white',
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  jogadasContainer: {
    flexDirection: 'col',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
  },
  jogadaImage: {
    width: 80,
    height: 80,
    margin: 10,
  },
  resultContainer: {
    alignItems: 'center',
    marginBottom: 30,
    padding: 20,
    backgroundColor: 'white',
  },
  resultText: {
    fontWeight : '500',
    fontSize: 18,
    marginVertical: 5,
  },
});

export default App;
