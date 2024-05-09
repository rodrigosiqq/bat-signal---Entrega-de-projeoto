import React, { useState } from 'react';
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import { styles } from './FormSignalStyle'
import LogoBatForm from '../../../assets/batlogoForm.png'
import { Alert } from 'react-native';
import Home from '../Home/Home';

export function FormSignal() {
const enviar = ()=>{
  Alert.alert('Cadastro enviado')
}



  return (
    <View style={styles.container}>
      <View style={styles.imageLogo}>
      <Image 
        source={LogoBatForm}
        />
      </View>
        <View style={styles.containerForm}>
          <Text style={styles.Textform}>Formulário de Ativação do Bat-Signal</Text>
          <TextInput style={styles.Inputform}
            placeholder='nome:'  
          />
          <TextInput style={styles.Inputform}
            placeholder='Telefone:'
            keyboardType='phone-pad'
          />
          <TextInput style={styles.Inputform}
            placeholder='Loacalização Aatual:'
            keyboardType='default'
            multiline={true}
            numberOfLines={9}
          />
          <TextInput style={styles.Inputform}
            placeholder='Loacalização Aatual:'
            keyboardType='default'
            multiline={true}
            numberOfLines={9}
          />
          <TouchableOpacity onPress={enviar} >
            <Text style={styles.retornar}> Enviar</Text>
          </TouchableOpacity>
          
        </View>
    </View>
  );
}