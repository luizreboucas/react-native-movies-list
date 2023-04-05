import {Pressable, Image, Text} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

export default function Card ({styles,item,image_path,navigation}){
    const Stack = createNativeStackNavigator()
    console.log(item)
    return(
        <Pressable 
                style={styles.card}
                onPress={()=>navigation.navigate('Details',{
                    title: item.original_title,
                    image: `${image_path}${item.poster_path}`,
                    overview: item.overview
                })}
                >
                <Image style={styles.poster} source={{uri: `${image_path}${item.poster_path}`}}/>
                <Text style={styles.title}>{item.original_title}</Text> 
              </Pressable>
    )
}