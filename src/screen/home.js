import React from 'react'
import {connect} from 'react-redux'
import {View, StyleSheet, FlatList, Dimensions} from 'react-native'
import {Text} from 'react-native-paper'
import Carousel from 'react-native-snap-carousel'

// import action
import {getProducts, getCarousel} from '../action'

// import component 
import ProductCard from '../component/productCard'
import ProductCarousel from '../component/carousel'

// variable
const col = 2
const WIDTH = Dimensions.get('screen').width

class Home extends React.Component{
    componentDidMount(){
        this.props.getProducts()
        this.props.getCarousel()
    }

    _formatData = (data, col)=>{
        const filldata = col - (data.length % col)
        console.log('need data : ', filldata)

        for (let i = 0; i < filldata; i++){
           data.push({empty: true})
        }
        return data
    }

    _renderItem =({item})=>{
        if(item.empty){
            return <ProductCard/>
        } else{
            return(
                <ProductCard
                title={item.name}
                image={item.images[0]}
                harga={item.price}
                brand={item.brand}
                rating={item.rating}/>
            )
        }
    }

    render(){
        return(
            <View style={styles.root}>
                <Carousel
                data={this.props.carousel}
                renderItem={({item})=> <ProductCarousel image={item.image}/>}
                sliderWidth={WIDTH}
                itemWidth={WIDTH}
                layout={'stack'} layoutCardOffset={18}/>
               
                <Text style={styles.title}>
                    Product
                </Text>

                <FlatList
                data={this.props.products}
                keyExtractor={(item)=> item.id.toString()}
                renderItem={this._renderItem}
                numColumns={col}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root:{
        flex: 1,
    },
    title:{
        fontSize: 32,
        fontWeight: '100',
        fontFamily: 'Roboto-Thin'
    }
})

const mapStateToProps = (state)=>{
    return{
        products: state.productReducer.products,
        carousel : state.productReducer.carousel
    }
}
export default connect(mapStateToProps, {getProducts,getCarousel})(Home)