import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens';
import { Products } from './src/screens';
import { useState } from 'react';

export default function App() {
  const [categorySelected, setCategorySelected] = useState('') 


  return (
        <Products category={"mens-watches"} />
  )
}

