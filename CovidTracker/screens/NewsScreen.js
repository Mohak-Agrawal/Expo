
// import React from 'react'
// import { StyleSheet, View, Text, Button } from 'react-native'

// export default function NewsScreen(props) {
//     const { navigation } = props
//   return (
//     <View style={styles.container}>
//       <Button title='CLICK' onPress={() => navigation.navigate('Confirmed_News')}></Button>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ebebeb'
//   },
// })
import React, { useState } from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';
import { TouchableNativeFeedback, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Home(props) {
    const { navigation } = props
  return (
    <View style={styles.container}>
    <ScrollView>
        <View style={styles.card}>
        <TouchableNativeFeedback styles={{height:'100%'}} onPress={()=>navigation.navigate('WorldWideCases')}>
        <Image source={require('../assets/photos/worldwide.jpg')} style={styles.image} />
        <View style={{marginLeft:78,flexDirection:'row',backgroundColor:'#0099cb',width:200,height:30,justifyContent:'center',alignContent:'center',borderRadius:3,elevation:5,marginBottom:10}}>
            <Text style={{color:'white',marginLeft:5,marginTop:5}}>Worldwide Cases</Text>
            <Icon name="keyboard-arrow-right" color ='white' size={18} style={{marginTop:5}}/>
        </View>
        </TouchableNativeFeedback>
        </View>
        {/* ------------------------------------ */}
        <View style={styles.card}>
        <TouchableNativeFeedback styles={{height:'100%'}} onPress={()=>navigation.navigate('IndiaCasesScreen')}>
        <Image source={require('../assets/photos/india.jpg')} style={styles.image} />
        <View style={{marginLeft:78,flexDirection:'row',backgroundColor:'#0099cb',width:200,height:30,justifyContent:'center',alignContent:'center',borderRadius:3,elevation:5,marginBottom:10}}>
            <Text style={{color:'white',marginLeft:5,marginTop:5}}>Indian Cases</Text>
            <Icon name="keyboard-arrow-right" color ='white' size={18} style={{marginTop:5}}/>
        </View>
        </TouchableNativeFeedback>
        </View>
        {/* ------------------------------------------------- */}
        <View style={{
                        elevation: 5,
                        backgroundColor: '#0099cb',
                        shadowOffset: { width: 1, height: 1 },
                        shadowColor: '#333',
                        height:60,
                        width:"100%",
                        marginTop:20,
                        flex:1,
                        justifyContent:'center',
                        alignContent:'center',
                        borderTopEndRadius:20,
                        borderTopStartRadius:20,
                        shadowOpacity: 0.3,
                        shadowRadius: 2}}>
                            <Text style={{ fontSize:14,color:'white',textAlign:'center'}}>Developed by Mohak Agrawal</Text>
                        </View>
    </ScrollView>
</View> 
  );
}
const styles = StyleSheet.create({  
  container: {  
      flex: 1,
      alignItems:'center'  
       
  },  
  image:{
      width:340,
      height:230,
      margin:10,
      borderRadius:10,
  },
  card:{
      elevation: 10,
      backgroundColor: 'white',
      shadowOffset: { width: 1, height: 1 },
      shadowColor: '#333',
      height:290,
      marginTop:10,
      marginBottom:5,
      width:"100%",
      borderRadius:10,
      shadowOpacity: 0.3,
      shadowRadius: 2},
});  