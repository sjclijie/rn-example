import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import NavBar from '../Components/NavBar';
import TabBar from '../Components/TabBar';

const styles = {
    container: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'blue',
    }
};


export default class IndexView extends Component {

    constructor( props ) {
        super( props );
        this.state = {};
    }

    render() {
        return (
            <View style={ styles.container }>
                <NavBar route={this.props.route} navigator={this.props.navigator}></NavBar>
                <TabBar route={this.props.route} navigator={this.props.navigator}></TabBar>
            </View>
        );
    }
}
