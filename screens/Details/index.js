import { Text, SafeAreaView, Image, StyleSheet, ScrollView,View } from 'react-native'
import { windowHeight, windowWidth } from '../../Global/globalStyle'
import { AntDesign } from '@expo/vector-icons'
export default function Details({route, navigation}){
    
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={{width: windowWidth}}>
                    <AntDesign 
                        style={styles.icon} 
                        name="left" 
                        size={36} 
                        onPress={()=>navigation.navigate('Home')}
                    />
                </View>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>{route.params.title} </Text>
                </View>
                
                
                <Image
                    source= {{uri: `${route.params.image}`}}
                    style={styles.poster}
                />
                <ScrollView>
                    <Text style={styles.description}>{route.params.overview}</Text>
                </ScrollView>
            </View>
            
            
        </SafeAreaView>
        

    ) }

const styles = StyleSheet.create({
    icon: {
        color: 'white',
        margin: 10
        
    },
    container: {
        flex: 1,
        backgroundColor: '#222222',
        alignItems: 'center',
        width: windowWidth,
      },
    poster: {
        height: windowHeight /2,
        width: '90%',
        borderRadius: 6,    
      },
    headerContainer: {
        backgroundColor: '#333333',
        width: windowWidth / 1.1 + 4,
        borderRadius: 9,
        paddingBottom: 15,
        paddingTop: 15,
        marginBottom: 30,
        marginTop: 20,
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: 'Poppins_Bold',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        
        
      
    },
    description: {
        fontSize: 15,
        fontFamily: 'Poppins_Bold',
        textAlign: 'center',
        color: 'white',
        marginTop: 60,
        width: windowWidth / 1.1 + 4
       
      
    }
})