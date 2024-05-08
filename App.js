
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList} from 'react-native';
import Card from './src/components/Card/Card';
import InputElement from './src/components/Input/Input';


const mockItemData = [
  { id: 1,
    title: 'Margherita',
    isNew: true, 
    image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
    descript: 'Long title long title Long title long title Long title long title'
  },
  {
    id: 2,
    title: 'Pepperoni',
    isNew: true, 
    image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
    descript: 'Long title long title Long title long title Long title long title'
  },
  {
    id: 3,
    title: 'Hawaiian',
    isNew: true, 
    image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
    descript: 'Long title long title Long title long title Long title long title'
  },
  {
    id: 4,
    title: 'Meat Lovers',
    isNew: true, 
    image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
    descript: 'Long title long title Long title long title Long title long title'
  },
  {
    id: 5,
    title: 'Veggie Supreme',
    isNew: true, 
    image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
    descript: 'Long title long title Long title long title Long title long title'
  },
  {
    id: 6,
    title: 'BBQ Chicken',
    isNew: true, 
    image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
    descript: 'Long title long title Long title long title Long title long title'
  },
  {
    id: 7,
    title: 'Four Cheese',
    isNew: true, 
    image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
    descript: 'Long title long title Long title long title Long title long title'
  },
  {
    id: 8,
    title: 'Supreme',
    isNew: true, 
    image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
    descript: 'Long title long title Long title long title Long title long title'
  },
  {
    id: 9,
    title: 'Mushroom and Olive',
    isNew: true, 
    image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
    descript: 'Long title long title Long title long title Long title long title'
  },
  {
    id: 10,
    title: 'Sausage and Mushroom',
    isNew: true, 
    image: 'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg',
    descript: 'Long title long title Long title long title Long title long title'
  },
];


export default function App() {
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState(mockItemData);

  const handleSearch = (text) => {
    const filteredData = mockItemData.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
    setData(filteredData);
  };

  
  return (
    <SafeAreaView style={styles.container}>
      <InputElement
      data={mockItemData}
      setData={setData}
       searchValue={searchValue}
       setSearchValue={setSearchValue}
       handleSearch={handleSearch}/>
      <FlatList
        data={data}
        renderItem={({ item }) => <Card cardItem={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
