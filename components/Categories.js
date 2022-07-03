import { View, Text ,FlatList,TouchableOpacity,StyleSheet } from 'react-native'
import {COLORS} from '../variables/Colors'
import {categories} from '../api/api.js'

export default function Categories() {

  return (
    <View style={{flexDirection:'row'}}>
        <FlatList data={categories} horizontal showsHorizontalScrollIndicator={false} renderItem={({item})=>
        <TouchableOpacity style={style.catBtn}>
            <Text style={{fontSize:19,letterSpacing:2,color:COLORS.white}}>{item.title}</Text>
        </TouchableOpacity>
        } />
    
    </View>
  )
}

const style = StyleSheet.create({
    catBtn : {
      textTransform:'uppercase',
      width:135,
      height: 45,
      borderRadius: 7,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:COLORS.DarkLight,
      borderWidth:1,
      padding:5,
      margin:7,
    },
  
  })