
import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function FitnessTips() {
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
          <Text style={{fontSize:28,alignSelf:'center',color:'white',textAlign:'center'}}>Exercising During COVID-19</Text>
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
          <Text style={{margin:10,fontSize:22,color:'#0099cb',}}>1. Take advantage of free virtual workout classes </Text>
          <Text style={{marginHorizontal:10,marginBottom:15,fontSize:16}}>Let the exercise come to you. Many fitness companies are offering free virtual classes and resources to access from anywhere, at any time. 

Nike now offers their Nike Training Club Premium service for free, with nearly 200 streaming workouts and tips from Nike’s own experts. Orangetheory Fitness offers free 30-minute workouts every day, while Peloton offers a free 90-day trial, including virtual strength training and yoga classes — not requiring a Peloton treadmill or bike.

Need a hand with strength training at home? Noel suggests using milk cartons, soup cans or water bottles to add a little weight lifting into your routine.</Text>

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
        <Text style={{margin:10,fontSize:22,color:'#0099cb',}}>2. Never underestimate the power of stretching</Text>
          <Text style={{marginHorizontal:10,marginBottom:5,fontSize:16}}>One nice thing about stretching is you don’t need much space to do it. At-home yoga or even simple stretches can relieve muscle tension and help realign your posture. Get creative: Noel suggests using a belt, tie, towel or other household items to help stretch out.</Text>
          <Text style={{marginHorizontal:10,marginBottom:5,fontSize:16}}>For individuals working at a home desk all day, try some simple stretches to open up your chest and back: Stand straight and lean down to touch your toes, or link your hands behind your back and bend over to elongate your spine.</Text>
          <Text style={{marginHorizontal:10,marginBottom:15,fontSize:16}}>Another stretch for improving posture is the shoulder roll: Sit or stand comfortably. As you inhale, raise your shoulders to your ears. As you exhale, pull your shoulder blades down and together. Do this five or 10 times in a row, a few times a day.</Text>
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
          <Text style={{margin:10,fontSize:22,color:'#0099cb',}}>3. You’re never too old to rock out</Text>
          <Text style={{marginHorizontal:10,marginBottom:5,fontSize:16}}>It's no secret that professional dancers are in incredible shape, but you don't have to be a pro to reap the health benefits of dancing. Turn on those guilty pleasure tunes or livestream one of the countless free concerts on social media — and dance.</Text>
          <Text style={{marginHorizontal:10,marginBottom:15,fontSize:16}}>A 150-pound person can burn 95 calories dancing for just 15 minutes — that's four to five songs — and it’s one of the greatest (and most enjoyable) stress-relieving activities.</Text>
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
          <Text style={{margin:10,fontSize:22,color:'#0099cb',}}>4. Yoga</Text>
          <Text style={{marginHorizontal:10,marginBottom:5,fontSize:16}}>Yoga can be done just about anywhere. All you need to get started is a mat, comfortable attire and a program to follow. Yoga mats and other equipment can be ordered for home delivery from multiple online outlets. You can find a wealth of tutorials on YouTube or in your app store , including:</Text>
          <Text style={{marginHorizontal:10,marginBottom:5,fontSize:16}}>1. Beginner’s Guide from YogaInternational.com</Text>
          <Text style={{marginHorizontal:10,marginBottom:5,fontSize:16}}>2. Yoga for Beginners on YouTube</Text>
          <Text style={{marginHorizontal:10,marginBottom:15,fontSize:16}}>3. 10 Best Yoga Apps from Women’s Health Magazine</Text>
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