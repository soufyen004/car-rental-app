import { View, Text , Image , Dimensions ,Button, TouchableOpacity } from 'react-native'
import {COLORS} from '../variables/Colors'

const HomeCart = (props) => {

const width = Dimensions.get('screen').width/2-10

  return (
    <View style={{
        padding:7,
        margin:5,
        justifyContent:'space-evenly',
        backgroundColor:COLORS.white,
        width,
        // height: height * 0.25,
        height:300,
        borderRadius:10,
        backgroundColor:'#2B3035',
        }}>
        <Text style={{color:COLORS.white,fontWeight:'700',marginTop:10}}>5.0</Text>
        <Image source={props.img} style={{width:'100%',height:'70%', resizeMode: 'contain'}} />
        <Text style={{color:COLORS.white,fontWeight:'900',fontSize:25}}>{props.name}</Text>
        <View style={{marginVertical:15,flexDirection:'row',alignItems:'center'}}>
            <Text style={{color:COLORS.white,fontWeight:'500',fontSize:19,letterSpacing:2}}>{props.price}</Text>
            <Text style={{color:COLORS.DarkLight,fontWeight:'500',fontSize:15,}}> MAD/Day</Text>
        </View>
    </View>
  )
}

export default HomeCart