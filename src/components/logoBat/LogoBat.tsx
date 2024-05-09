import React from 'react';
import { View, Image } from 'react-native';
import BatSLogo from '../../../assets/batSignalLogo.png'


export function LogoBat() {
  return (
    <View >
        <Image
         source={BatSLogo}
         width={70}
         >
        </Image>
    </View>
  );
}