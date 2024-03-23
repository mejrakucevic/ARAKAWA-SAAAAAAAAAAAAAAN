import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, FlatList } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do List!</Text>

      <TextInput placeholder="Add your task" style={styles.InputBar} />
      <View>
        <FlatList>
          <Text style={styles.title}>HELLO</Text>
        </FlatList>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CFA3EA",
    color: "white",
  },
  title: {
    margin: 50,
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
  InputBar: {
    backgroundColor: "whitesmoke",
    color: "#4361EE",
    padding: 20,
    borderWidth: 1,
    borderColor: "#4361EE",
    margin: 10,
    borderRadius: 15,
  },
});
