import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { Header } from "../../components";
import { CategoryItem } from "./components";
import dataCategories from "../../data/dataCategories" 

const Home = () => {
    return (
        <View style={styles.container}>
            
            <Header title={"Categories"}/>
            <FlatList 
                data={dataCategories}
                keyExtractor={category => category}
                renderItem={({item}) => <CategoryItem category={item}/>}
            />
            
        </View>
            

    )
}

export default Home 

const styles = StyleSheet.create({


})


/*
import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import dataCategories from "../data/dataCategories";
import CategoryItem from "../screens/Home/components/CategoryItem/CategoryItem";


const Categories = () => {
    return (
        <View >
            <FlatList data={dataCategories}
            keyExtractor={category => category}
            renderItem={({item}) => <CategoryItem category={item}/>}
            />
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    }

})
*/