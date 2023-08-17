import React from "react";
import { StyleSheet, Image, SafeAreaView, View } from "react-native";

const Header = () => {
    const styles = StyleSheet.create({
        header: {
            width: "100%",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            padding: 10,
            marginTop: 80
        }
    })

    return (
        <SafeAreaView style={styles.header}>
            <Image
              source={require("../assets/FryingPan_Logo.png")}
              resizeMode="contain"
              style={{ height: 70 }}
            />
        </SafeAreaView>
    )

}

export default Header;