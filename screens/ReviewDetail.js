import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ReviewDetail({route, navigation}) {

    const {title, body, rating} = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.titleText}>{body}</Text>
            <Text style={styles.titleText}>{rating}</Text>
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
