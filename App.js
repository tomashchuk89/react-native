import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './src/components/Card/Card';

const mockItemData = {
  title: 'Pizza 1',
  isNew: true, 
  image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
  descript: 'Long title long title'
};


export default function App() {
  return (
    <View style={styles.container}>
      <Card itemData={mockItemData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
