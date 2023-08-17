import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import ProductList from './ProductList';

const data = require('../../assets/data/products.json');

const ProductContainer = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(data);

        return () => {
            setProducts([]);
        }
    }, [])

    return (
        <View>
            <View style={{ marginTop: 100}}>
            <FlatList 
              numColumns={2}
              data={products}
              renderItem={({item}) => 
              <ProductList 
                navigation={props.navigation}
                key={item.id}
                item={item}  
              />}
              keyExtractor={item => item.name}
            />
        </View>
        </View>
    )
}

export default ProductContainer;