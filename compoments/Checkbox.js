import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function CheckBoxCustom({status}) {
  
  return (
    <Pressable style={styles.container}>
        <Text style={styles.title}>{status}</Text>
    </Pressable>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    borderRadius:8,
    backgroundColor: '#fff',
    marginVertical:10
  },
  title: {
    textAlign:'center',
    fontSize: 16,
  },
});
