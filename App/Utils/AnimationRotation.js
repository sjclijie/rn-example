import React, { Component, PropTyps } from 'react';
import { View, Text, StyleSheet, Animated, TouchableHighlight, Dimensions, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create( {

    rowLayout: {
        flex         : 1,
        flexDirection: 'row'
    },

    leftView: {
        flex      : 1,
        alignItems: 'center'
    },

    rightView: {
        flex: 2
    },

    title: {
        fontSize: 14,
        color: '#363738'
    }
} );

export class FetchingView extends Component {

    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <View style={ styles.rowLayout }>
                <View style={ styles.leftView }>
                    <ActivityIndicator/>
                </View>
                <View style={ styles.rightView }>
                    <Text style={styles.title}>{ this.props.title }</Text>
                </View>
            </View>
        );
    }
}
