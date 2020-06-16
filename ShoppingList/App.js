import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Eggs'},
    {id: 3, text: 'Bread'},
    {id: 4, text: 'Juice'},
  ]);

  const deleteItem = (id) => {
    setItems((prevItems => {
      return prevItems.filter(item => item.id != id);
    }))
  }

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <FlatList
        style={styles.flatlist}
        data={items}
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} />} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
  },
  flatlist: {
    backgroundColor: 'whitesmoke',
  }
});

export default App;
