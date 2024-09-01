import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [shopping, setShopping] = useState("");
  const [shoppings, setShoppings] = useState([]);
  console.log(shoppings);

  const handlePress = () => {
    setShoppings([...shoppings, { key: shopping }]);
    setShopping("");
  }
  const handleClear = () => {
    setShoppings([]);
    setShopping("");
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Enter a new item...'
        onChangeText={text => setShopping(text)}
        value={shopping}
      />
      <View style={styles.button}>
        <Button
          title="Add" onPress={handlePress}
        />
        <Button
          title='Clear' onPress={handleClear}
        />
      </View>
      <Text style={styles.shopping}>Shoppinglist</Text>
      <FlatList
        data={shoppings}
        renderItem={({ item }) => <Text style={styles.itemText}>{item.key}</Text>}
        ListEmptyComponent={<Text>No grocerys</Text>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  shopping: {
    marginTop: 40, color: "blue", fontSize: 20, fontWeight: "bold"
  },
  itemText: {
    width: 100, textAlign: "center",
  },
  button: {
    flexDirection: "row",
  }
});
