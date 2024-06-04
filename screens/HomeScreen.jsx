import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
    useEffect(() => {
      const fetchData = async () => {
        let tempData = JSON.parse(await AsyncStorage.getItem('userData'));
        console.log(tempData);
        setUser(tempData);
      };
      fetchData();
    }, []);
  const [user, setUser] = useState({});
  console.log(user,"The state value");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View>
        <Text style={{fontSize: 23, color: '#000'}}> {user.name}</Text>
        <Text style={{fontSize: 23, color: '#000'}}> {user.email}</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
