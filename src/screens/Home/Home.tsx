import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';
import { LogoBat } from '../../components/logoBat/LogoBat';
import React, { useState } from 'react';
import { stylesHome } from './stylesHome';
import { FormSignal } from '../FormSignal/FormSignal';


export default function Home() {
  const [exibirFormS, setExibirFormS] = useState(false);

  const toggleFormSignal = () => {
    setExibirFormS(!exibirFormS)
  }

  return (
    <View style={stylesHome.container}>
      {exibirFormS ? (
        <FormSignal /> // Exibe o FormSignal se exibirFormS for verdadeiro
      ) : (
        <>
          <LogoBat />
          <TouchableOpacity onPress={toggleFormSignal}>
            <Text style={stylesHome.textStyle}>Activate Bat Signal 🦇</Text>
          </TouchableOpacity>
        </>
      )}
      <StatusBar style="auto" />
    </View>
  );
}
