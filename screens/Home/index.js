import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native';
import { windowHeight, windowWidth } from '../../Global/globalStyle';
import { useFonts} from 'expo-font'
import Key from '../../Key';
import { useEffect, useState } from 'react';
import Card from '../../components/Card';

export default function Home({navigation}) {
  const [movies, setMovies] = useState([])
  const image_path = 'https://image.tmdb.org/t/p/w500'

  useEffect(()=>{
    const getMovies = async() => {
      try{
        const url = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${Key}&language=en-US&page=1`)
        const data = await url.json()
        setMovies(data.results)
      }catch(err){
        console.warn(err)
      }
    }

    getMovies()
  },[])

  const [fontsLoaded] = useFonts({
    Poppins_Bold: require('../../assets/fonts/Poppins-Bold.ttf')
  })
  if(!fontsLoaded){
    return null
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Welcome To The Most Popular Movies</Text>
      </View>
      
        <FlatList
          data={movies}
          numColumns={2}
          style={styles.list}
          renderItem={({item})=>{
            return(
              <Card
                styles={styles}
                item={item}
                image_path={image_path}
                navigation={navigation}
              />
            )
          }}
          keyExtractor={(item)=> item.id}
          
        />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
    width: windowWidth,
  },
  header:{
    backgroundColor: '#333333',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30
  },
  card: {
    
    alignItems: 'center',
    width: windowWidth/2.2,
    height: windowHeight / 1.5,
    margin: 4
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: 'Poppins_Bold',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  
  },
  poster: {
    height: windowHeight / 2,
    width: '100%',
    borderRadius: 6,    
  },
  title: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 25,
    fontFamily: 'Poppins_Bold',
    color: 'white',
    fontWeight: 'bold',
  },
  
});
