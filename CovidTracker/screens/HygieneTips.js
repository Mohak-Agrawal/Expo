
import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function HygieneTips() {
  return (
    <View style={styles.container}>
      <ScrollView >
        <View style={{
          elevation: 10,
          backgroundColor: '#0099cb',
          shadowOffset: { width: 1, height: 1 },
          shadowColor: '#333',
          width:"100%",
          padding:20,
          borderBottomLeftRadius:20,
          borderBottomRightRadius:20,
          shadowOpacity: 0.3,
          shadowRadius: 2}}> 
          <Text style={{fontSize:28,alignSelf:'center',color:'white',textAlign:'center'}}>Cleaning and hygiene tips to protect against COVID-19 </Text>
        </View>
        {/* ---------------------------------- */}
        <View style={{
            elevation: 10,
            backgroundColor: 'white',
            shadowOffset: { width: 1, height: 1 },
            shadowColor: '#333',
            padding:5,
            flexDirection:'column',
            marginVertical:10,
            width:"100%",
            borderRadius:15,
            shadowOpacity: 0.3,
            shadowRadius: 2}}>
          <Text style={{margin:10,fontSize:22,color:'#0099cb',}}>1. Personal hygiene</Text>
          <Text style={{marginHorizontal:10,marginBottom:5,fontSize:16}}> Yes, we know you’ve heard all this a million times already. It bears repeating. There are a lot of things we don’t know about this virus, but we do know it spreads through respiratory droplets produced when an infected person coughs or sneezes. Other individuals may be infected when they touch a surface that has virus particles on it and then touch their own mouth, nose, or eyes. Hand hygiene is the very best weapon in any fight between human and contagious disease.</Text>
          <Text style={{marginHorizontal:10,marginBottom:5,fontSize:16}}>1. Wash your hands frequently with soap and water, scrubbing for at least 20 seconds, or use an alcohol-based hand sanitizer.</Text>
          <Text style={{marginHorizontal:10,marginBottom:5,fontSize:16}}>2. Don’t touch your face. This is a lot harder than it sounds and requires conscious effort. The average person touches their face 23 times an hour, and about half of the time, they’re touching their mouth, eyes, or nose — the mucosal surfaces that COVID-19 infects.</Text>
          <Text style={{marginHorizontal:10,marginBottom:5,fontSize:16}}>3. Cover coughs and sneezes with the inside of your elbow or upper arm.</Text>
          <Text style={{marginHorizontal:10,marginBottom:15,fontSize:16}}>4. Stay home if you are feeling sick, and seek appropriate medical guidance.</Text>
          
        </View>
        {/* ---------------------------------- */}
        <View style={{
          elevation: 10,
          backgroundColor: 'white',
          shadowOffset: { width: 1, height: 1 },
          shadowColor: '#333',
          padding:5,
          flexDirection:'column',
          marginVertical:10,
          width:"100%",
          borderRadius:15,
          shadowOpacity: 0.3,
          shadowRadius: 2
        }}>
        <Text style={{margin:10,fontSize:22,color:'#0099cb',}}>2. Cleaning around the home</Text>
        <Text style={{marginHorizontal:10,marginBottom:5,fontSize:16}}>Use the right product. According to the CDC, diluted household bleach solutions, alcohol solutions with at least 70% alcohol, and most common EPA-registered household disinfectants should be effective against the COVID-19 virus. See the CDC’s environmental cleaning and disinfection recommendations and this list of EPA-registered disinfectants.</Text>
        <Text style={{marginHorizontal:10,marginBottom:5,fontSize:16}}>Use the product right. First, clean dirt off of the surface. Then wipe the surface with disinfectant. Leave the surface wet with disinfectant for as many minutes as the product instructions require. This is a vital step that people often miss. It’s not enough to just wipe the surface and go.</Text>
        <Text style={{marginHorizontal:10,marginBottom:5,fontSize:16}}>Do not reuse disinfectant wipes on multiple surfaces. This can transfer germs from the used wipe to other surfaces. Use one wipe for each surface and then throw it out.</Text>
        <Text style={{marginHorizontal:10,marginBottom:15,fontSize:16}}>Do not dry surfaces after wiping them down. Surfaces you are disinfecting need to stay wet for the amount of time listed on the label. The contact time with the disinfectant is what actually kills the germs.</Text>
        
        </View>
        {/* ---------------------------------- */}
        <View style={{
            elevation: 10,
            backgroundColor: 'white',
            shadowOffset: { width: 1, height: 1 },
            shadowColor: '#333',
            padding:5,
            flexDirection:'column',
            marginVertical:10,
            width:"100%",
            borderRadius:15,
            shadowOpacity: 0.3,
            shadowRadius: 2}}>
          <Text style={{margin:10,fontSize:22,color:'#0099cb',}}>3. Cleaning clothes</Text>
          <Text style={{marginHorizontal:10,marginBottom:5,fontSize:16}}>Launder items with laundry soap or household detergent. Consider using a detergent that contains bleach. However, be sure to read the product description and guidelines to avoid potentially ruining certain clothing items. Consider soaking clothes in a solution containing quaternary ammonium before washing them.</Text>
          <Text style={{marginHorizontal:10,marginBottom:5,fontSize:16}}>Choose the warmest available water setting. The WHO recommend water temperatures between 60–90°C (140–194°F). However, high temperatures can damage or shrink delicate clothing items, so remember to read the care labels.</Text>
          <Text style={{marginHorizontal:10,marginBottom:5,fontSize:16}}>Disinfect laundry baskets with 0.1% sodium hypochlorite or one of these household disinfectants, which the Environmental Protection Agency (EPA) have approved.</Text>
          <Text style={{marginHorizontal:10,marginBottom:15,fontSize:16}}>Wear gloves when doing laundry. Wash the hands with warm water and soap immediately after removing the gloves. If gloves are not available, wash the hands immediately after handling dirty clothing and avoid touching the face.</Text>
        </View>
        {/* ---------------------------------- */}
        <View style={{
            elevation: 10,
            backgroundColor: 'white',
            shadowOffset: { width: 1, height: 1 },
            shadowColor: '#333',
            padding:5,
            flexDirection:'column',
            marginVertical:10,
            width:"100%",
            borderRadius:15,
            shadowOpacity: 0.3,
            shadowRadius: 2}}>
          <Text style={{margin:10,fontSize:22,color:'#0099cb',}}>4. Handling and preparing food</Text>
          <Text style={{marginHorizontal:10,marginBottom:5,fontSize:16}}>While at present there is no evidence of people catching the COVID-19 virus from food or food packaging, it may be possible that people can become infected by touching a surface or object contaminated by the virus and then touching their face. The greater risk comes from being in close contact with other people while outside food shopping or receiving a food delivery (as receiving any delivery in areas with local transmission). As always, good hygiene is important when handling food to prevent any food-borne illnesses.</Text>
          <Text style={{marginHorizontal:10,marginBottom:15,fontSize:16}}>Remove any unnecessary packaging and dispose into a waste bin with a lid.
                Remove food from take-out containers, place on a clean plate and dispose of the container. 
                Packaging like cans can be wiped clean with a disinfectant before being opened or stored. 
                Wash unpackaged produce, such as fruit and vegetables, thoroughly under running water.
                Wash your hands with soap and water, or use an alcohol-based hand rub, immediately afterwards.</Text>
          <Text style={{marginHorizontal:10,marginBottom:15,fontSize:16}}>Wash your hands thoroughly with soap and water for at least 20 seconds before preparing any food.
                Use separate chopping boards to prepare uncooked meat and fish.
                Cook food to the recommended temperature.
                Where possible, keep perishable items refrigerated or frozen, and pay attention to product expiry dates. 
                Aim to recycle or dispose of food waste and packaging in an appropriate and sanitary manner, avoiding build-up of refuse which could attract pests.
                Wash your hands with soap and water for at least 20 seconds before eating and make sure your children do the same.
                Always use clean utensils and plates.</Text>
     

        </View>
        {/* ---------------------------------- */}
        <View style={{
            elevation: 10,
            backgroundColor: 'white',
            shadowOffset: { width: 1, height: 1 },
            shadowColor: '#333',
            padding:5,
            flexDirection:'column',
            marginVertical:10,
            width:"100%",
            borderRadius:15,
            shadowOpacity: 0.3,
            shadowRadius: 2}}>
          <Text style={{margin:10,fontSize:22,color:'#0099cb',}}>5. Practice “social distancing”</Text>
          <Text style={{marginHorizontal:10,marginBottom:5,fontSize:16}}>Social distancing is exactly what it sounds like: keeping your distance from other people. It’s often used to describe public health measures imposed by local governments — measures like quarantining the sick, closing schools, and canceling public gatherings. And, when it’s done early enough during a pandemic illness, it’s been shown to save lives. But you don’t have to wait for the government to tell you what to do; here’s what you can do now:</Text>
          <Text style={{marginHorizontal:10,marginBottom:5,fontSize:16}}>1. Keep your distance. The number of people in any given location is important, but density is even more important. Respiratory droplets from a cough or sneeze can travel up to six feet and be inhaled into the lungs of people within range. Protect yourself by staying out of range.</Text>
          <Text style={{marginHorizontal:10,marginBottom:5,fontSize:16}}>2. Don’t hug or shake hands. If you have to meet with someone in person, find an alternative greeting. While research has shown that fist bumps —and even high fives — transfer far less bacteria than a handshake, more distant options are better. Tip your hat, wave, or curtsy.</Text>
          <Text style={{marginHorizontal:10,marginBottom:15,fontSize:16}}>3. Make a conscious effort to avoid crowds. For example, with warmer weather upon us, think about walking or riding a bike to campus instead of taking the subway or a bus. This recommendation relates both to keeping your distance and avoiding contaminated surfaces, because the more people, the more those common surfaces get touched. </Text>

        </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ebebeb',
  },
  card:{
    elevation: 10,
    backgroundColor: 'white',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    height:260,
    flexDirection:'column',
    marginVertical:10,
    width:"100%",
    borderRadius:15,
    shadowOpacity: 0.3,
    shadowRadius: 2}
})