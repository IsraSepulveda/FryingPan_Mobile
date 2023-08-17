import React from "react";
import { View, StyleSheet, Dimensions, ScrollView, Button } from 'react-native';
import {
  Text,
  Left,
  Right,
  ListItem,
  Thumbnail,
  Body
} from 'native-base';
import { connect } from "react-redux";
import * as actions from "../../../Redux/Actions/cartActions";

var { height } = Dimensions.get('window');


const Confirm = (props) => {

  const confirmOrder = () => {
    setTimeout(() => {
      props.clearCart();
      props.navigation.navigate("Cart");
    })
  }

  const confirm = props.route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 20, fontWeight: 'bold'}}>Confirm Order</Text>
        {props.route.params ? 
        <View style={{ borderWidth: 1, borderColor: 'orange'}}>
          <Text style={styles.title} >Shipping to:</Text>
          <View style={{ padding: 8 }}> 
            <Text>Address: {confirm.order.shippingAddress1}</Text>
            <Text>Address2: {confirm.order.shippingAddress2}</Text>
            <Text>Zip code: {confirm.order.zip}</Text>
            <Text>Phone: {confirm.order.phone}</Text>
            <Text>City: {confirm.order.city}</Text>
          </View>
          <View style={{ alignItems: 'center', margin: 20 }}>
            <Button title={'Place order'} onPress={confirmOrder}>Place order</Button>
          </View>
        </View>
      : null}
      </View>
    </ScrollView>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart())
  };
}

const styles = StyleSheet.create({
  container: {
    height: height,
    padding: 8,
    alignContent: 'center',
    backgroundColor: 'white',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8
  },
  title: {
    alignSelf: 'center',
    margin: 8,
    fontSize: 16,
    fontWeight: 'bold'
  },
  listItem: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center'
  },
})

export default connect(null, mapDispatchToProps)(Confirm);
