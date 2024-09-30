import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { Colors } from "../../constants/colors";
import ImagePicker from "../ImagePicker/ImagePicker";

function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState();

  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}> Title</Text>
        <TextInput
          onChangeText={changeTitleHandler}
          value={enteredTitle}
          style={styles.input}
        />
      </View>
      <ImagePicker />
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary700,
  },
  input: {
    marginVertical: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontSize: 14,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
