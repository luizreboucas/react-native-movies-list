import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { movies } from './Mocks/movies'
import { windowHeight, windowWidth } from './Global/globalStyle';
import { useFonts} from 'expo-font'
import Key from './Key';
import { useEffect, useState } from 'react';

export default function App() {
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
    Poppins_Bold: require('./assets/fonts/Poppins-Bold.ttf')
  })
  if(!fontsLoaded){
    return null
  }

  

  console.log(movies)
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
              <View style={styles.card}>
                <Image style={styles.poster} source={{uri: `${image_path}${item.poster_path}`}}/>
                <Text style={styles.title}>{item.original_title}</Text> 
              </View>
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
    overflow: 'hidden',
    backgroundColor: 'white',
    borderColor: 'black'
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: 'Poppins_Bold',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
    

  },
  poster: {
    height: windowHeight / 2.5,
    width: windowWidth/2.5,
    borderRadius: 6,
    margin: 6,
    
  },
  title: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Poppins_Bold',
    color: 'white',
    fontWeight: 'bold',
  },
  
});
