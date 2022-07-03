import { View, Text } from 'react-native'
import {COLORS} from '../variables/Colors'


export default function Header() {

    const boxShadow = {
        shadowColor: "#000",
        shadowOffset: {	width: 0,	height: 2,},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
    }

  return (
    <View style={{
        ...boxShadow,
        padding:15,
        margin:5,
        backgroundColor:COLORS.primary,
        borderRadius:15}}>
      <Text style={{fontSize:19 ,color:COLORS.DarkLight}}>Welcome to</Text>
      <Text style={{fontSize:27 ,color:COLORS.white,textTransform:'uppercase'}}>Unique Cars </Text>
    </View>
  )
}