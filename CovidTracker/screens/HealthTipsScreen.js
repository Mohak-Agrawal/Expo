import React from 'react';  
import {StyleSheet, Text, View,Image,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

export default function HealthTipsScreen(props) {  
    const { navigation } = props
        return (  
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.card}>
                    <TouchableNativeFeedback styles={{height:'100%'}} onPress={()=> navigation.navigate('Nutrition Tips')} >
                    <Image source={require('../assets/photos/nutrition.jpg')} style={styles.image} />
                    <View style={{marginLeft:245,flexDirection:'row',backgroundColor:'#0099cb',width:100,height:30,justifyContent:'center',alignContent:'center',borderRadius:3,elevation:5,marginBottom:10}}>
                        <Text style={{color:'white',marginLeft:5,marginTop:5}}>Nutrition Tips</Text>
                        <Icon name="keyboard-arrow-right" color ='white' size={18} style={{marginTop:5}}/>
                    </View>
                    </TouchableNativeFeedback>
                    </View>
                    {/* ------------------------------------ */}
                    <View style={styles.card}>
                    <TouchableNativeFeedback styles={{height:'100%'}} onPress={()=> navigation.navigate('Fitness Tips')} >
                    <Image source={require('../assets/photos/fitness.jpg')} style={styles.image} />
                    <View style={{marginLeft:245,flexDirection:'row',backgroundColor:'#0099cb',width:100,height:30,justifyContent:'center',alignContent:'center',borderRadius:3,elevation:5,marginBottom:10}}>
                        <Text style={{color:'white',marginLeft:5,marginTop:5}}>Fitness Tips</Text>
                        <Icon name="keyboard-arrow-right" color ='white' size={18} style={{marginTop:5}}/>
                    </View>
                    </TouchableNativeFeedback>
                    </View>
                    {/* ------------------------------------ */}
                    <View style={styles.card}>
                    <TouchableNativeFeedback styles={{height:'100%'}} onPress={()=> navigation.navigate('Mental Health Tips')} >
                    <Image source={require('../assets/photos/mindfullness.jpg')} style={styles.image} />
                    <View style={{marginLeft:210,flexDirection:'row',backgroundColor:'#0099cb',width:135,height:30,justifyContent:'center',alignContent:'center',borderRadius:3,elevation:5,marginBottom:10}}>
                        <Text style={{color:'white',marginLeft:5,marginTop:5}}>Mental Health Tips</Text>
                        <Icon name="keyboard-arrow-right" color ='white' size={18} style={{marginTop:5}}/>
                    </View>
                    </TouchableNativeFeedback>
                    </View>
                    {/* ------------------------------------ */}
                    <View style={styles.card}>
                    <TouchableNativeFeedback styles={{height:'100%'}} onPress={()=> navigation.navigate('Hygiene Tips')} >
                    <Image source={require('../assets/photos/hygiene.jpg')} style={styles.image} />
                    <View style={{marginLeft:245,flexDirection:'row',backgroundColor:'#0099cb',width:100,height:30,justifyContent:'center',alignContent:'center',borderRadius:3,elevation:5,marginBottom:10}}>
                        <Text style={{color:'white',marginLeft:5,marginTop:5}}>Hygiene Tips</Text>
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
                        marginTop:10,
                        borderTopEndRadius:20,
                        borderTopStartRadius:20,
                        shadowOpacity: 0.3,
                        shadowRadius: 2}}>
                            <Text style={{ marginTop:20,fontSize:14,color:'white',textAlign:'center'}}>"Health is a vehicle, not a destination."</Text>
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
        marginBottom:10,
        width:"100%",
        borderRadius:10,
        shadowOpacity: 0.3,
        shadowRadius: 2},
});  