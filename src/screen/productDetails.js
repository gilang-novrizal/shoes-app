import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {View, Text, Image, StyleSheet} from "react-native"
import Button from "react-native-paper/lib/commonjs/components/Button"
import IconButton from "react-native-paper/lib/commonjs/components/IconButton"

// import component
import Color from "../component/color"
import Size from "../component/size"
import ProductModal from "../component/modal"

import {addToCart} from "../action"

const COLORGROUP = [
    { code: '#f1c40f', name: 'orange' },
    { code: '#2ecc71', name: 'green' },
    { code: '#e74c3c', name: 'red' },
    { code: '#3498db', name: 'blue' },
    { code: '#2c3e50', name: 'asphalt' },
];

const SIZE = [38, 39, 40, 41, 42];

const ProductDetails = ({route, navigation})=>{
    const [visible, setVisible] = React.useState(false)
    const [color, setColor] = React.useState('')
    const [size, setSize] = React.useState(0)
    const [qty, setQty] = React.useState(0)

    const {product} = route.params
    const dispatch= useDispatch()

    const {id} = useSelector((state)=>{
        return{
            id: state.userReducer.user_id
        }
    })

    const handlePlus = ()=>{
        setQty((prevstate)=> prevstate + 1)
    }

    const handleMinus = ()=>{
        if(qty <= 0) return
        setQty((prevstate)=> prevstate -1)
    }

    const handleAdd =  ()=>{
        const cart = {
            color,
            size,
            qty,
            price: product.price,
            user_id: id,
            product_id: product.id
        }
        console.log('cart: ', cart)
        if(!color || !size || !qty) return
        
        dispatch(addToCart(id, cart))
        resetState()
        navigation.navigate("Cart")
       
    }

    const resetState = ()=>{
        setVisible(false)
        setColor('')
        setSize(0)
        setQty(0)
    }

    const _onBackdropPress = ()=> resetState()

    const renderColor = ()=>{
        return COLORGROUP.map((item,index)=>{
            if(color === item.name){
                return(
                    <Color
                        key={index}
                        color={item.code}
                        onTouch={()=> setColor(item.name)}
                        opacity={0.6}
                        border={2}
                        />
                )
            }else{
                return(
                    <Color
                        key={index}
                        color={item.code}
                        onTouch={()=> setColor(item.name)}
                      />
                )
            }
        })
    }

    const renderSize = ()=>{
        return SIZE.map((item,index)=>{
            if(size === item){
                return(
                    <Size
                        key={index}
                        size={item}
                        onTouch={()=> setSize(item)}
                        color={{backgroundColor: color}}
                    />
                )
            }else{
                return(
                    <Size
                    key={index}
                    size={item}
                    onTouch={()=> setSize(item)}
                />
                )
            }
        })
    }

    return(
        <View style={styles.root}>
            <Text>Product Details</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri : product.images[0] }}/>
            </View>
            <View style={styles.details}>
                <Text>Brand : {product.brand}</Text>
                <Text>Price : {product.price}</Text>
                <Text>Description : {product.description}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <IconButton
                    icon="bookmark-plus"
                    color="#e74c3c"
                    style={styles.iconButton}/>
                <Button
                    mode="contained"
                    style={styles.button}
                    onPress={()=> setVisible(true)}>
                    Add To Cart
                </Button>
                <ProductModal
                    visible={visible}
                    backdropPress={_onBackdropPress}
                    renderColor={renderColor()}
                    renderSize={renderSize()}
                    onPressMinus={handleMinus}
                    qty={qty}
                    onPressPlus={handlePlus}
                    onPressDone={handleAdd}
                    onPressCancel={resetState}
                    />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: "5%",
        paddingVertical: "3%"
    },
    imageContainer:{
        height: "40%",
        width: "100%",
    },
    image: {
        height: "100%",
        width: "100%"
    },
    details:{
        paddingVertical: "3%"
    },
    buttonContainer:{
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: "5%"
    },
    iconButton : {flex: 1},
    button: {flex: 3},
})
export default ProductDetails