import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#8f8f8f',
      },
    imageLogo:{
      marginTop:40,
      marginLeft:20, 
      marginBottom:10,
    },

    containerForm:{
      backgroundColor:'#d8d8d8',
      margin:15,
      height:'78%',
      borderWidth:4,
      borderColor:'#313131',
      borderRadius:12,
    },
    Textform:{
      textAlign:'center',
      marginTop:10,
      fontSize:12,
      fontWeight:'bold',
    },
    Inputform:{
      backgroundColor:'gray',
      margin:5,
      gap:7,
    },
    retornar:{
      backgroundColor:'#4b4a4a',    
      width:140,
      marginLeft: 33,
      padding:8,
      borderRadius:8,
      color:'white',
      textAlign:'center',
    }
})