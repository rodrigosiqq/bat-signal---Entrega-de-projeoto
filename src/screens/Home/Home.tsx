import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LogoBat } from '../../components/logoBat/LogoBat';
import React from 'react';
import { stylesHome } from './stylesHome';

export default function Home() {
  return (
    <View style={stylesHome.container}>
      <LogoBat />
      <TouchableOpacity>
      <Text style={stylesHome.textStyle}>Activate Bat Signal 🦇</Text>
      </TouchableOpacity> 
      <StatusBar style="auto" />
    </View>
  );
}
