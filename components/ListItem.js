import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icon/FontAwesome';

const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <TouchableOpacity
          style={{
            width: 50,
            height: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => deleteItem(item.id)}>
          <Text style={{color: 'red'}}>Delete</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
  },
});

export default ListItem;
