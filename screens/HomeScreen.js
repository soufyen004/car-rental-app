import { View, Text,Button,ScrollView ,StyleSheet , FlatList} from 'react-native'
import {COLORS} from '../variables/Colors'
import HomeCart from '../components/HomeCart'
import Header from '../components/Header'
import {cars} from '../api/api.js'

const HomeScreen = ({navigation}) => {

  return (
    <View style={{backgroundColor:COLORS.PrimaryBg,flex:1}}>     

      <Header/>
      <Categories/>
      <FlatList 
      data={cars}
      numColumns={2} 
      columnWrapperStyle={{justifyContent:'space-between'}}
      renderItem={({item})=>  <HomeCart name={item.name} img={item.img} price={item.price} /> }
      />
 
    </View>
  )
}

export default HomeScreen