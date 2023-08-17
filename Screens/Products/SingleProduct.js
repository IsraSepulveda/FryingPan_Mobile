import React, { useState, useEffect } from "react";
import { Image, View, StyleSheet, Text, ScrollView, Button } from "react-native";
import { Left, T, Container, H1 } from "native-base";

const SingleProduct = (props) => {
    const [item, setItem] = useState(props.route.params.item);
    const [availability, setAvailability] = useState('');

    return (
        <Container style={styles.container}>
            <ScrollView style={{ marginBottom: 80, padding: 5 }}>
                <View>
                    <Image 
                      source={{
                        uri: item.image ? item.image
                        : "https://lh3.googleusercontent.com/proxy/ZqRo12bOfeU7xg7mTMfgENdMop_Zl9srLYDKeFilLCZkych8UO4ldDlRzT-8q5scq35krZsqxprZA85RdGLEVvejnPY4RRfNZ1eXDUJRoqHHRWBB5iMCx7UxT4l6iA"
                      }}
                      resizeMode="contain"
                      style={styles.image}
                    />
                </View>
                <View>
                    <Text>{item.name}</Text>
                    <Text>{item.description}</Text>
                </View>
                <Button title="Add" />
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%'
    },
    imageContainer: {
        backgroundColor: 'white',
        padding: 0,
        margin: 0
    },
    image: {
        width: '100%',
        height: 250
    }
})

export default SingleProduct;