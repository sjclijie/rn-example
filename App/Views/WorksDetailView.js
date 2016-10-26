import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import NavBar from '../Components/NavBar';
import TabBar from '../Components/TabBar';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: 'blue',
        backgroundColor : 'blue'
    }
});

export default class WorksDetailView extends Component {

    constructor( props ) {
        super( props );
        this.state = {};
        console.log( this.props.route.params );
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