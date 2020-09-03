import React from "react"
import {View, Text, StyleSheet} from "react-native"
import Card from 'react-native-paper/lib/commonjs/components/Card/Card'
import IconButton from "react-native-paper/lib/commonjs/components/IconButton"

export const CardList = ({title, price, qty, onTouchEdit, onTouchDelete})=>{
    return(
        <Card style={styles.card}>
            <Card.Title title={title}/>
            <Card.Content>
                <Text>Price: {price}</Text>
                <Text>Quantity: {qty}</Text>
            </Card.Content>
            <Card.Actions style={styles.btnContainer}>
                <IconButton
                    icon="pencil"
                    onPress={onTouchEdit}
                    />
                <IconButton
                    icon="delete"
                    onPress={onTouchDelete}
                    />
            </Card.Actions>
        </Card>
    )
}

export const CardListEdit = ({title, price, qty, onTouchDone, onTouchCancel, onTouchPlus, onTouchMinus})=>{
    return(
        <Card style={styles.card}>
            <Card.Title title={title}/>
            <Card.Content>
                <Text>Harga: {price}</Text>
                <View style={styles.qtyContainer}>
                    <Text>Quantity: </Text>
                    <IconButton
                        icon="minus-circle-outline"
                        onPress={onTouchMinus}/>
                    <Text>{qty}</Text>
                    <IconButton
                        icon="plus-circle-outline"
                        onPress={onTouchPlus}/>
                </View>
            </Card.Content>
            <Card.Actions style={styles.btnContainer}>
                <IconButton
                    icon="check"
                    onPress={onTouchDone}/>
                <IconButton
                    icon="cancel"
                    onPress={onTouchCancel}/>
            </Card.Actions>
        </Card>
    )
}

const styles = StyleSheet.create({
    card:{
        marginBottom: "2%"
    },
    qtyContainer:{
        flexDirection:"row",
        alignItems:"center"
    },
    btnContainer:{
        padding: 0,
        justifyContent: "flex-end"
    },
})