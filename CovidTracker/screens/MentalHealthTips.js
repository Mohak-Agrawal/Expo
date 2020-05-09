
import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function MentalHealthTips() {
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
          <Text style={{fontSize:28,alignSelf:'center',color:'white',textAlign:'center'}}>How to maintain your mental health during Covid-19</Text>
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
          <Text style={{margin:10,fontSize:22,color:'#0099cb',}}>1. Be social </Text>
          <Text style={{marginHorizontal:10,marginBottom:5,fontSize:16}}>The first stage is to keeping your cool when you feel anxious or lonely. Remember: if your entire company is working remotely, they’re likely experiencing the same kind of stress. It’s important to know you’re not alone. And the best way to do that is to connect with each other more often than ever. But that also does not mean that you’re constantly on phone or messaging platforms, because that may hamper work.</Text>
          <Text style={{marginHorizontal:10,marginBottom:15,fontSize:16}}>Being social can also help you stay productive. Plan regular 1:1s to check 1:1s to check in on your teammates emotionally as well as professionally. Use instant messaging and tools like Asana to keep your team on track. The more you move forward as normal, the more things will keep feeling normal.</Text>
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
        <Text style={{margin:10,fontSize:22,color:'#0099cb',}}>2. 24*7 social media is a big NO</Text>
          <Text style={{marginHorizontal:10,marginBottom:15,fontSize:16}}>It’s okay to log off. In fact, it’s okay to completely unplug at times. Give yourself that break from both social media and work—the do not disturb function is there for a reason. Your work will still be there after you finish your meal. Use tools like Screen Time to manage your social media usage and be cautious about fake news. Take the time to seek out accounts that help your mental well-being to counteract the stress of social media.</Text>
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
          <Text style={{margin:10,fontSize:22,color:'#0099cb',}}>3. Stay active</Text>
          <Text style={{marginHorizontal:10,marginBottom:15,fontSize:16}}>It’s easy to spend your entire remote workday on your couch or bed, in your pyjamas, staring at a screen for nine hours straight. But that’s not good for your body. The steps you take in an office, for instance walking to conference rooms for meetings, going to the bathroom or downstairs to pick up your lunch or even walking to a co-worker’s desk can be replicated at home—consider taking “desk breaks” where you move to a different workspace. And get some sunshine and fresh air outside! Download a yoga app or a fitness app, do that 30 mins of workout every day. Maybe, even in between work hours.</Text>
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
          <Text style={{margin:10,fontSize:22,color:'#0099cb',}}>4. Create and maintain a routine</Text>
          <Text style={{marginHorizontal:10,marginBottom:15,fontSize:16}}>In a daily office setting, you may spend an hour commuting to work and 30 minutes settling into the office, take a 10 a.m. coffee break with your co-worker, and then work straight until lunch. It’s even more difficult to build your day like this when you’re working from home. So get dressed and ready for your day when you wake up, even if that means just changing from your pyjamas to another set of pyjamas. Make your favourite coffee and breakfast and take the usual breaks that you would in the office. Take that lunch break and nourish yourself away from your workspace as you would do at your office. And at the end of the day, log off from work completely.</Text>
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
          <Text style={{margin:10,fontSize:22,color:'#0099cb',}}>5. Find your calm</Text>
          <Text style={{marginHorizontal:10,marginBottom:15,fontSize:16}}>Managing your mental wellness is just as important after work as it is during working hours. So once you log off, put your phone on ‘do not disturb’ and seek comfort in the things that matter to you and make you happy. Focusing on a hobby, watching a film or reading a book, making a phone call to a friend or a family member, taking a nap, or cooking your favourite meal. You’ve put in a hard day in the middle of a hard time—you deserve to be well.</Text>
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