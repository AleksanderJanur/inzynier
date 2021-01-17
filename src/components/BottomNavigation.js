import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {navigate} from '../navigationRef';

const BottomNavigationComponent = () => {
    return (
        <View style={styles.bottomNavigationContainer}>
            <TouchableHighlight style={styles.buttonContainer}>
                <View style={styles.buttonContainerView}>
                    <Icon name="edit"/>
                    <Text>Olek</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonContainer}>
                <View style={styles.buttonContainerView}>
                    <Icon name="edit"/>
                    <Text>Olek</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonContainer} onPress={() =>  navigate('Account')}>
                <View style={styles.buttonContainerView}>
                    <Icon color={"#fff"}  name="edit"/>
                    <Text style={styles.whiteColor}>Olek</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomNavigationContainer: {
        display: "flex",
        backgroundColor: "#6200EE",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        height: 60
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    buttonContainerView: {
        paddingLeft: 40,
        paddingRight: 40
    },
    whiteColor: {
        marginTop: 10,
        color: "#ffffff"
    }
});

export default BottomNavigationComponent;
