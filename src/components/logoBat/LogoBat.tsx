import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './LogoBatStyle';
import BatSLogo from '../../../assets/batSignalLogo.png'


export function LogoBat() {
  return (
    <View style={styles.container}>
        <Image

         source={BatSLogo}
         width={70}
        >
        </Image>
    </View>
  );
}