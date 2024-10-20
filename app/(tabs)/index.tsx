import { StyleSheet, Image, Text, View } from 'react-native';
import Food from '@/assets/Data/Food';
import EditScreenInfo from '@/components/EditScreenInfo';




export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: Food[0].image}} 
        style={styles.image} 
      />
      <Text style={styles.title}>{Food[0].title}</Text>
      <Text style={styles.title}>{Food[0].price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    aspectRatio: 12 / 1
  },
});
