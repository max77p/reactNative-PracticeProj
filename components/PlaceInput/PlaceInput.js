import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
class PlaceInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeName: ''
        };
    }

    placeNameChangedHandler = (val) => {
        this.setState({
            placeName: val
        })
    }
    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }

        this.props.onPlaceAdded(this.state.placeName);
    }

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput value={this.state.placeName}
                    placeholder="An awesome place"
                    onChangeText={this.placeNameChangedHandler}
                    style={styles.placeInput}
                />
                <Button
                    title="Add"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                    style={styles.placeButton}
                    onPress={this.placeSubmitHandler}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        //  flex: 1,
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        borderColor:"black",
        borderWidth:2
    },
    placeInput: {
        width: "70%"
    },
    placeButton: {
        width: "30%"
    },
})

export default PlaceInput;

