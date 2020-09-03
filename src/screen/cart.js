import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {View, Text, StyleSheet, ScrollView} from "react-native"
import Button from "react-native-paper/lib/commonjs/components/Button"
import Modal from "react-native-modal"
import ActivityIndicator from "react-native-paper/lib/commonjs/components/ActivityIndicator"

// import component
import {CardList, CardListEdit} from "../component/cart"
import CartHeader from "../component/cartHeader"

// import action
import {getCartData, editCart, deleteCart} from "../action"

const {useEffect, useState} = React
const Cart = ({navigation}) =>{
    const [editIndex, setEditIndex] = useState(null) 
    const [editQty, setEditQty] = useState(null) 

    const {id,cart,loading, total} = useSelector((state)=>{
        return{
            id: state.userReducer.user_id,
            cart: state.cartReducer.cart,
            loading: state.cartReducer.loading,
            total: state.cartReducer.total
        }
    })
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCartData(id))
    }, [])

    const handleEdit=(item)=>{
        setEditIndex(item.id)
        setEditQty(item.qty)
    }

    const handleDone = (item)=>{
        const CartEdit = {
            order_number: item.order_number,
            product_id: item.product_id,
            qty: editQty
        }
        dispatch(editCart(id, CartEdit))
        setEditIndex(null)
    }

    const handleDelete = (item)=>{
        const order_number = item.order_number
        const product_id = item.product_id
   
        dispatch(deleteCart(id, product_id,order_number ))
    }
    const renderCart = ()=>{
        return cart.map((item)=> (
            item.id === editIndex? (
            <CardListEdit
                key={item.id}
                title={item.name}
                price={item.price}
                qty={editQty}
                onTouchPlus={() => setEditQty((prevstate)=>prevstate + 1)}
                onTouchMinus={()=> editQty <= 0? null : setEditQty((prevstate)=>prevstate - 1)}
                onTouchCancel={()=> setEditIndex(null)}
                onTouchDone={()=> handleDone(item)}
                />):
            (
            <CardList
                key={item.id}
                title={item.name}
                price={item.price}
                qty={item.qty}
                onTouchEdit={()=> handleEdit(item)}
                onTouchDelete={()=> handleDelete(item)}
            />)
            
        ))
    }

    const onRefresh_ = ()=>{
        dispatch(getCartData(id))
        setEditIndex(null)
    }

    // console.log('total : ', total)
    return(
        <View style={styles.root}>
            <CartHeader
                onTouch={()=> navigation.navigate("Product-Nav")}
                onRefresh={onRefresh_}/>
            <ScrollView style={styles.cardContainer}>
                {renderCart()}
            </ScrollView>
            <View style={styles.checkout}>
                <Text>Total: {total}</Text>
                <Button mode="contained">CheckOut</Button>
            </View>
            <Loading visible={loading}/>
        </View>
    )
}

const Loading = ({visible})=>{
    return(
        <Modal visible={visible}>
            <View style={styles.loading}>
                <ActivityIndicator size={28}/>
                {/* <Text style={styles.loadingtext}>Loading . . .</Text> */}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    root:{
        flex: 1
    },
    cardContainer:{
        flex: 1, 
        paddingHorizontal: "5%",
        paddingVertical: "3%"
    },
    checkout:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 15
    },
    loading: {
        backgroundColor: 'white',
        width: '50%',
        height: '30%',
        display: "flex",
        flexDirection: "row",
        alignSelf: 'center',
        justifyContent: "center"
    },
    loadingtext: {
        fontSize: 15,
    },
})

export default Cart