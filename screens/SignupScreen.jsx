import {
  Alert,
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [PassWord, setPassWord] = useState('');
  const [confirmPassWord, setconfirmPassWord] = useState('');
  const handleSignUp = () => {
    if (email && PassWord && confirmPassWord && name) {
      if (PassWord === confirmPassWord) {
        const obj = {name, email, PassWord};
        AsyncStorage.setItem('userData', JSON.stringify(obj));
        Alert.alert('User Created');
        navigation.navigate('Login');
      } else {
        Alert.alert('Password are not same');
      }
    } else {
      Alert.alert('Please enter all details');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TextInput
        placeholder="name"
        value={name}
        onChangeText={setName}></TextInput>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}></TextInput>
      <TextInput
        placeholder="PassWord"
        value={PassWord}
        onChangeText={setPassWord}></TextInput>
      <TextInput
        placeholder="Confirm PassWord"
        value={confirmPassWord}
        onChangeText={setconfirmPassWord}></TextInput>
      <Button title="Signup" onPress={handleSignUp}></Button>
      <Text onPress={() => navigation.navigate('Login')}> Login ?</Text>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
