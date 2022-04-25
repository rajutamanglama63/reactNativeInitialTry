import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'

export default function Home({navigation}) {
    
    const [reviews, setReviews] = useState([
        {title : "Intu Mintu", rating : 3, body : "loream ipsum gipsum bata", key:"1"},
        {title : "Londan Ma", rating : 7, body : "loream ipsum bata", key:"2"},
        {title : "Hamro Baje", rating : 4, body : "loream ipsum lipsum bata", key:"3"},
    ])

    return (
        <View style={styles.container}>
            <FlatList
             data={reviews}
             renderItem={({item}) => (
                 <TouchableOpacity onPress={() => navigation.navigate("ReviewDetail", item)}>
                     <Text style={styles.titleText}>{item.body}</Text>
                 </TouchableOpacity>
             )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 24
    },
    titleText : {
        fontFamily : 'nunito-bold'
    }
})