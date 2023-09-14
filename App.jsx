import React, { useState, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";

export default function App() {
  const [tasks, setTasks] = useState(["oi"]);
  const [newTask, setNewTask] = useState("");

  const addTask = async () => {
    setTasks([...tasks, newTask])
  }

  return (
    <>
      <KeyboardAvoidingView
        keyboardVerticalOffset={0}
        behavior='padding'
        style={{ flex: 1 }}
        enabled={ Platform.OS === 'ios'}
      >
        <View style={styles.container}>
          <View style={styles.Body}>
            <FlatList
              style={styles.FlatList}
              data={tasks}
              keyExtractor={(item) => item.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={styles.ConainerView}>
                  <Text style={styles.Text}>{item}</Text>
                  <TouchableOpacity>
                    <MaterialIcons
                      name="delete-forever"
                      size={26}
                      color="#f64c75"
                    />
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>

          <View style={styles.Form}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#999"
              autoCorrect={true}
              placeholder="Adicionar tarefa"
              maxLength={25}
              onChangeText={text => setNewTask(text)}
            />
            <TouchableOpacity onPress={() => addTask()} style={styles.Button}>
              <AntDesign name="right" size={25} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
  },
  Body: {
    flex: 1,
  },
  Form: {
    padding: 0,
    height: 60,
    justifyContent: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    paddingTop: 13,
    borderTopWidth: 1,
    borderColor: "#eeee",
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: "#eeee",
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  Button: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c6cce",
    borderRadius: 4,
    marginLeft: 10,
  },
  FlatList: {
    flex: 1,
    marginTop: 5,
  },
  ConainerView: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 4,
    backgroundColor: "#eeee",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#eeee",
  },
  Text: {
    fontSize: 14,
    color: "#333",
    fontWeight: "bold",
    marginTop: 4,
    textAlign: "center",
  },
});
