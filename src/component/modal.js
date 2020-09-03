import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import Modal from 'react-native-modal'
import Button from "react-native-paper/lib/commonjs/components/Button"

const WIDTH = Dimensions.get("screen").width
const HEIGHT = Dimensions.get("screen").height

const ProductModal = ({
    visible,
    backdropPress,
    renderColor,
    renderSize,
    onPressMinus,
    qty,
    onPressPlus,
    onPressCancel,
    onPressDone
})=>{
    return(
        <Modal
            isVisible={visible}
            hasBackdrop={true}
            deviceHeight={HEIGHT}
            deviceWidth={WIDTH}
            onBackdropPress={backdropPress}
            style={styles.view}>
            <View style={styles.modal}>
                <Text>Color :</Text>
                <View style={styles.colorContainer}>{renderColor}</View>
                <Text>Size </Text>
                <View style={styles.sizeContainer}>{renderSize}</View>
                <Text>Quantity</Text>
                <View style={styles.quantity}>
                    <Button 
                        mode="contained"
                        onPress={onPressMinus}>
                                -
                    </Button>
                    <Text style={styles.qty}>{qty}</Text>
                    <Button 
                        mode="contained"
                        onPress={onPressPlus}>
                        +
                    </Button>
                </View>
                <View style={styles.buttonContainer2}>
                    <Button
                        icon="trash-can"
                        mode="contained"
                        style={styles.addbutton}
                        onPress={onPressCancel}>
                        Cancel
                    </Button>
                    <Button
                        icon="cart"
                        mode="contained"
                        style={styles.addbutton}
                        onPress={onPressDone}>
                        Add To Cart
                    </Button>
                    </View>

            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    view:{
        justifyContent: 'flex-end',
        margin: 0
    },
    modal:{
        flex: 0.45,
        backgroundColor: "#fff",
        paddingVertical: "5%",
        paddingHorizontal: "8%"
    },
    colorContainer:{
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingHorizontal: "2%"
    },
    addbutton:{
        marginTop: 15
    },
    qty:{
        fontSize: 20
    },
    buttonContainer2:{
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    sizeContainer:{
        flex: 1,
        padding: "2%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    quantity:{
        flex: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingHorizontal: "10%"
    },
})

export default ProductModal