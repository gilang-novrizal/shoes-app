import React from "react"
import {View, StyleSheet, Text, TouchableOpacity} from "react-native"

const Size = ({size, onTouch, color = {}})=>{
    return(
        <TouchableOpacity style={[styles.size, color]} onPress={onTouch}>
            <View style={styles.sizebox}>
                <Text>{size}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    sizebox:{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    size:{
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 15
    },
})

export default Size