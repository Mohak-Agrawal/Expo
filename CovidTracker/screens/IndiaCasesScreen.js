import React from 'react';  
import {StyleSheet, Text, View,Button} from 'react-native';  
import { FlatList, TouchableNativeFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';


class IndiaCasesScreen extends React.Component{  
    constructor(){
        super();
        this.state={
            data :[],
            
        }
    }
    componentDidMount(){
        this.apiCall();
    }
    async apiCall(){
        let resp=await fetch('https://api.covid19india.org/data.json')
        let respJson = await resp.json()
        this.setState({data: respJson.statewise})
       
        //console.warn(respJson)

    }
    render(){
        return (  
            <View style={styles.container}> 
            <View style={styles.card}>
            <Text style={{flex:1,alignSelf:'center',textAlign:'center'}} ></Text>
        <Text style={{flex:1,alignSelf:'center',textAlign:'center',color:'#42B0FF'}}>Confirmed</Text>
        <Text style={{flex:1,alignSelf:'center',textAlign:'center',color:'green'}}>Recovered</Text>
        <Text style={{flex:1,alignSelf:'center',textAlign:'center',color:'red'}}>Deaths*</Text>  
            </View>
            <FlatList
            data={this.state.data}
            renderItem={({item})=>
            <View style={styles.card}>
        <Text style={{flex:1,alignSelf:'center',textAlign:'center',marginLeft:5}} >{item.state}</Text>
        <Text style={{flex:1,alignSelf:'center',textAlign:'center',color:'#42B0FF'}}>{item.confirmed}</Text>
        <Text style={{flex:1,alignSelf:'center',textAlign:'center',color:'green'}}>{item.recovered}</Text>
        <Text style={{flex:1,alignSelf:'center',textAlign:'center',color:'red'}}>{item.deaths}</Text>  
        </View>
          }
          keyExtractor={(item, index) => index.toString()}
            />
            </View>  
        );  
        }
}  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        alignItems: 'center' ,
        flexDirection:'column' ,
        marginTop:10
    },  
    card:{
        elevation: 1,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        flexDirection:'row',
        height:50,
        width:340,
        marginTop:5,
        borderRadius:2,
        shadowOpacity: 0.3,
        shadowRadius: 2},
     
});  
export default IndiaCasesScreen;



