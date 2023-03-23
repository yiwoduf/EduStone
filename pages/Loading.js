import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, AsyncStorage, Button} from 'react-native';
import { useState, useEffect } from 'react';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";

const storeUserEmail = async (value) => {
	try {
		await AsyncStorage.setItem('userEmail', value);
    console.log("Stored userEmail...");
	} catch (error) {
		console.log("Error storing userEmail");
	}
}

function requestUser(userID) {
  return new Promise(resolve => {
    setTimeout(() => {
      // this fetch needs to be the IP of the server host
                // !!!!!!!!!!!!!!!!!!!!!!!!!!!
      resolve(fetch(`http://10.104.254.103:8080/api/users?id=${userID}`)
        .then(response => response.json())  
        .catch(error => {
          console.error(error);
        })
      );
    }, 0); 
  });
}

// function to use the stored userID to retrieve a JSON containing information
async function getUser() {
  console.log("Retrieving userEmail...");
	const userEmail = await AsyncStorage.getItem('userEmail');
  console.log("Retrieved userEmail...");
  console.log("Sending API request...");
  const user = await requestUser(userEmail);
  console.log("Response recieved: ", user);
  console.log("Retrieved API response...");
	return user;
}

// App Rendering
export default function App({route}) {

  const {userEmail, userPassword} = route.params;
  const email = userEmail.email;
  const password = userPassword.password;
  const [user, setUser] = useState();
  const [isLoading, setLoading] = useState(true);
  const navigation = useNavigation();

  const prepUserData = () => {
    storeUserEmail(email);
    console.log("Starting getUser Process...");
    console.log("===========================");
    getUser().then(response => {
      setUser(response);
      console.log("===========================");
      console.log("Ending getUser Process...");
      setLoading(false);
    });
  };

  useEffect(() => {
    prepUserData();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView  style={styles.containerLoading}>
        <StatusBar style="auto" />
        <Text>Loading...</Text>
      </SafeAreaView >
    );
  }

  return (
    <SafeAreaView style={styles.containerLoaded}>
      <StatusBar style="auto" />
      <Text>ID: {user.id} </Text>
      <Text>First Name: {user.first_name} </Text>
      <Text>Last Name: {user.last_name} </Text>
      <Text>Email: {user.email} </Text> 
      <Button title="Continue" onPress={() => navigation.navigate('Home', { screen: "stone"})}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerLoading: {
    flex: 1,
    backgroundColor: '#D62828',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  containerLoaded: {
    flex: 1,
    backgroundColor: '#A3B18A',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
  },
});
