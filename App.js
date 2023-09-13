import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <View style={styles.Body}>
      <FlatList>Bom dia!</FlatList>
      </View>

      <View style={styles.Form}>
        <TextInput
         style={styles.input}
         placeholderTextColor='#999'
         autoCorrect={true}
         placeholder='Adicionar tarefa'
         maxLength={25}
          />
        <TouchableOpacity style={styles.Button}>
          <Ionicons name='ios-add' size={25} color='white' />
        </TouchableOpacity>
      </View> 
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20
  },
  Body: {
    flex: 1,
  },
  Form: {
    padding: 0,
    height: 60,
    justifyContent: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingTop: 13,
    borderTopWidth: 1,
    borderColor: '#eeee'
  },
  input : {
    flex: 1,
    height: 40,
    backgroundColor: '#eeee',
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  Button: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c6cce',
    borderRadius: 4,
    marginLeft: 10
  },
  FlatList: {

  }
});

