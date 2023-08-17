import React from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Image } from "react-native";
import {
  Container,
  Text,
  Left,
  Right,
  ListItem,
  Thumbnail,
  Body,
  H1,
  Button
} from "native-base";

import Icon from 'react-native-vector-icons/FontAwesome';
import Checkout from "./Checkout/Checkout";
import { connect } from 'react-redux';
import * as actions from '../../Redux/Actions/cartActions';

var { height, width } = Dimensions.get("window");

const Cart = (props) => {
  var total = 0;
  props.cartItems.forEach(item => {
    return (total += item.product.price)
  });
  
  return (
    <View style={{ flex: 1}}>
    {props.cartItems.map(data => {
        return (
           <Container style={styles.container}>
            <Text>{data.product.name} - ${data.product.price}</Text>
            <Text></Text>
           </Container>
        )
    })}
    <View>
      <Text style={styles.total} marginLeft='115' marginTop='30' >Total: ${total}</Text>
      <Text></Text>
      <Button 
         title="Clear" 
         marginLeft='125' 
         width='100px' 
         onPress={() => props.clearCart()}
      >Clear</Button>
      <Text></Text>
      <Button title="Checkout" marginLeft='125' width='100px' onPress={() => props.navigation.navigate('Checkout')}>Checkout</Button>
    </View>
    </View>
  )
}

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart())
  }
}

const styles = StyleSheet.create({
  emptyContainer: {
    height: height,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  body: {
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row'
  },
  bottomContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'white',
    elevation: 20
  },
  total: {
    fontSize: 18,
    margin: 20,
    color: 'red',
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

/*
const Cart = (props) => {
  console.log(props.cartItems)
  return (
    <Container>
      {props.cartItems.length ? (
        <>
          
          {props.cartItems.map(data => {
            return (
              <ListItem
                style={styles.listItem}
                key={Math.random()}
                avatar
              >
                <Left>
                  <Thumbnail 
                    source={{ 
                      uri: data.product.image 
                      ? data.product.image 
                      : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'}}
                  />
                </Left>
                <Body style={styles.body}>
                  <Left>
                    <Text>{data.product.name}</Text>
                  </Left>
                  <Right>
                    <Text>${data.product.price}</Text>
                  </Right>
                </Body>
              </ListItem>
            )
          })}
        </>
      ) : (
        <Container style={styles.emptyContainer}>
          <Text>Cart is empty</Text>
        </Container>
      )}
    </Container>
  )
}

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

const styles = StyleSheet.create({
  emptyContainer: {
    height: height,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listItem: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  body: {
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row'
  },
})

export default connect(mapStateToProps, null)(Cart);*/