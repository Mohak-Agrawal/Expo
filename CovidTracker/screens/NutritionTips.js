
import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function NutritionTips() {
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
          <Text style={{fontSize:24,alignSelf:'center',color:'white',textAlign:'center'}}>Easy, affordable and healthy eating tips during the coronavirus disease (COVID-19) outbreak.</Text>
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
          <Text style={{margin:10,fontSize:22,color:'#0099cb',}}>1. Keep up fruit and vegetable intake </Text>
          <Text style={{marginHorizontal:10,marginBottom:5,fontSize:16}}>Purchasing, storing and cooking fresh vegetables can be challenging in a lockdown, especially when parents are advised to limit trips outside of the home. But wherever possible, it’s important to ensure children are still getting plenty of fruit and vegetables in their diet.</Text>
          <Text style={{marginHorizontal:10,marginBottom:15,fontSize:16}}>Whenever it is possible to get hold of fresh produce, do so. As well as being eaten fresh, fruits and vegetables can be frozen where possible and will retain most of their nutrients and flavor. Using fresh vegetables to cook large batches of soups, stews or other dishes will make them last longer and provide meal options for a few days. These can also be frozen where possible and then quickly reheated.</Text>

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
        <Text style={{margin:10,fontSize:22,color:'#0099cb',}}>2. Swap in healthy dried or canned alternatives when fresh produce is not available</Text>
          <Text style={{marginHorizontal:10,marginBottom:5,fontSize:16}}>Fresh produce is almost always the best option, but when it is not available there are plenty of healthy alternatives that are easy to store and prepare.</Text>
          <Text style={{marginHorizontal:10,marginBottom:5,fontSize:16}}>Canned beans and chickpeas, which provide an abundance of nutrients, can be stored for months or even years, and can be included in meals in many ways. Canned oily fish such as sardines, mackerel and salmon are rich in protein, omega 3 fatty acids and a range of vitamins and minerals. These can be used cold in sandwiches, salads or pasta dishes, or cooked as part of a warm meal.</Text>
          <Text style={{marginHorizontal:10,marginBottom:5,fontSize:16}}>Canned vegetables, such as tomatoes, do tend to contain lower quantities of vitamins than fresh produce, but they are a great fallback option when fresh produce or frozen vegetables are hard to come by.</Text>
          <Text style={{marginHorizontal:10,marginBottom:15,fontSize:16}}>Dried goods like dried beans, pulses and grains such as lentils, split peas, rice, couscous or quinoa are also nutritious, long-lasting options that are tasty, affordable and filling. Rolled oats cooked with milk or water can serve as an excellent breakfast option, and can be spiced up with yoghurt, chopped fruits or raisins. 

</Text>
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
          <Text style={{margin:10,fontSize:22,color:'#0099cb',}}>3. Build up a stock of healthy snacks</Text>
          <Text style={{marginHorizontal:10,marginBottom:15,fontSize:16}}>Children often need to eat a snack or two during the day to keep them going. Rather than giving kids sweets or salty snacks, opt for healthier options like nuts, cheese, yoghurt (preferably unsweetened), chopped or dried fruits, boiled eggs, or other locally available healthy options. These foods are nutritious, more filling, and help build healthy eating habits that last a lifetime.</Text>
        </View>
        {/* ---------------------------------- */}
        <View style={styles.card}>
        <Text style={{margin:10,fontSize:22,color:'#0099cb',}}>4. Limit highly processed foods  </Text>
          <Text style={{marginHorizontal:10,marginBottom:15,fontSize:16}}>While using fresh produce may not always be possible, try to limit the amount of highly processed foods in your shopping basket. Ready-to-eat meals, packaged snacks and desserts are often high in saturated fat, sugars and salt. If you do purchase processed foods, look at the label and try to choose healthier options containing less of these substances. Try to also avoid sugary drinks and instead drink lots of water. Adding fruits or vegetables like lemon, lime, cucumber slices or berries to water is a great way to add an extra twist of flavor.</Text>
        </View>
        {/* ---------------------------------- */}
        <View style={styles.card}>
        <Text style={{margin:10,fontSize:22,color:'#0099cb',}}>5. Make cooking and eating a fun and meaningful part of your family routine </Text>
          <Text style={{marginHorizontal:10,marginBottom:5,fontSize:16}}>Cooking and eating together is a great way to create healthy routines, strengthen family bonds and have fun. Wherever you can, involve your children in food preparation – small children can help with washing or sorting food items while older children can take on more complex tasks and help to set the table.</Text>
          <Text style={{marginHorizontal:10,marginBottom:15,fontSize:16}}>Try as much as possible to stick to fixed mealtimes as a family. Such structures and routine can help reduce anxiety for children in these stressful situations.</Text>
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
    padding:5,
    flexDirection:'column',
    marginVertical:10,
    width:"100%",
    borderRadius:15,
    shadowOpacity: 0.3,
    shadowRadius: 2}
})