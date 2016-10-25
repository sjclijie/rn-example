import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import NavigationBar from 'react-native-navbar';

const styles = {
    navBar: {
        borderBottomWidth: 1,
        borderColor      : '#e1e1e1',
        height: 45
    },
    button: {
        flex          : 1,
        width         : 50,
        alignItems    : 'center',
        justifyContent: 'center'
    }
};

export default class NavBar extends Component {

    constructor( props ) {
        super( props );
        this.state = {};
    }

    _rightButton() {

        return (
            <TouchableOpacity
                onPress={this.handler}
                style={styles.button}
            >
                <Text>Right</Text>
            </TouchableOpacity>
        );
    }

    _leftButton() {

        return (
            <TouchableOpacity
                onPress={this.handler}
                style={styles.button}
            >
                <Text>left</Text>
            </TouchableOpacity>
        );
    }

    handler() {
        alert( "hello 碎乐." );
    }

    render() {
        return (
            <View style={{height: 65, borderWidth: 1, borderColor: 'orange', backgroundColor: '#ccc'}}>
                <NavigationBar
                    title={{title: '碎乐'}}
                    rightButton={ this._rightButton() }
                    leftButton={ this._leftButton() }
                    style={styles.navBar}
                />
            </View>
        );
    }
}

