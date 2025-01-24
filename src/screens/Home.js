import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Title Section */}
      <Text style={styles.title}>Lorem ipsum</Text>
      <Text style={styles.subtitle}>Lorem ipsum dolor sit amet consectetur</Text>

      {/* Placeholder Box */}
      <View style={styles.placeholder} />

      {/* Continue Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Navigate to the next screen (if applicable)
          navigation.navigate('Camera'); // Replace 'Camera' with the actual screen name
        }}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // White background
    paddingHorizontal: 20, // Padding for better responsiveness
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000', // Black text
  },
  subtitle: {
    fontSize: 16,
    color: '#666', // Gray text
    marginBottom: 30,
    textAlign: 'center',
  },
  placeholder: {
    width: 200,
    height: 200,
    backgroundColor: '#e0e0e0', // Light gray for placeholder
    borderRadius: 10,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#333', // Dark gray button
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff', // White text
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
