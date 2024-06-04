import {
    Alert,
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [PassWord, setPassWord] = useState('');
  const handleLogin = async() => {
    if (email && PassWord ) {
       const tempObj =JSON.parse (await AsyncStorage.getItem('userData'))
       console.log(tempObj);
        if (email == tempObj.email & PassWord == tempObj.PassWord) {
            navigation.navigate('HomeComp');
        }else{
            Alert.alert("Invalid credentials")
        }
    }else{
        Alert.alert("Please enter email and Password")
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}></TextInput>
      <TextInput
        placeholder="PassWord"
        value={PassWord}
        onChangeText={setPassWord}></TextInput>
      <Button title="Login" onPress={handleLogin}></Button>
      <Text onPress={() => navigation.navigate('Signup')}> SignUp ?</Text>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
