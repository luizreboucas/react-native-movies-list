import { Text, View, Image } from 'react-native'
export default function Details({route}){
    return(
        <View>
            <Text>Details {route.params.title}</Text>
            <Image
                source= {{uri: `${route.params.image}`}}
                styles={{height: 40, width: 40}}
            />
            <Text>{route.params.overview}</Text>
            
        </View>
        

    )
}