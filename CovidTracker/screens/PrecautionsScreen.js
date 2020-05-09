import React from 'react';  
import {StyleSheet, Text, View,Image,ScrollView, Button, Linking,} from 'react-native'; 
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
export default function PrecautionsScreen() {  
    
        return (  
            <ScrollView>
            <View style={styles.container}>
                {/* ------------------------------------------------- */}
                <View style={styles.card}>
                    <Text style={{fontSize:22,color:'#0099cb',margin:15,fontWeight:'bold'}}>PROTECT YOURSELF AND OTHERS FROM GETTTING SICK</Text>
                    <View style={{height:270}}>
                        <ScrollView indicatorStyle='white' horizontal={true} >  
                        <Image source={require('../assets/photos/blue_2.png')} style={styles.image} />
                        <Image source={require('../assets/photos/blue_1.png')} style={styles.image} />
                        <Image source={require('../assets/photos/blue_3.png')} style={styles.image} />
                        <Image source={require('../assets/photos/blue_4.png')} style={styles.image} />
                        </ScrollView> 
                    </View>
                </View>
                {/* ------------------------------------------------- */}
                <View style={{
                elevation: 5,
                backgroundColor: '#0099cb',
                shadowOffset: { width: 1, height: 1 },
                shadowColor: '#333',
                marginTop:20,
                width:"100%",
                borderRadius:10,
                shadowOpacity: 0.3,
                shadowRadius: 2}}>
                     <Text style={{fontSize:22,color:'white',margin:15,fontWeight:'bold'}}>HELPNG THOSE IN NEED</Text>
                        <View style={{
                            elevation: 5,
                            backgroundColor: 'white',
                            shadowOffset: { width: 1, height: 1 },
                            shadowColor: '#333',
                            width:"95%",
                            flex:1,
                            marginTop:20,
                            alignSelf:'center',
                            marginBottom:10,
                            borderRadius:10,
                            shadowOpacity: 0.3,
                            shadowRadius: 2}}>
                                <TouchableNativeFeedback style={{width:'100%',height:'100%'}} onPress={()=> 
                                {
                                    Linking.openURL('https://www.pmcares.gov.in/en/web/contribution/donate_india');
                                }}>
                            <View>
                                <Image source={require('../assets/photos/pmcare1.jpg')} style={{height:30,width:200,marginLeft:140,borderRadius:80}} />  
                            </View>
                            <View style={{flexDirection:'row'}}>
                            <Image source={require('../assets/photos/health.png')} style={{height:80,width:80,marginLeft:7}} />  
                                <View style={{flexDirection:'column',flex:1}}>
                                <Text style={{marginLeft:20,marginTop:10,fontSize:16}}>Contribute towards </Text>
                                <Text style={{marginLeft:20,fontSize:16,fontWeight:'bold',color:'#0099cb'}}>PM-CARES Fund </Text>
                                <Text style={{marginLeft:20,marginRight:20,fontSize:14}}>Encourage research & and aid quality treatment to beat COVID-19</Text>
                                <View style={{marginLeft:20,flexDirection:'row',backgroundColor:'#0099cb',marginTop:5,width:90,height:20,justifyContent:'center',marginBottom:15,alignContent:'center',borderRadius:3,elevation:5}}>
                                    <Text style={{color:'white',marginLeft:5}}>Donate Now</Text>
                                    <Icon name="keyboard-arrow-right" color ='white' size={18} />
                                </View>
                                </View>
                                </View>
                                </TouchableNativeFeedback>
                            </View>
                         </View>
                {/* ------------------------------------------------- */}
                <View style={styles.card}>
                    <Text style={{fontSize:22,color:'#0099cb',margin:15,fontWeight:'bold',marginBottom:35}}>BE READY FOR CORONAVIRUS</Text>
                    <View style={{height:270}}>
                        <ScrollView indicatorStyle='white' horizontal={true} >  
                        <Image source={require('../assets/photos/beready.jpg')} style={styles.image} />
                        <Image source={require('../assets/photos/beready2.jpg')} style={styles.image} />
                        <Image source={require('../assets/photos/beready3.jpg')} style={styles.image} />
                        <Image source={require('../assets/photos/beready4.jpg')} style={styles.image} />
                        <Image source={require('../assets/photos/beready5.jpg')} style={styles.image} />
                        </ScrollView> 
                    </View>
                </View>
                {/* ------------------------------------------------- */}
                <View style={{
                        elevation: 5,
                        backgroundColor: '#0099cb',
                        shadowOffset: { width: 1, height: 1 },
                        shadowColor: '#333',
                        height:70,
                        width:"100%",
                        marginTop:20,
                        borderTopEndRadius:20,
                        borderTopStartRadius:20,
                        shadowOpacity: 0.3,
                        shadowRadius: 2}}>
                            <Text style={{ marginTop:20,fontSize:14,color:'white',textAlign:'center'}}>Thank You India for your continued trust and support.</Text>
                            <Text style={{fontSize:14,color:'white',textAlign:'center'}}>We are committed to serving you,always.</Text>
                        </View>
                {/* ------------------------------------------------- */}
            </View> 
            </ScrollView>
        );  
    
}  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,
        alignItems:'center' ,
        marginTop:20
         
    },  
    image:{
        width:270,
        height:260,
        margin:5,
        borderRadius:10,
    },
    card:{
        elevation: 5,
        backgroundColor: 'white',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        height:400,
        marginTop:20,
        width:"100%",
        borderRadius:10,
        shadowOpacity: 0.3,
        shadowRadius: 2},
    })